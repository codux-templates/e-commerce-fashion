import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';
import { Spinner } from '~/src/components/spinner/spinner';
import { getCartItemCount, findLineItemPriceBreakdown } from '~/src/wix/cart';
import { type Cart, type CartTotals } from '~/src/wix/ecom';
import { CartItem } from '../cart-item/cart-item';

import styles from './cart-view.module.scss';
import Icon from '../../icons/icon';

export interface CartViewProps {
    cart?: Cart;
    cartTotals?: CartTotals;
    updatingCartItemIds?: string[];
    error?: string;
    isLoading: boolean;
    isUpdating?: boolean;
    isCheckoutInProgress: boolean;
    onClose: () => void;
    onCheckout: () => void;
    onViewCart: () => void;
    onItemQuantityChange: (args: { id: string; quantity: number }) => void;
    onItemRemove: (id: string) => void;
}

export const CartView = forwardRef<HTMLDivElement, CartViewProps>(function CartView(
    {
        cart,
        cartTotals,
        updatingCartItemIds = [],
        error,
        isLoading,
        //isUpdating = false,
        //isCheckoutInProgress,
        onClose,
        //onCheckout,
        onViewCart,
        onItemQuantityChange,
        onItemRemove,
    }: CartViewProps,
    ref,
) {
    if (isLoading) {
        return (
            <CartFallback>
                <Spinner size={50} />
            </CartFallback>
        );
    }

    if (error) {
        return <CartFallback>{error}</CartFallback>;
    }

    const itemCount = cart ? getCartItemCount(cart) : 0;

    return (
        <div ref={ref} className={styles.cart}>
            <div className={styles.header}>
                <span className="heading3 uppercase">Cart ({itemCount})</span>
                <button className={classNames(styles.closeButton, 'iconButton')} onClick={onClose}>
                    <Icon name={'close'} />
                </button>
            </div>

            {!cart || cart.lineItems.length === 0 ? (
                <CartFallback>Your cart is empty.</CartFallback>
            ) : (
                <>
                    <div className={styles.cartItems}>
                        {cart.lineItems.map((item) => (
                            <CartItem
                                key={item._id}
                                item={item}
                                isUpdating={updatingCartItemIds.includes(item._id!)}
                                priceBreakdown={findLineItemPriceBreakdown(item, cartTotals)}
                                onQuantityChange={(quantity: number) =>
                                    onItemQuantityChange({ id: item._id!, quantity })
                                }
                                onRemove={() => onItemRemove(item._id!)}
                            />
                        ))}
                    </div>

                    <div className={styles.footer}>
                        {cart.subtotal && (
                            <>
                                <div className={styles.subtotal}>
                                    <span>Subtotal</span>
                                    <span>{cart.subtotal.formattedConvertedAmount}</span>
                                </div>
                                <div className={styles.subtotalNote}>
                                    <Icon name={'local_shipping'} />
                                    Estimated delivery 3-7 business days
                                </div>
                            </>
                        )}

                        {/*                        <button
                            className={classNames(
                                'button',
                                'mutedPrimaryButton',
                                styles.checkoutButton,
                            )}
                            onClick={onCheckout}
                            disabled={isCheckoutInProgress || isUpdating}
                        >
                            {isCheckoutInProgress ? <Spinner size="1lh" /> : 'Checkout'}
                        </button>*/}
                        <button
                            className={classNames(
                                'button button-secondary button-md',
                                styles.viewCartButton,
                            )}
                            onClick={onViewCart}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
});

const CartFallback = ({ children }: { children: ReactNode }) => (
    <div className={styles.cartFallback}>{children}</div>
);
