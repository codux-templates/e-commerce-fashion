import classNames from 'classnames';
import { orders, orderTransactions } from '@wix/ecom';
import type { SerializeFrom } from '@remix-run/node';
import { OrderItem } from './order-item/order-item';
import styles from './order-summary.module.scss';

export interface OrderSummaryProps {
    className?: string;
    order: SerializeFrom<orders.Order & orders.OrderNonNullableFields>;
    orderTransactions?: SerializeFrom<orderTransactions.OrderTransactions>;
}

export const OrderSummary = ({ order, className, orderTransactions }: OrderSummaryProps) => {
    const { lineItems, priceSummary, shippingInfo, billingInfo, buyerNote } = order;

    const deliveryContact = shippingInfo?.logistics?.shippingDestination?.contactDetails;
    const deliveryAddress = shippingInfo?.logistics?.shippingDestination?.address;
    const deliveryTime = shippingInfo?.logistics?.deliveryTime;

    const billingContact = billingInfo?.contactDetails;
    const billingAddress = billingInfo?.address;

    const paymentMethod =
        orderTransactions?.payments?.slice(-1)[0]?.regularPaymentDetails?.paymentMethod;
    const cardBrand =
        orderTransactions?.payments?.slice(-1)[0]?.regularPaymentDetails?.creditCardDetails?.brand;
    const cardNumber =
        orderTransactions?.payments?.slice(-1)[0]?.regularPaymentDetails?.creditCardDetails
            ?.lastFourDigits;

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.orderItemsSection}>
                <div className={styles.infoBox}>
                    {order.number} - Purchased online -{' '}
                    {order.purchasedDate &&
                        new Date(order.purchasedDate).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                </div>
                <div className={styles.orderItems}>
                    {lineItems.map((item) => (
                        <OrderItem key={item._id} item={item} />
                    ))}
                </div>
            </div>

            <div className={classNames(styles.section, styles.addressSection)}>
                <div className={styles.orderDetailsRow}>
                    <div className={'heading4 uppercase'}>Status</div>
                    <div className="badge black">{order.status}</div>
                </div>
                <div className={styles.orderDetailsRow}>
                    <div className={'heading4 uppercase'}>Delivery address</div>
                    <div className={styles.addressData}>
                        {deliveryContact && <div>{contactToString(deliveryContact)}</div>}
                        {deliveryAddress && <div>{addressToString(deliveryAddress)}</div>}
                        {deliveryContact?.phone && <div>{deliveryContact?.phone}</div>}
                        {deliveryTime && <div className={styles.deliveryTime}>{deliveryTime}</div>}
                    </div>
                </div>

                <div className={styles.orderDetailsRow}>
                    <div className={'heading4 uppercase'}>Billing address</div>
                    <div className={styles.addressData}>
                        {billingContact && <div>{contactToString(billingContact)}</div>}
                        {billingAddress && <div>{addressToString(billingAddress)}</div>}
                        {billingContact?.phone && <div>{billingContact.phone}</div>}
                    </div>
                </div>
                {paymentMethod && (
                    <div className={styles.orderDetailsRow}>
                        <div className={'heading4 uppercase'}>Payment</div>
                        <div className={styles.paymentData}>
                            {paymentMethod === 'CreditCard' && (cardNumber || cardBrand) ? (
                                <>
                                    {cardBrand ?? ''} {cardNumber ? `****${cardNumber}` : ''}
                                </>
                            ) : (
                                <>{paymentMethod}</>
                            )}
                        </div>
                    </div>
                )}
                <div className={styles.orderDetailsRow}>
                    {buyerNote && (
                        <div className={styles.noteSection}>
                            <div className={'heading4 uppercase'}>Note</div>
                            <div className={styles.note}>{buyerNote}</div>
                        </div>
                    )}
                </div>
                <div className={styles.orderDetailsRow}>
                    <div className={styles.priceSummary}>
                        <div className={'heading4 uppercase'}>Summary</div>
                        <div className={styles.priceDetails}>
                            <div className={styles.priceRow}>
                                <div>Subtotal</div>
                                <div>{priceSummary?.subtotal?.formattedAmount}</div>
                            </div>

                            <div className={styles.priceRow}>
                                <div>Delivery</div>
                                <div>
                                    {Number(priceSummary?.shipping?.amount) === 0
                                        ? 'Free'
                                        : priceSummary?.shipping?.formattedAmount}
                                </div>
                            </div>

                            <div className={styles.priceRow}>
                                <div>Sales Tax</div>
                                <div>{priceSummary?.tax?.formattedAmount}</div>
                            </div>

                            <div className={styles.priceRow}>
                                <div>Total</div>
                                <div>{priceSummary?.total?.formattedAmount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function addressToString(address: orders.Address) {
    return [
        address.addressLine1,
        address.addressLine2,
        address.city,
        address.postalCode,
        address.country,
    ]
        .filter(Boolean)
        .join(', ');
}

function contactToString(contact: orders.FullAddressContactDetails) {
    return [contact.firstName, contact.lastName].filter(Boolean).join(' ');
}
