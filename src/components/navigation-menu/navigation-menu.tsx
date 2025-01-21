import classNames from 'classnames';
import { NavLink } from '@remix-run/react';
import { CategoryLink } from '../category-link/category-link';
import styles from './navigation-menu.module.scss';
import { ShuffleText } from '~/src/components/visual-effects/shuffle-text';

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
        classNames(
            styles.menuItem,
            {
                [styles.active]: isActive,
            },
            menuItemsClassName,
        );

    return (
        <nav className={`${className}`}>
            <ul className={classNames(styles.menuList, { [styles.vertical]: vertical })}>
                <li>
                    <CategoryLink categorySlug="all-products" className={menuItemStyle}>
                        <ShuffleText text={'Shop All'} />
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="women" className={menuItemStyle}>
                        <ShuffleText text={'Women'} />
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="men" className={menuItemStyle}>
                        <ShuffleText text={'Men'} />
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="accessories" className={menuItemStyle}>
                        <ShuffleText text={'Accessories'} />
                    </CategoryLink>
                </li>
                <li>
                    <CategoryLink categorySlug="outlet" className={menuItemStyle}>
                        <ShuffleText text={'Outlet'} />
                    </CategoryLink>
                </li>
                <li>
                    <NavLink to={'/about-us'} className={menuItemStyle}>
                        <ShuffleText text={'About'} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
