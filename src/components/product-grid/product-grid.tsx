import type { SerializeFrom } from '@remix-run/node';
import classNames from 'classnames';
import React from 'react';
import type { CollectionDetails, Product } from '~/src/wix/ecom';
import { EmptyProductsCategory } from '../empty-products-category/empty-products-category';
import { ProductCard } from '../product-card/product-card';
import styles from './product-grid.module.scss';
import { motion } from 'motion/react';
import { useLocation } from '@remix-run/react';

export interface ProductGridProps {
    /** list of products to show (either from API or serialized from loader) */
    products: Array<Product | SerializeFrom<Product>>;
    /** category containing the shown products */
    category: CollectionDetails;
    /** are there any filters applied to the passed product list */
    filtersApplied?: boolean;
    /** called when user clicks the "Clear Filters" link (shown when filters applied + no products found)  */
    onClickClearFilters?: () => void;
}

export const ProductGrid = (props: ProductGridProps) => {
    const location = useLocation();
    return <ProductGridComponent {...props} key={location.key} />;
};

const ProductGridComponent = React.memo<ProductGridProps>(function ProductGridComponent({
    category,
    products,
    filtersApplied,
    onClickClearFilters,
}) {
    if (category.numberOfProducts === 0) {
        return (
            <EmptyProductsCategory
                title="No products here yet..."
                subtitle="In the meantime, you can choose a different category to continue shopping."
            />
        );
    }

    if (filtersApplied && products.length === 0) {
        return (
            <EmptyProductsCategory
                title="We couldn't find any matches"
                subtitle="Try different filters or another category."
                actionButton={
                    <button
                        className={classNames(styles.clearFiltersButton, 'linkButton')}
                        onClick={onClickClearFilters}
                    >
                        Clear Filters
                    </button>
                }
            />
        );
    }

    return (
        <div className={styles.root}>
            <div className={styles.productGrid}>
                {products &&
                    products.map((product, index) => (
                        <div key={index}>
                            <motion.div
                                initial={{ clipPath: 'inset(100% 0 0 0)' }} // Start completely hidden
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 * index, // Stagger the start of each animation
                                    ease: 'easeOut',
                                }}
                                whileInView={{
                                    clipPath: 'inset(0% 0 0 0)',
                                    transitionEnd: { clipPath: '' },
                                }}
                                viewport={{ margin: '-90px 0px', once: true }}
                            >
                                <ProductCard
                                    product={product as Product}
                                    state={{
                                        fromCategory: {
                                            name: category.name,
                                            slug: category.slug,
                                        },
                                    }}
                                    delay={0.1 * index + 0.3}
                                />
                            </motion.div>
                        </div>
                    ))}
            </div>
        </div>
    );
});
