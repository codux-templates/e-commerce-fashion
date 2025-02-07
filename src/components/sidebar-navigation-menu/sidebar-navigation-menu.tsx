import classNames from 'classnames';
import { useNavigation } from '@remix-run/react';
import { Drawer } from '../drawer/drawer';
import { NavigationMenu } from '../navigation-menu/navigation-menu';
import styles from './sidebar-navigation-menu.module.scss';
import { useEffect } from 'react';
import Icon from '../icons/icon';

interface SidebarNavigationMenuProps {
    open: boolean;
    onClose: () => void;
}

export const SidebarNavigationMenu = ({ open, onClose }: SidebarNavigationMenuProps) => {
    const navigation = useNavigation();

    useEffect(() => {
        // Close the sidebar when a user navigates to another page.
        if (navigation.state === 'loading') {
            onClose();
        }
    }, [navigation.state, onClose]);

    return (
        <Drawer open={open} onClose={onClose} drawerClassName={styles.drawer}>
            <NavigationMenu
                vertical
                className={styles.menu}
                menuItemsClassName={styles.menuItems}
            />
            <button className={classNames(styles.closeButton, 'iconButton')} onClick={onClose}>
                <Icon name={'close'} />
            </button>
        </Drawer>
    );
};
