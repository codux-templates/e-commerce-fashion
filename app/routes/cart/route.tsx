import { Link, type MetaFunction } from '@remix-run/react';
import classNames from 'classnames';
import { type ReactNode, useState } from 'react';
import { CartItem } from '~/src/components/cart/cart-item/cart-item';
import { Spinner } from '~/src/components/spinner/spinner';
import { toast } from '~/src/components/toast/toast';
import { findLineItemPriceBreakdown, useCart, useCheckout } from '~/src/wix/cart';
import { getErrorMessage } from '~/src/wix/utils';

import styles from './route.module.scss';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { Banner } from '~/src/components/banner/banner';
import { InfoSection } from '~/src/components/info-section/info-section';
import { Accordion } from '~/src/components/accordion/accordion';
import { CartTotals } from '~/src/wix/ecom';
import Icon from '~/src/components/icons/icon';

export default function CartPage() {
    const [isNoteClosed, setIsNoteClosed] = useState(false);
    const {
        cart,
        cartTotals,
        isCartTotalsUpdating,
        updatingCartItemIds,
        removeItem,
        updateItemQuantity,
    } = useCart();

    const handleError = (error: unknown) => toast.error(getErrorMessage(error));

    const { checkout, isCheckoutInProgress } = useCheckout({
        successUrl: '/thank-you',
        cancelUrl: '/products/all-products',
        onError: handleError,
    });

    if (cart.isLoading) {
        return (
            <CartFallback>
                <Spinner size={50} />
            </CartFallback>
        );
    }

    if (cart.error) {
        return <CartFallback>{getErrorMessage(cart.error)}</CartFallback>;
    }

    if (!cart.data || cart.data.lineItems.length === 0) {
        return (
            <CartFallback>
                <div className={styles.cartFallbackTitle}>Cart is empty</div>
                <Link to="/" className={styles.continueBrowsingLink}>
                    Continue Browsing
                </Link>
            </CartFallback>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.cartSection}>
                <div className={styles.cart}>
                    {!isNoteClosed && (
                        <div className={styles.cartHeader}>
                            <Icon name="close" onClick={() => setIsNoteClosed(true)} />
                            <div className={'heading4 uppercase'}>Free Delivery over 120$</div>
                            <div className={'body1'}>Shop more, save more with free shipping!</div>
                        </div>
                    )}
                    <div className={styles.cartItems}>
                        {cart.data.lineItems.map((item) => (
                            <CartItem
                                key={item._id}
                                item={item}
                                isUpdating={updatingCartItemIds.includes(item._id!)}
                                priceBreakdown={findLineItemPriceBreakdown(item, cartTotals)}
                                onRemove={() => removeItem(item._id!).catch(handleError)}
                                onQuantityChange={(quantity: number) =>
                                    updateItemQuantity({ id: item._id!, quantity }).catch(
                                        handleError,
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.summaryMobile}>
                    <Accordion
                        expandIcon={<Icon name="expand_more" />}
                        collapseIcon={<Icon name="remove" />}
                        itemClassName={styles.summaryAccordion}
                        initialOpenItemIndex={0}
                        items={[
                            {
                                header: 'Show order overview',
                                content: (
                                    <Summary
                                        className={styles.summaryMobileContent}
                                        isCartTotalsUpdating={isCartTotalsUpdating}
                                        cartTotals={cartTotals}
                                        checkout={checkout}
                                        isCheckoutInProgress={isCheckoutInProgress}
                                    />
                                ),
                            },
                        ]}
                    />
                </div>

                <Summary
                    className={styles.summary}
                    isCartTotalsUpdating={isCartTotalsUpdating}
                    cartTotals={cartTotals}
                    checkout={checkout}
                    isCheckoutInProgress={isCheckoutInProgress}
                />
            </div>

            <FeaturedProductsSection
                categorySlug="best-seller"
                title="You might also like"
                productCount={4}
            />

            <Banner
                title="Our Comfy sweatshirts is now online!"
                subheading="Product Spotlight"
                buttonText="Shop now"
                buttonUrl="/product-details/women-s-oversized-sweatshirt"
                imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5edd6f9183d.png"
            />

            <InfoSection
                items={[
                    {
                        icon: 'local_shipping',
                        heading: 'Free Shipping',
                        subheading: 'On orders over 120$',
                    },
                    {
                        icon: 'refresh',
                        heading: 'Easy Returns',
                        subheading: 'Enjoy 30 days to change your mind.',
                    },
                    {
                        icon: 'loyalty',
                        heading: 'Weekly Deals',
                        subheading: 'Save big on new offers every weekend.',
                    },
                    {
                        icon: 'recycling',
                        heading: 'Secure Checkout',
                        subheading: 'Shop confidently with encrypted payments.',
                    },
                ]}
            />
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Cart | RND.Apparel' },
        {
            name: 'description',
            content: 'Essential home products for sustainable living',
        },
        {
            property: 'robots',
            content: 'noindex, nofollow',
        },
    ];
};

const CartFallback = ({ children }: { children: ReactNode }) => (
    <div className={styles.page}>
        <div className={styles.cart}>
            <div className={styles.cartFallback}>{children}</div>
        </div>
    </div>
);

interface SummaryProps {
    isCartTotalsUpdating: boolean;
    cartTotals: CartTotals | undefined;
    checkout: () => Promise<void>;
    isCheckoutInProgress: boolean;
    className?: string;
}

const Summary = ({
    isCartTotalsUpdating,
    cartTotals,
    checkout,
    isCheckoutInProgress,
    className,
}: SummaryProps) => (
    <div className={className}>
        <div
            className={classNames(styles.summaryContent, {
                [styles.loa]: isCartTotalsUpdating,
            })}
        >
            <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{cartTotals?.priceSummary?.subtotal?.formattedConvertedAmount}</span>
            </div>
            {cartTotals?.shippingInfo?.region && (
                <div className={styles.summaryRow}>
                    <span>Delivery</span>
                    <span>
                        {Number(cartTotals?.priceSummary?.shipping?.amount) === 0
                            ? 'FREE'
                            : cartTotals?.priceSummary?.shipping?.formattedConvertedAmount}
                    </span>
                </div>
            )}
            <div className={classNames(styles.summaryRow, styles.summaryTotal)}>
                <span>Total</span>
                <span>{cartTotals?.priceSummary?.total?.formattedConvertedAmount}</span>
            </div>
            {isCartTotalsUpdating && (
                <div className={styles.spinner}>
                    <Spinner size={50} />
                </div>
            )}
        </div>

        <button
            className={classNames('button button-md', styles.checkoutButton)}
            onClick={checkout}
            disabled={isCheckoutInProgress || isCartTotalsUpdating}
        >
            {isCheckoutInProgress ? <Spinner size="1lh" /> : 'Checkout'}
        </button>
    </div>
);
