import styles from './banner.module.scss';
import classNames from 'classnames';
import { NavLink } from '@remix-run/react';

interface BannerProps {
    title: string;
    subheading: string;
    buttonText: string;
    buttonUrl: string;
    imageUrl: string;
    className?: string;
}

export const Banner = ({
    title,
    subheading,
    buttonText,
    buttonUrl,
    imageUrl,
    className,
}: BannerProps) => {
    return (
        <div className={classNames(styles.banner, className)}>
            <div className={styles.bannerContentWrapper}>
                <div className={styles.bannerContent}>
                    <span className={styles.bannerSubheading}>{subheading}</span>
                    <span className={styles.bannerTitle}>{title}</span>
                </div>
                <NavLink
                    to={buttonUrl}
                    className={classNames('button animated button-md', styles.bannerButton)}
                >
                    {buttonText}
                </NavLink>
            </div>
            <div className={styles.bannerImageWrapper}>
                <img className={styles.bannerImage} src={imageUrl} alt={title} />
            </div>
        </div>
    );
};
