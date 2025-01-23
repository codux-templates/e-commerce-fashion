import { products } from '@wix/stores';
import classNames from 'classnames';

import styles from './product-images.module.scss';
import Icon from '../icons/icon';
import { getWixImageUrl } from '~/src/wix/utils';

interface ProductImagesProps {
    media?: products.Media;
}

export const ProductImages = ({ media }: ProductImagesProps) => {
    const imageItems = media?.items?.filter((item) => item.image !== undefined);

    return (
        <div>
            <div className={styles.imagesWrapper}>
                {imageItems && imageItems.length > 0 ? (
                    imageItems.map((item) => {
                        const imgSrc = getWixImageUrl(
                            {
                                id: item._id!,
                                width: item.image!.width!,
                                height: item.image!.height!,
                            },
                            { maxWidth: 1000 },
                        );
                        return (
                            <div key={item._id} className={classNames(styles.imageWrapper)}>
                                <img
                                    className={styles.image}
                                    src={imgSrc}
                                    alt={item.image!.altText ?? ''}
                                />
                            </div>
                        );
                    })
                ) : (
                    <Icon name={'image'} />
                )}
            </div>
        </div>
    );
};
