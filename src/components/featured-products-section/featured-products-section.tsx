import '../../styles/utils.scss';
import classNames from 'classnames';
import { ProductCard, ProductCardSkeleton } from '~/src/components/product-card/product-card';
import { FadeIn } from '~/src/components/visual-effects';
import { useCategoryDetails } from '~/src/wix/categories';
import { useProducts } from '~/src/wix/products';
import styles from './featured-products-section.module.scss';
import { motion } from 'motion/react';

interface FeaturedProductsSectionProps {
    categorySlug: string;
    title?: string;
    productCount?: number;
    className?: string;
}

export const FeaturedProductsSection = (props: FeaturedProductsSectionProps) => {
    const { title, productCount = 4, categorySlug, className } = props;
    const { data: category } = useCategoryDetails(categorySlug);
    const { data: products } = useProducts({ categorySlug, limit: productCount });

    return (
        <div className={classNames(styles.root, className)}>
            <FadeIn className={styles.header} duration={1.8}>
                <h3 className={classNames(styles.headerTitle, 'uppercase')}>
                    {title ?? category?.name ?? categorySlug}
                </h3>
                <a href={`/products/${categorySlug}`} className="button">
                    Shop all
                </a>
            </FadeIn>
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
                                  key={product._id}
                                  product={product}
                                  delay={0.1 * index + 0.3}
                              />
                          </motion.div>
                      ))
                    : Array.from({ length: productCount }).map((_, i) => (
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
        </div>
    );
};
