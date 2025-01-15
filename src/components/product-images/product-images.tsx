import { products } from '@wix/stores';
import classNames from 'classnames';

import styles from './product-images.module.scss';
import Icon from '../icons/icon';

interface ProductImagesProps {
    media?: products.Media;
}

export const ProductImages = ({ media }: ProductImagesProps) => {
    const imageItems = media?.items?.filter((item) => item.image !== undefined);

    return (
        <div>
            <div className={styles.imagesWrapper}>
                {imageItems && imageItems.length > 0 ? (
                    imageItems.map((item) => (
                        <div key={item._id} className={classNames(styles.imageWrapper)}>
                            <img
                                className={styles.image}
                                src={item.image!.url}
                                alt={item.image!.altText ?? ''}
                            />
                        </div>
                    ))
                ) : (
                    <Icon name={'image'} />
                )}
            </div>
        </div>
    );
};
