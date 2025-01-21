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
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
    state?: {
        fromCategory?: {
            name?: string | null;
            slug?: string | null;
        };
    };
    delay?: number;
}

export const ProductCard = ({ product, state, delay = 0 }: ProductCardProps) => {
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
    const [isHovered, setIsHovered] = useState(false);

    const quickViewVariants = {
        hidden: { y: 'calc(100% + 8px)', opacity: 0.7 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
        exit: {
            y: 'calc(100% + 8px)',
            opacity: 0.7,
            transition: { duration: 0.25, ease: 'easeIn' },
        },
    };
    return (
        <div
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            role={'button'}
            tabIndex={0}
            key={product._id}
            className={styles.productCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageWrapper}>
                <ProductLink tabIndex={-1} productSlug={product.slug!} state={state}>
                    {imageUrl ? (
                        <motion.div
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.4, // Duration of the scale animation
                                delay: delay, // Delay to sync with the reveal animation
                                ease: 'easeInOut',
                            }}
                        >
                            <motion.img
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: isHovered ? 1.05 : 1,
                                    transition: { duration: 0.15, ease: 'easeOut', delay: 0 },
                                }}
                                transition={{ duration: 0.15, ease: 'easeOut', delay: 0 }}
                                src={imageUrl}
                                alt={product.name!}
                                className={styles.image}
                            />
                        </motion.div>
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
                            <span className={classNames(styles.ribbon, styles.ribbonWhite)}>
                                {100 - Math.floor((discountedPrice / price) * 100)}% Off
                            </span>
                        )}
                    {product.stock?.inventoryStatus === 'OUT_OF_STOCK' && (
                        <span className={classNames(styles.ribbon, styles.ribbonWhite)}>
                            SOLD OUT
                        </span>
                    )}
                </div>

                <motion.div
                    className={styles.quickView}
                    variants={quickViewVariants}
                    initial="hidden"
                    animate={isHovered ? 'visible' : 'exit'}
                    onMouseEnter={() => setIsHovered(true)}
                >
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
                </motion.div>
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
