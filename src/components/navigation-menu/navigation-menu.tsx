import classNames from 'classnames';
import { NavLink } from '@remix-run/react';
import { CategoryLink } from '../category-link/category-link';
import styles from './navigation-menu.module.scss';

interface NavigationMenuProps {
    vertical?: boolean;
    className?: string;
    menuItemsClassName?: string;
}

export const NavigationMenu = ({
    className,
    menuItemsClassName,
    vertical = false,
}: NavigationMenuProps) => {
    const menuItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.menuItem, {
            [styles.active]: isActive,
        });

    return (
        <nav className={`${className}`}>
            <ul className={classNames(styles.menuList, { [styles.vertical]: vertical })}>
                <li>
                    <CategoryLink
                        categorySlug="all-products"
                        className={classNames(menuItemStyle, menuItemsClassName)}
                    >
                        Shop All
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink
                        categorySlug="women"
                        className={classNames(menuItemStyle, menuItemsClassName)}
                    >
                        Women
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink
                        categorySlug="men"
                        className={classNames(menuItemStyle, menuItemsClassName)}
                    >
                        Men
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink
                        categorySlug="accessories"
                        className={classNames(menuItemStyle, menuItemsClassName)}
                    >
                        Accessories
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink
                        categorySlug="outlet"
                        className={classNames(menuItemStyle, menuItemsClassName)}
                    >
                        Outlet
                    </CategoryLink>
                </li>
                <li>
                    <NavLink
                        to={'/about-us'}
                        className={classNames(menuItemStyle, menuItemsClassName)}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
