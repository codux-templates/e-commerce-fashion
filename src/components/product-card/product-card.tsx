import { products } from '@wix/stores';
import styles from './product-card.module.scss';
import { ProductPrice } from '../product-price/product-price';
import { ImagePlaceholderIcon } from '../icons';
import { ProductLink } from '~/src/components/product-link/product-link';
import { useProductDetails } from '~/src/wix/products';
import classNames from 'classnames';
import { toast } from '~/src/components/toast/toast';
import { getErrorMessage } from '~/src/wix/utils';
import { ProductOption } from '~/src/components/product-option/product-option';
import { type JsonifyObject } from 'type-fest/source/jsonify';
import { Product } from '~/src/wix/ecom';

interface ProductCardProps {
    name: string;
    /** @format media-url */
    imageUrl?: string;
    /**
     * Product price formatted with the currency.
     */
    formattedPrice?: string;
    /**
     * Discounted product price formatted with the currency.
     * It is displayed if it's not equal to the main price.
     */
    formattedDiscountedPrice?: string;
    ribbon?: string | null;
    inventoryStatus?: products.InventoryStatus;
    price?: number | null;
    discountedPrice?: number | null;
    slug: string;
    variants?: products.Variant[];
    product: Product;
    state?: {
        fromCategory?: {
            name?: string | null;
            slug?: string | null;
        };
    };
}

export const ProductCard = ({
    name,
    imageUrl,
    formattedPrice,
    formattedDiscountedPrice,
    ribbon,
    inventoryStatus,
    price,
    discountedPrice,
    slug,
    product,
  state,
}: ProductCardProps) => {

    const {
        outOfStock,
        productOptions,
        selectedChoices,
        isAddingToCart,
        addToCartAttempted,
        handleAddToCart,
        handleOptionChange,
    } = useProductDetails(product as JsonifyObject<Product>);

    const handleError = (error: unknown) => toast.error(getErrorMessage(error));

    return (
        <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <ProductLink productSlug={slug} state={state}>
                    {imageUrl ? (
                        <img src={imageUrl} alt={name} className={styles.image} />
                    ) : (
                        <ImagePlaceholderIcon className={styles.imagePlaceholderIcon} />
                    )}
                </ProductLink>
                <div className={styles.ribbonWrapper}>
                    {ribbon && <span className={styles.ribbon}>{ribbon}</span>}
                    {inventoryStatus !== "OUT_OF_STOCK" &&
                        discountedPrice &&
                        price &&
                        price !== discountedPrice && (
                            <span className={styles.ribbonWhite}>
                                {100 - Math.floor((discountedPrice / price) * 100)}% Off
                            </span>
                        )}
                    {inventoryStatus === 'OUT_OF_STOCK' && (
                        <span className={styles.ribbonWhite}>SOLD OUT</span>
                    )}
                </div>
                {productOptions && productOptions.length > 0 && (
                    <div className={styles.quickView}>
                        {productOptions && productOptions.length > 0 && (
                            <div className={styles.productOptions}>
                                {productOptions
                                    .filter((option) => option.name === 'Color')
                                    .map((option) => (
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
                                            onChange={(choice) =>
                                                handleOptionChange(option.name!, choice)
                                            }
                                        />
                                    ))}
                                {productOptions
                                    .filter((option) => option.name === 'Size')
                                    .map((option) => (
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
                                            onChange={(choice) =>
                                                handleOptionChange(option.name!, choice)
                                            }
                                        />
                                    ))}
                            </div>
                        )}

                        <button
                            className={classNames('button', styles.addToCartButton)}
                            onClick={() => handleAddToCart().catch(handleError)}
                            disabled={outOfStock || isAddingToCart}
                        >
                            {outOfStock ? 'Out of stock' : 'Add to Cart'}
                        </button>
                    </div>
                )}
            </div>
            <ProductLink productSlug={slug} state={state}>
                <div className={styles.name}>{name}</div>
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
