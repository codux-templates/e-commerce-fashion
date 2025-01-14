import classNames from 'classnames';
import styles from './share-product-links.module.scss';

interface ShareProductLinksProps {
    productCanonicalUrl: string;
    className?: string;
}

export const ShareProductLinks = ({ productCanonicalUrl, className }: ShareProductLinksProps) => {
    const productEncodedUrl = encodeURIComponent(productCanonicalUrl);
    return (
        <div className={classNames(styles.links, className)}>
            <a
                href={`https://api.whatsapp.com/send?text=${productEncodedUrl}`}
                target="_blank"
                rel="noreferrer"
            >
                whatsapp
            </a>

            <a
                href={`http://www.facebook.com/sharer.php?u=${productEncodedUrl}`}
                target="_blank"
                rel="noreferrer"
            >
                facebook
            </a>

            <a
                href={`http://pinterest.com/pin/create/button/?url=${productEncodedUrl}`}
                target="_blank"
                rel="noreferrer"
            >
                pinterest
            </a>
        </div>
    );
};
