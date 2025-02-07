import classNames from 'classnames';
import styles from './section.module.scss';

interface SectionProps {
    title: string;
    subheading: string;
    children?: React.ReactNode;
    className?: string;
}

export const Section = ({ title, subheading, children, className }: SectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <div className={styles.subheading}>{subheading}</div>
                <h3 className={'uppercase'}>{title}</h3>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
