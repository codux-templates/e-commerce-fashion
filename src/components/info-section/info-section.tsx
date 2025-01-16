import Icon from '../icons/icon';
import styles from './info-section.module.scss';
import { IconName } from '~/src/components/icons/iconNames';

interface InfoItem {
    icon: IconName;
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
                    <Icon size={24} name={item.icon} />
                    <div className={styles.infoSectionCardTextWrapper}>
                        <span className={styles.infoCardHeading}>{item.heading}</span>
                        <span className={styles.infoSectionCardSubheading}>{item.subheading}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
