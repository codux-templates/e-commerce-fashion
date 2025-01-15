import styles from './product-card.module.scss';
import { ProductPrice } from '../product-price/product-price';
import { ProductLink } from '~/src/components/product-link/product-link';
import { getProductImageUrl, useProductDetails } from '~/src/wix/products';
import classNames from 'classnames';
import { toast } from '~/src/components/toast/toast';
import { getErrorMessage } from '~/src/wix/utils';
import { ProductOption } from '~/src/components/product-option/product-option';
import { Product } from '~/src/wix/ecom';
import Icon from '../icons/icon';

interface ProductCardProps {
    product: Product;
    state?: {
        fromCategory?: {
            name?: string | null;
            slug?: string | null;
        };
    };
}

export const ProductCard = ({ product, state }: ProductCardProps) => {
    const {
        outOfStock,
        productOptions,
        selectedChoices,
        isAddingToCart,
        addToCartAttempted,
        handleAddToCart,
        handleOptionChange,
        isAllOptionsSelected,
    } = useProductDetails(product);

    const handleError = (error: unknown) => toast.error(getErrorMessage(error));
    const imageUrl = getProductImageUrl(product, { maxWidth: 1000 });
    const price = product.priceData?.price;
    const formattedPrice = product.priceData?.formatted?.price;
    const formattedDiscountedPrice = product.priceData?.formatted?.discountedPrice;
    const discountedPrice = product.priceData?.discountedPrice;

    return (
        <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <ProductLink productSlug={product.slug!} state={state}>
                    {imageUrl ? (
                        <img src={imageUrl} alt={product.name!} className={styles.image} />
                    ) : (
                        <Icon name="image" />
                    )}
                </ProductLink>
                <div className={styles.ribbonWrapper}>
                    {product.ribbon && <span className={styles.ribbon}>{product.ribbon}</span>}
                    {product.stock?.inventoryStatus !== 'OUT_OF_STOCK' &&
                        discountedPrice &&
                        price &&
                        price !== discountedPrice && (
                            <span className={styles.ribbonWhite}>
                                {100 - Math.floor((discountedPrice / price) * 100)}% Off
                            </span>
                        )}
                    {product.stock?.inventoryStatus === 'OUT_OF_STOCK' && (
                        <span className={styles.ribbonWhite}>SOLD OUT</span>
                    )}
                </div>

                <div className={styles.quickView}>
                    {productOptions && productOptions.length > 0 && (
                        <div className={styles.productOptions}>
                            {productOptions.map((option) => (
                                <ProductOption
                                    isQuickView={true}
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

                    <button
                        className={classNames('button', styles.addToCartButton)}
                        onClick={() => handleAddToCart().catch(handleError)}
                        disabled={outOfStock || isAddingToCart || !isAllOptionsSelected()}
                    >
                        {outOfStock
                            ? 'Out of stock'
                            : !isAllOptionsSelected()
                              ? 'Select options'
                              : 'Add to Cart'}
                    </button>
                </div>
            </div>
            <ProductLink productSlug={product.slug!} state={state}>
                <div className={styles.name}>{product.name!}</div>
                <ProductPrice
                    className={styles.price}
                    price={formattedPrice}
                    discountedPrice={formattedDiscountedPrice}
                />
            </ProductLink>
        </div>
    );
};

export const ProductCardSkeleton = () => (
    <div className={styles.skeleton}>
        <div className={styles.imageWrapper} />
        <div className={styles.name}>&nbsp;</div>
        <div className={styles.price}>&nbsp;</div>
    </div>
);
