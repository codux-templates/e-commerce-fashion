import { useEffect, useMemo, useState } from 'react';
import { cart } from '@wix/ecom';
import { media } from '@wix/sdk';
import { QuantityInput } from '~/src/components/quantity-input/quantity-input';
import { Spinner } from '~/src/components/spinner/spinner';
import { ProductPrice } from '~/src/components/product-price/product-price';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { CartItemOptions } from '../cart-item-options/cart-item-options';

import styles from './cart-item.module.scss';
import Icon from '../../icons/icon';

export interface CartItemProps {
    item: cart.LineItem;
    priceBreakdown?: cart.LineItemPricesData;
    isUpdating?: boolean;
    onRemove: () => void;
    onQuantityChange: (newQuantity: number) => void;
}

export const CartItem = ({
    item,
    priceBreakdown,
    isUpdating = false,
    onRemove,
    onQuantityChange,
}: CartItemProps) => {
    const productName = item.productName?.translated ?? '';

    const [quantity, setQuantity] = useState(item.quantity!);

    useEffect(() => {
        if (!isUpdating) {
            setQuantity(item.quantity!);
        }
    }, [item.quantity, isUpdating]);

    const updateItemQuantityDebounced = useMemo(
        () => debounce(onQuantityChange, 300),
        [onQuantityChange],
    );

    const handleQuantityChange = (value: number) => {
        setQuantity(value);
        if (value > 0) {
            updateItemQuantityDebounced(value);
        }
    };

    const image = item.image ? media.getImageUrl(item.image) : undefined;

    const isUnavailable = item.availability?.status === cart.ItemAvailabilityStatus.NOT_AVAILABLE;

    return (
        <div className={classNames(styles.root, { [styles.loading]: isUpdating })}>
            <div className={styles.itemContent}>
                {image ? (
                    <div className={styles.imageWrapper}>
                        <img src={image.url} alt={image.altText ?? productName} />
                    </div>
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <Icon name="image" />
                    </div>
                )}

                <div className={styles.productInfo}>
                    <div className={styles.productNameWrapper}>
                        <div className={styles.productName}>{productName}</div>
                    </div>

                    <div className={styles.productOptionsWrapper}>
                        {item.descriptionLines && item.descriptionLines.length > 0 && (
                            <CartItemOptions
                                className={styles.options}
                                options={item.descriptionLines}
                                visibleOptionsCount={2}
                            />
                        )}
                    </div>

                    {item.fullPrice?.formattedConvertedAmount && (
                        <ProductPrice
                            className={styles.price}
                            price={priceBreakdown?.lineItemPrice?.formattedConvertedAmount}
                        />
                    )}

                    <div className={styles.quantity}>
                        <QuantityInput
                            value={quantity}
                            onChange={handleQuantityChange}
                            className={classNames(styles.quantityInput, {
                                [styles.quantityInputDisabled]: isUnavailable,
                            })}
                            disabled={isUnavailable}
                        />
                    </div>
                    <div className={styles.priceBreakdown}>
                        {priceBreakdown?.lineItemPrice?.formattedConvertedAmount}
                    </div>
                    <button
                        className={classNames('action uppercase', styles.removeButton)}
                        onClick={onRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>

            {isUnavailable && (
                <div className={styles.unavailableIndication}>
                    <Icon name={'error'} />
                    <span>Sorry, this item is no longer available.</span>
                </div>
            )}

            {isUpdating && (
                <div className={styles.spinner}>
                    <Spinner size={50} />
                </div>
            )}
        </div>
    );
};
