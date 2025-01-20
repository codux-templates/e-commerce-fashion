import type { LoaderFunctionArgs } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import type { GetStaticRoutes } from '@wixc3/define-remix-app';
import classNames from 'classnames';
import { Accordion } from '~/src/components/accordion/accordion';
import { ProductImages } from '~/src/components/product-images/product-images';
import { ProductOption } from '~/src/components/product-option/product-option';
import { ProductPrice } from '~/src/components/product-price/product-price';
import { QuantityInput } from '~/src/components/quantity-input/quantity-input';
import { toast } from '~/src/components/toast/toast';
import { initializeEcomApiAnonymous } from '~/src/wix/ecom';
import { initializeEcomApiForRequest } from '~/src/wix/ecom/session';
import { useProductDetails } from '~/src/wix/products';
import { getErrorMessage, removeQueryStringFromUrl } from '~/src/wix/utils';
import { Section } from '~/src/components/section/section';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { Banner } from '~/src/components/banner/banner';
import { ProductsSpotlight } from '~/src/components/products-spotlight/products-spotlight';
import styles from './route.module.scss';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    if (!params.productSlug) throw new Response('Bad Request', { status: 400 });
    const api = await initializeEcomApiForRequest(request);
    const product = await api.getProductBySlug(params.productSlug);
    if (!product) throw new Response('Product Not Found', { status: 404 });
    return { product, canonicalUrl: removeQueryStringFromUrl(request.url) };
};

export const getStaticRoutes: GetStaticRoutes = async () => {
    const api = initializeEcomApiAnonymous();
    const { items } = await api.getProducts();
    return items.map((product) => `/product-details/${product.slug}`);
};

export default function ProductDetailsPage() {
    const { product } = useLoaderData<typeof loader>();
    // The `key` ensures the component state, such as selected options or
    // quantity, resets when navigating between products.
    return <ProductDetails key={product._id} />;
}

function ProductDetails() {
    const { product } = useLoaderData<typeof loader>();

    const {
        outOfStock,
        priceData,
        media,
        productOptions,
        quantity,
        selectedChoices,
        isAddingToCart,
        addToCartAttempted,
        handleAddToCart,
        handleOptionChange,
        handleQuantityChange,
        isAllOptionsSelected,
    } = useProductDetails(product);

    const handleError = (error: unknown) => toast.error(getErrorMessage(error));
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.productImagesWrapper}>
                    <ProductImages media={media} />
                </div>

                <div className={styles.productInfo}>
                    <h1 className={styles.productName}>{product.name}</h1>

                    {priceData && (
                        <ProductPrice
                            className={styles.price}
                            price={priceData.formatted?.price}
                            discountedPrice={priceData.formatted?.discountedPrice}
                        />
                    )}

                    {product.description && (
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    )}

                    {productOptions && productOptions.length > 0 && (
                        <div className={styles.productOptions}>
                            {productOptions.map((option) => (
                                <ProductOption
                                    key={option.name}
                                    error={
                                        addToCartAttempted &&
                                        selectedChoices[option.name!] === undefined
                                            ? `Select ${option.name}`
                                            : undefined
                                    }
                                    option={option}
                                    selectedChoice={selectedChoices[option.name!]}
                                    onChange={(choice) => handleOptionChange(option.name!, choice)}
                                />
                            ))}
                        </div>
                    )}

                    <div className={styles.quantity}>
                        <label htmlFor="quantity" className={styles.quantityLabel}>
                            Quantity
                        </label>
                        <QuantityInput
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            disabled={outOfStock}
                        />
                    </div>

                    <button
                        className={classNames(
                            'button',
                            'primaryButton',
                            'button-lg',
                            styles.addToCartButton,
                        )}
                        onClick={() => handleAddToCart().catch(handleError)}
                        disabled={outOfStock || isAddingToCart || !isAllOptionsSelected()}
                    >
                        {outOfStock
                            ? 'Out of stock'
                            : !isAllOptionsSelected()
                              ? 'Select options'
                              : 'Add to Cart'}
                    </button>

                    {!outOfStock && (
                        <button
                            className={classNames(
                                'button',
                                'button-secondary',
                                'button-lg',
                                styles.buyItNowButton,
                            )}
                            onClick={() => handleAddToCart().catch(handleError)}
                            disabled={outOfStock || isAddingToCart || !isAllOptionsSelected()}
                        >
                            Buy it now
                        </button>
                    )}

                    {product.additionalInfoSections &&
                        product.additionalInfoSections.length > 0 && (
                            <Accordion
                                className={styles.additionalInfoSections}
                                items={product.additionalInfoSections.map((section) => ({
                                    header: <div>{section.title!}</div>,
                                    content: section.description ? (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: section.description,
                                            }}
                                        />
                                    ) : null,
                                }))}
                                initialOpenItemIndex={0}
                            />
                        )}
                </div>
            </div>

            <FeaturedProductsSection
                categorySlug={'new-in'}
                title={'You might also like'}
                productCount={4}
            />
            <Section
                className={styles.spotlightsSection}
                title="Mix, match, and make it yours"
                subheading="Complete the look"
            >
                <ProductsSpotlight
                    spotlights={[
                        {
                            horizontalPercentage: 37,
                            verticalPercentage: 50,
                            productSlug: 't-shirt-dress',
                        },
                    ]}
                    imagePosition={'top'}
                    imageUrl="https://static.wixstatic.com/media/a2cc95_11cce258e7cb45ab80637d887a5e8aea~mv2.png/v1/fit/w_640,h_640/0e228a0f121297eada19e8519cd7c75e.png.png"
                />
                <ProductsSpotlight
                    spotlights={[
                        {
                            horizontalPercentage: 57,
                            verticalPercentage: 20,
                            productSlug: 'knit-beanie',
                        },
                        {
                            horizontalPercentage: 40,
                            verticalPercentage: 80,
                            productSlug: 'unisex-oversized-t-shirt',
                        },
                    ]}
                    imageUrl="https://static.wixstatic.com/media/a2cc95_547fc6927ad4401e92ada183ffcfffcf~mv2.png/v1/fit/w_640,h_640/9a9999cd3f47e2952e55fc45ae9f75b5.png.png"
                />
                <ProductsSpotlight
                    spotlights={[
                        {
                            horizontalPercentage: 40,
                            verticalPercentage: 80,
                            productSlug: 'men-s-crewneck-sweater',
                        },
                    ]}
                    imageUrl="https://static.wixstatic.com/media/a2cc95_aa2b1d021aec496d82343066eb108ed5~mv2.jpg/v1/fit/w_640,h_640/6e08f8548530cd72ddfcd50ecf665249.jpg.jpg"
                />
            </Section>
            <Banner
                className={styles.banner}
                title="Our Comfy sweatshirts is now online!"
                subheading="Product Spotlight"
                buttonText="Shop now"
                buttonUrl="/product-details/women-s-oversized-sweatshirt"
                imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5eda6ea0bf8.png"
            />
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = `${data?.product.name ?? 'Product Details'} | RND.Apparel`;
    const description = data?.product.description;

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: data?.product.media?.mainMedia?.image?.url ?? '/social-media-image.jpg',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
