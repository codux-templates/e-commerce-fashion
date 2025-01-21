import type { LoaderFunctionArgs } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import type { GetStaticRoutes } from '@wixc3/define-remix-app';
import classNames from 'classnames';
import { useEffect } from 'react';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { ProductFilters } from '~/src/components/product-filters/product-filters';
import { ProductGrid } from '~/src/components/product-grid/product-grid';
import { ProductSortingSelect } from '~/src/components/product-sorting-select/product-sorting-select';
import { toast } from '~/src/components/toast/toast';
import { initializeEcomApiAnonymous, ProductFilter } from '~/src/wix/ecom';
import { initializeEcomApiForRequest } from '~/src/wix/ecom/session';
import {
    productFiltersFromSearchParams,
    productSortByFromSearchParams,
    useAppliedProductFilters,
    useProductSorting,
    useProductsPageResults,
} from '~/src/wix/products';
import { getErrorMessage } from '~/src/wix/utils';

import styles from './route.module.scss';
import { Banner } from '~/src/components/banner/banner';

const INITIAL_PRODUCTS_LIMIT = 8;
const LOAD_MORE_PRODUCTS_LIMIT = 8;

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const { categorySlug } = params;

    if (!categorySlug) {
        throw new Response('Bad Request', { status: 400 });
    }

    const api = await initializeEcomApiForRequest(request);
    const filters = productFiltersFromSearchParams(url.searchParams);
    const sortBy = productSortByFromSearchParams(url.searchParams);
    const category = await api.getCategoryBySlug(categorySlug);

    if (!category) {
        throw new Response('Category Not Found', { status: 404 });
    }

    const [categoryProducts, allCategories, productPriceBounds] = await Promise.all([
        api.getProducts({
            categoryId: category._id!,
            filters,
            sortBy,
            limit: INITIAL_PRODUCTS_LIMIT,
        }),
        api.getAllCategories(),
        api.getProductPriceBoundsInCategory(category._id!),
    ]);

    return { category, categoryProducts, allCategories, productPriceBounds };
};

export const getStaticRoutes: GetStaticRoutes = async () => {
    const api = initializeEcomApiAnonymous();
    const categories = await api.getAllCategories();
    return categories.map((category) => `/products/${category.slug}`);
};

export default function ProductsPage() {
    const {
        category,
        categoryProducts: resultsFromLoader,
        allCategories,
        productPriceBounds,
    } = useLoaderData<typeof loader>() || {};

    const { appliedFilters, someFiltersApplied, clearFilters, clearAllFilters } =
        useAppliedProductFilters();

    const { sorting } = useProductSorting();

    const { products, totalProducts, loadMoreProducts, isLoadingMoreProducts, error } =
        useProductsPageResults({
            categoryId: category._id!,
            filters: appliedFilters,
            sorting,
            resultsFromLoader,
            limit: LOAD_MORE_PRODUCTS_LIMIT,
        });

    const currency = products[0]?.priceData?.currency ?? 'USD';

    useEffect(() => {
        if (error) toast.error(getErrorMessage(error));
    }, [error]);

    const handleClearFilters = () => {
        clearFilters([ProductFilter.minPrice, ProductFilter.maxPrice]);
    };
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles.categoryHeader}>
                        <h1 className={styles.categoryName}>
                            {appliedFilters.search ? `"${appliedFilters.search}"` : category.name}
                        </h1>
                        {category.description && !appliedFilters.search && (
                            <p className={styles.categoryDescription}>{category.description}</p>
                        )}
                    </div>

                    <div className={styles.categoryList}>
                        {allCategories.map((category) => (
                            <div key={category._id} className={styles.categoryListItem}>
                                <CategoryLink
                                    categorySlug={category.slug!}
                                    className={({ isActive }) =>
                                        classNames('button button-sm', styles.categoryLink, {
                                            ['active']: isActive,
                                        })
                                    }
                                >
                                    {category.name}
                                </CategoryLink>
                            </div>
                        ))}
                    </div>

                    <div className={styles.countAndSorting}>
                        <p className={styles.productsCount}>
                            {totalProducts} {totalProducts === 1 ? 'item' : 'items'}
                        </p>
                        <div className={styles.filtersAndSorting}>
                            <ProductFilters
                                minAvailablePrice={productPriceBounds.lowest}
                                maxAvailablePrice={productPriceBounds.highest}
                                currency={currency}
                                onClearFilters={handleClearFilters}
                            />
                            <ProductSortingSelect />
                        </div>
                    </div>

                    <ProductGrid
                        products={products}
                        category={category}
                        filtersApplied={someFiltersApplied}
                        onClickClearFilters={clearAllFilters}
                    />

                    {products.length < totalProducts && (
                        <div className={styles.loadMoreWrapper}>
                            <button
                                className="button button-sm"
                                onClick={loadMoreProducts}
                                disabled={isLoadingMoreProducts}
                            >
                                {isLoadingMoreProducts ? 'Loading...' : 'Load More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Banner
                title="Our Comfy sweatshirts is now online!"
                subheading={'Product Spotlight'}
                imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5eda6ea0bf8.png"
                buttonText={'Shop Now'}
                buttonUrl={'/product-details/women-s-oversized-sweatshirt'}
            />
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        { title: `${data?.category.name ?? 'RND.Apparel: Products'} | RND.Apparel` },
        {
            name: 'description',
            content: data?.category.description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
