import '../../styles/utils.scss';
import classNames from 'classnames';
import { ProductCard, ProductCardSkeleton } from '~/src/components/product-card/product-card';
import { FadeIn, Reveal } from '~/src/components/visual-effects';
import { useCategoryDetails } from '~/src/wix/categories';
import { useProducts } from '~/src/wix/products';
import styles from './featured-products-section.module.scss';

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
                <h4 className={classNames(styles.headerTitle, 'uppercase')}>
                    {title ?? category?.name ?? categorySlug}
                </h4>
                <a href={`/products/${categorySlug}`} className="button">
                    Shop all
                </a>
            </FadeIn>
            <Reveal className={styles.products} direction="down" duration={1.4}>
                {products
                    ? products.items.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                      ))
                    : Array.from({ length: productCount }).map((_, i) => (
                          <ProductCardSkeleton key={i} />
                      ))}
            </Reveal>
        </div>
    );
};
