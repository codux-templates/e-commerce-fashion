import styles from './info-section.module.scss'; // Assuming you have styles for the component

interface InfoItem {
    icon: string;
    heading: string;
    subheading: string;
}

interface InfoSectionProps {
    items: InfoItem[];
}

export const InfoSection = ({ items }: InfoSectionProps) => {
    return (
        <div className={styles.infoSection}>
            {items.map((item, index) => (
                <div key={index} className={styles.infoSectionCard}>
                    <span className={'material-symbols-outlined'}>{item.icon}</span>
                    <div className={styles.infoSectionCardTextWrapper}>
                        <span className={styles.infoCardHeading}>{item.heading}</span>
                        <span className={styles.infoSectionCardSubheading}>{item.subheading}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
