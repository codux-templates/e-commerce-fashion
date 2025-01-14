import { getClickableElementAttributes } from '~/src/wix/utils';

import styles from './applied-filter.module.scss';

interface AppliedFilterProps {
    children: React.ReactNode;
    onClick: () => void;
}

export const AppliedFilter = ({ children, onClick }: AppliedFilterProps) => {
    return (
        <div className={styles.root} {...getClickableElementAttributes(onClick)}>
            {children}
            <span className={'material-symbols-outlined'} style={{ fontSize: 20 }}>
                close
            </span>
        </div>
    );
};
