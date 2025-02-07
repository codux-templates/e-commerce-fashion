import { getClickableElementAttributes } from '~/src/wix/utils';

import styles from './applied-filter.module.scss';
import Icon from '../icons/icon';

interface AppliedFilterProps {
    children: React.ReactNode;
    onClick: () => void;
}

export const AppliedFilter = ({ children, onClick }: AppliedFilterProps) => {
    return (
        <div className={styles.root} {...getClickableElementAttributes(onClick)}>
            {children}
            <Icon name={'close'} />
        </div>
    );
};
