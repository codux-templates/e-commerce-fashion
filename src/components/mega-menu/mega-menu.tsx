import styles from './mega-menu.module.scss';
import { motion } from 'motion/react';
import { ProductCard, ProductCardSkeleton } from '~/src/components/product-card/product-card';
import { useCategories } from '~/src/wix/categories';
import { type Collection } from '~/src/wix/ecom';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { useMemo } from 'react';
import { products } from '@wix/stores';

interface MegaMenuProps {
    categorySlug?: string;
    preferredOrder?: string[];
    skippedCategories?: string[];
    products: { items: products.Product[]; totalCount: number } | undefined;
}

export const MegaMenu = ({
    preferredOrder = ['new-in', 'best-seller', 'outlet', 'women', 'men', 'accessories'],
    skippedCategories = ['all-products'],
    products,
}: MegaMenuProps) => {
    const { data: categories }: { data: Collection[] | undefined } = useCategories();

    const orderedCategories = useMemo(() => {
        if (!categories) return [];
        const filteredCategories = categories.filter(
            (category) => !skippedCategories.includes(category.slug!),
        );
        const sortedCategories = preferredOrder.map((slug) =>
            filteredCategories.find((category) => category.slug === slug),
        );
        const remainingCategories = filteredCategories.filter(
            (category) => !preferredOrder.includes(category.slug!),
        );
        return [...sortedCategories, ...remainingCategories];
    }, [categories, skippedCategories, preferredOrder]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.3,
                ease: 'easeOut',
            }}
            className={styles.root}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.4,
                    delay: 0.2,
                    ease: 'easeOut',
                }}
                className={styles.contentWrapper}
            >
                <div className={styles.categories}>
                    {orderedCategories &&
                        orderedCategories.map((category) => (
                            <CategoryLink key={category?.slug} categorySlug={category?.slug ?? ''}>
                                {category?.name}
                            </CategoryLink>
                        ))}
                </div>
                <div className={styles.products}>
                    {products
                        ? products.items.map((product, index) => (
                              <motion.div
                                  key={product._id}
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
                                      isQuickViewEnabled={false}
                                      key={product._id}
                                      product={product}
                                      delay={0.1 * index + 0.5}
                                  />
                              </motion.div>
                          ))
                        : Array.from({ length: 4 }).map((_, i) => (
                              <motion.div
                                  key={i}
                                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                                  transition={{
                                      duration: 0.4,
                                      delay: 0.1 * i,
                                      ease: 'easeOut',
                                  }}
                                  whileInView={{
                                      clipPath: 'inset(0% 0 0 0)',
                                      transitionEnd: { clipPath: '' },
                                  }}
                                  viewport={{ margin: '-90px 0px', once: true }}
                              >
                                  <ProductCardSkeleton key={i} />
                              </motion.div>
                          ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
