import '../../../styles/utils.scss';
import { orders } from '@wix/ecom';
import type { SerializeFrom } from '@remix-run/node';
import { media } from '@wix/sdk';
import styles from './order-item.module.scss';
import Icon from '../../icons/icon';

interface OrderItemProps {
    item: SerializeFrom<orders.OrderLineItem>;
}

export const OrderItem = ({ item }: OrderItemProps) => {
    const productName = item.productName?.translated ?? item.productName?.original ?? '';
    const image = item.image ? media.getImageUrl(item.image) : undefined;

    return (
        <div className={styles.root}>
            <div className={styles.imageWrapper}>
                {image ? (
                    <img
                        className={styles.image}
                        src={image.url}
                        alt={image.altText ?? productName}
                    />
                ) : (
                    <Icon name="image" />
                )}
            </div>

            <div className={styles.main}>
                <div className={styles.div1}>
                    <div className={styles.productNameAndPrice}>
                        <div className="heading4">{productName}</div>
                        <div className="heading4">{item.totalPriceBeforeTax?.formattedAmount}</div>
                    </div>
                    <div className={styles.productDetails}>
                        {item.descriptionLines?.map(({ name, colorInfo, plainText }, index) => {
                            const displayName = name?.translated ?? name?.original;
                            const colorName = colorInfo?.translated ?? colorInfo?.original;
                            const value = plainText?.translated ?? plainText?.original;
                            return (
                                <div key={index}>
                                    {displayName}: {colorName ?? value}
                                </div>
                            );
                        })}
                        <div className={styles.productInfo}>Qty: {item.quantity}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
