import styles from './banner.module.scss';
import classNames from 'classnames';
import { useNavigate } from '@remix-run/react';

interface BannerProps {
    title: string;
    subheading: string;
    buttonText: string;
    buttonUrl: string;
    imageUrl: string;
    className?: string;
}

export const Banner = ({ title, subheading, buttonText, buttonUrl, imageUrl, className }: BannerProps) => {
    const navigate = useNavigate();
    return (
        <div className={classNames(styles.banner, className)}>
            <div className={styles.bannerContentWrapper}>
                <div className={styles.bannerContent}>
                    <span className={styles.bannerSubheading}>{subheading}</span>
                    <span className={styles.bannerTitle}>{title}</span>
                </div>
                <button
                    onClick={() => navigate(buttonUrl)}
                    className={classNames('button button-lg', styles.bannerButton)}
                >
                    {buttonText}
                </button>
            </div>
            <div className={styles.bannerImageWrapper}>
                <img className={styles.bannerImage} src={imageUrl} alt={title} />
            </div>
        </div>
    );
};
