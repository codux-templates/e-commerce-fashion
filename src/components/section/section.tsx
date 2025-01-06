import styles from './section.module.scss';

interface SectionProps {
    title: string;
    subheading: string;
    children?: React.ReactNode;
}
export const Section = ({title, subheading, children}: SectionProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.subheading}>{subheading}</div>
                <h3 className={'uppercase'}>{title}</h3>
            </div>
            <div className={styles.content}>
              {children}
            </div>
        </div>
    );
};
