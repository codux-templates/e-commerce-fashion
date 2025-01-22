import classNames from 'classnames';
import { NavLink } from '@remix-run/react';
import { CategoryLink } from '../category-link/category-link';
import styles from './navigation-menu.module.scss';
import { ShuffleText } from '~/src/components/visual-effects/shuffle-text';
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import { MegaMenu } from '~/src/components/mega-menu/mega-menu';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useProducts } from '~/src/wix/products';

interface NavigationMenuProps {
    vertical?: boolean;
    className?: string;
    menuItemsClassName?: string;
    categorySlug?: string;
}

export const NavigationMenu = ({
    className,
    menuItemsClassName,
    vertical = false,
    categorySlug = 'best-seller',
}: NavigationMenuProps) => {
    const { data: products } = useProducts({ categorySlug, limit: 4 });
    const [activeItem, setActiveItem] = useState<string>('');
    const menuItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(
            styles.menuItem,
            {
                [styles.active]: isActive,
            },
            menuItemsClassName,
        );

    return (
        <RadixNavigationMenu.Root
            orientation={vertical ? 'vertical' : 'horizontal'}
            className={`${className}`}
            defaultValue={''}
            onValueChange={setActiveItem}
            value={activeItem}
        >
            <RadixNavigationMenu.List
                className={classNames(styles.menuList, { [styles.vertical]: vertical })}
            >
                <RadixNavigationMenu.Item value="shop-all">
                    <RadixNavigationMenu.Trigger asChild>
                        <span>
                            <CategoryLink categorySlug="all-products" className={menuItemStyle}>
                                <ShuffleText text={'Shop All'} />
                            </CategoryLink>
                        </span>
                    </RadixNavigationMenu.Trigger>
                    {!vertical && (
                        <RadixNavigationMenu.Content>
                            <AnimatePresence>
                                {activeItem === 'shop-all' && <MegaMenu products={products} />}
                            </AnimatePresence>
                        </RadixNavigationMenu.Content>
                    )}
                </RadixNavigationMenu.Item>

                <RadixNavigationMenu.Item>
                    <RadixNavigationMenu.Link asChild>
                        <span>
                            <CategoryLink categorySlug="women" className={menuItemStyle}>
                                <ShuffleText text={'Women'} />
                            </CategoryLink>
                        </span>
                    </RadixNavigationMenu.Link>
                </RadixNavigationMenu.Item>
                <RadixNavigationMenu.Item>
                    <RadixNavigationMenu.Link asChild>
                        <span>
                            <CategoryLink categorySlug="men" className={menuItemStyle}>
                                <ShuffleText text={'Men'} />
                            </CategoryLink>
                        </span>
                    </RadixNavigationMenu.Link>
                </RadixNavigationMenu.Item>
                <RadixNavigationMenu.Item>
                    <RadixNavigationMenu.Link asChild>
                        <span>
                            <CategoryLink categorySlug="accessories" className={menuItemStyle}>
                                <ShuffleText text={'Accessories'} />
                            </CategoryLink>
                        </span>
                    </RadixNavigationMenu.Link>
                </RadixNavigationMenu.Item>
                <RadixNavigationMenu.Item>
                    <RadixNavigationMenu.Link asChild>
                        <span>
                            <CategoryLink categorySlug="outlet" className={menuItemStyle}>
                                <ShuffleText text={'Outlet'} />
                            </CategoryLink>
                        </span>
                    </RadixNavigationMenu.Link>
                </RadixNavigationMenu.Item>
                <RadixNavigationMenu.Item>
                    <RadixNavigationMenu.Link asChild>
                        <span>
                            <NavLink to={'/about-us'} className={menuItemStyle}>
                                <ShuffleText text={'About'} />
                            </NavLink>
                        </span>
                    </RadixNavigationMenu.Link>
                </RadixNavigationMenu.Item>
            </RadixNavigationMenu.List>

            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: '100%',
                    width: '100%',
                }}
            >
                <RadixNavigationMenu.Viewport forceMount />
            </div>
        </RadixNavigationMenu.Root>
    );
};
