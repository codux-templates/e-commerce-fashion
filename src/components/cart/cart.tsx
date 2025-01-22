import { useNavigate } from '@remix-run/react';
import { Drawer } from '~/src/components/drawer/drawer';
import { toast } from '~/src/components/toast/toast';
import { useCart, useCartOpen, useCheckout } from '~/src/wix/cart';
import { getErrorMessage } from '~/src/wix/utils';
import { CartView } from './cart-view/cart-view';
import styles from './cart.module.scss';
import { useEffect, useRef } from 'react';

export const Cart = () => {
    const { isOpen, setIsOpen } = useCartOpen();
    const navigate = useNavigate();
    const ref = useRef<HTMLDivElement>(null);
    const {
        cart,
        cartTotals,
        isCartTotalsUpdating,
        updatingCartItemIds,
        removeItem,
        updateItemQuantity,
    } = useCart();

    useEffect(() => {
        if (ref.current && isOpen) {
            ref.current.focus();
        }
    }, [isOpen]);

    const handleError = (error: unknown) => {
        return toast.error(getErrorMessage(error), {
            position: 'bottom-right',
        });
    };

    const { checkout, isCheckoutInProgress } = useCheckout({
        successUrl: '/thank-you',
        cancelUrl: '/products/all-products',
        onError: handleError,
    });

    const handleViewCart = () => {
        setIsOpen(false);
        navigate('/cart');
    };

    return (
        <Drawer onClose={() => setIsOpen(false)} open={isOpen} drawerClassName={styles.drawer}>
            <CartView
                ref={ref}
                cart={cart.data}
                cartTotals={cartTotals}
                error={cart.error ? getErrorMessage(cart.error) : undefined}
                onClose={() => setIsOpen(false)}
                onCheckout={checkout}
                onViewCart={handleViewCart}
                onItemRemove={(id) => removeItem(id).catch(handleError)}
                onItemQuantityChange={(args) => updateItemQuantity(args).catch(handleError)}
                isLoading={cart.isLoading}
                isUpdating={isCartTotalsUpdating}
                isCheckoutInProgress={isCheckoutInProgress}
                updatingCartItemIds={updatingCartItemIds}
            />
        </Drawer>
    );
};
