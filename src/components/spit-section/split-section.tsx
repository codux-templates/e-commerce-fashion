import { useNavigate } from '@remix-run/react';
import styles from './split-section.module.scss';
import classNames from 'classnames';

interface SplitSectionProps {
    className?: string;
    imageUrl: string;
    title: string;
    subheading: string;
    buttonText?: string;
    buttonUrl?: string;
    reverse?: boolean;
}

export const SplitSection = ({
    className,
    imageUrl,
    title,
    subheading,
    buttonText,
    buttonUrl,
    reverse = false,
}: SplitSectionProps) => {
    const navigate = useNavigate();
    return (
        <div className={classNames(styles.root, reverse && styles.reverse, className)}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageUrl} alt={subheading} />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.subheading}>{subheading}</span>
                    <span className={styles.title}>{title}</span>
                </div>

                {buttonText && buttonUrl && (
                    <button className={'button'} onClick={() => navigate(buttonUrl)}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};
