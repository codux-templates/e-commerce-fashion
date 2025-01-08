import classNames from 'classnames';
import { NavLink } from '@remix-run/react';
import { CategoryLink } from '../category-link/category-link';
import styles from './navigation-menu.module.scss';

interface NavigationMenuProps {
    className?: string;
    vertical?: boolean;
}

export const NavigationMenu = ({ className, vertical = false }: NavigationMenuProps) => {
    const menuItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.menuItem, {
            [styles.active]: isActive,
        });

    return (
        <nav className={`${className}`}>
            <ul className={classNames(styles.menuList, { [styles.vertical]: vertical })}>
                <li>
                    <CategoryLink categorySlug="all-products" className={menuItemStyle}>
                        Shop All
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="women" className={menuItemStyle}>
                        Women
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="men" className={menuItemStyle}>
                        Men
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="accessories" className={menuItemStyle}>
                        Accessories
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="outlet" className={menuItemStyle}>
                        Outlet
                    </CategoryLink>
                </li>
                <li>
                    <NavLink to="/about-us" className={menuItemStyle}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
