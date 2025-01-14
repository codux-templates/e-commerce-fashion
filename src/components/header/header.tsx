import { Link, useNavigate } from '@remix-run/react';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { getCartItemCount, useCartData, useCartOpen } from '~/src/wix/cart';
import { NavigationMenu } from '../navigation-menu/navigation-menu';
import { SearchInput } from '../search-input/search-input';
import { SidebarNavigationMenu } from '../sidebar-navigation-menu/sidebar-navigation-menu';
import { UserMenu } from '../user-menu/user-menu';

import styles from './header.module.scss';
import { RemoveScroll } from 'react-remove-scroll';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const cart = useCartData();
    const cartOpener = useCartOpen();
    const navigate = useNavigate();

    const onSearchSubmit = (search: string) => {
        setIsSearchOpen(false)
        navigate(`/products/all-products?search=${encodeURIComponent(search)}`);
    };

    const cartItemCount = cart.data ? getCartItemCount(cart.data) : 0;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null)
    const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Escape'){
            setIsSearchOpen(false)
        }
    };
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus(); // Focus the input when isSearchOpen is true
        }
    }, [isSearchOpen]);
    const searchButtonOnClickHandler = () => {
        setIsSearchOpen(!isSearchOpen)

    };
    return (
        <header className={classNames(styles.root, className)}>
            <div className={classNames(styles.announcementBar, 'body3')}>
                Free shipping over 50$ worldwide
            </div>
            <section className={styles.navigation}>
                <button
                    className={classNames(styles.openMenuButton, 'iconButton')}
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <span className={"material-symbols-outlined"}>menu</span>
                </button>
                <Link to="/" className={styles.logo}>
                    <svg
                        width="111"
                        height="12"
                        viewBox="0 0 111 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M103.408 11.9149V0H105.705V10.1277H110.931V11.9149H103.408Z"
                            fill="black"
                        />
                        <path
                            d="M93.484 11.9149V0H101.314V1.85532H95.7819V4.97021H100.803V6.75745H95.7819V10.0596H101.314V11.9149H93.484Z"
                            fill="black"
                        />
                        <path
                            d="M82.746 11.9149V0H87.1886C88.1531 0 88.9474 0.164539 89.5715 0.493618C90.1957 0.822696 90.6609 1.26525 90.9673 1.82128C91.2737 2.36596 91.4269 2.97305 91.4269 3.64255C91.4269 4.27801 91.2793 4.87376 90.9843 5.42979C90.6893 5.97447 90.224 6.41702 89.5886 6.75745C88.9644 7.08653 88.1588 7.25106 87.1715 7.25106H85.0439V11.9149H82.746ZM88.9247 11.9149L86.4737 6.67234H88.9588L91.546 11.9149H88.9247ZM85.0439 5.58298H87.0524C87.7446 5.58298 88.2552 5.41277 88.5843 5.07234C88.9134 4.73192 89.0779 4.28369 89.0779 3.72766C89.0779 3.17163 88.9134 2.73475 88.5843 2.41702C88.2666 2.08794 87.7559 1.9234 87.0524 1.9234H85.0439V5.58298Z"
                            fill="black"
                        />
                        <path
                            d="M69.8782 11.9149L74.2356 0H76.8399L81.1803 11.9149H78.7463L75.5293 2.62128L72.2952 11.9149H69.8782ZM71.8016 9.20851L72.4144 7.42128H78.4739L79.0697 9.20851H71.8016Z"
                            fill="black"
                        />
                        <path
                            d="M61.4694 11.9149V0H65.929C66.8935 0 67.6935 0.164539 68.329 0.493618C68.9644 0.822696 69.4354 1.26525 69.7418 1.82128C70.0481 2.37731 70.2013 3.01277 70.2013 3.72766C70.2013 4.38582 70.0538 4.99291 69.7588 5.54894C69.4637 6.10497 68.9985 6.55887 68.363 6.91064C67.7276 7.25106 66.9162 7.42128 65.929 7.42128H63.7673V11.9149H61.4694ZM63.7673 5.56596H65.7928C66.5304 5.56596 67.0581 5.40142 67.3758 5.07234C67.7049 4.73192 67.8694 4.28369 67.8694 3.72766C67.8694 3.13759 67.7049 2.68369 67.3758 2.36596C67.0581 2.03688 66.5304 1.87234 65.7928 1.87234H63.7673V5.56596Z"
                            fill="black"
                        />
                        <path
                            d="M51.014 11.9149V0H55.4735C56.4381 0 57.2381 0.164539 57.8735 0.493618C58.509 0.822696 58.9799 1.26525 59.2863 1.82128C59.5927 2.37731 59.7459 3.01277 59.7459 3.72766C59.7459 4.38582 59.5984 4.99291 59.3033 5.54894C59.0083 6.10497 58.543 6.55887 57.9076 6.91064C57.2721 7.25106 56.4608 7.42128 55.4735 7.42128H53.3118V11.9149H51.014ZM53.3118 5.56596H55.3374C56.075 5.56596 56.6026 5.40142 56.9203 5.07234C57.2494 4.73192 57.414 4.28369 57.414 3.72766C57.414 3.13759 57.2494 2.68369 56.9203 2.36596C56.6026 2.03688 56.075 1.87234 55.3374 1.87234H53.3118V5.56596Z"
                            fill="black"
                        />
                        <path
                            d="M38.1461 11.9149L42.5036 0H45.1078L49.4483 11.9149H47.0142L43.7972 2.62128L40.5632 11.9149H38.1461ZM40.0695 9.20851L40.6823 7.42128H46.7419L47.3376 9.20851H40.0695Z"
                            fill="black"
                        />
                        <path
                            d="M35.6448 12C35.2136 12 34.8675 11.8752 34.6065 11.6255C34.3455 11.3645 34.215 11.0468 34.215 10.6723C34.215 10.2979 34.3455 9.98582 34.6065 9.73617C34.8675 9.47518 35.2136 9.34468 35.6448 9.34468C36.0533 9.34468 36.3881 9.47518 36.6491 9.73617C36.9101 9.98582 37.0406 10.2979 37.0406 10.6723C37.0406 11.0468 36.9101 11.3645 36.6491 11.6255C36.3881 11.8752 36.0533 12 35.6448 12Z"
                            fill="black"
                        />
                        <path
                            d="M23.1383 11.9149V0H27.1213C28.5057 0 29.6461 0.249646 30.5426 0.748937C31.4504 1.23688 32.1199 1.92908 32.5511 2.82553C32.9936 3.71064 33.2149 4.75461 33.2149 5.95745C33.2149 7.16028 32.9936 8.20993 32.5511 9.10638C32.1199 9.99149 31.456 10.6837 30.5596 11.183C29.6631 11.6709 28.517 11.9149 27.1213 11.9149H23.1383ZM25.4362 9.94043H27.0021C27.978 9.94043 28.744 9.78156 29.3 9.46383C29.8674 9.1461 30.2702 8.6922 30.5085 8.10213C30.7468 7.50071 30.866 6.78582 30.866 5.95745C30.866 5.11773 30.7468 4.40284 30.5085 3.81277C30.2702 3.21135 29.8674 2.75177 29.3 2.43404C28.744 2.11631 27.978 1.95745 27.0021 1.95745H25.4362V9.94043Z"
                            fill="black"
                        />
                        <path
                            d="M10.738 11.9149V0H13.0359L18.5168 8.22128V0H20.8146V11.9149H18.5168L13.0359 3.71064V11.9149H10.738Z"
                            fill="black"
                        />
                        <path
                            d="M0 11.9149V0H4.44255C5.40709 0 6.20142 0.164539 6.82553 0.493618C7.44965 0.822696 7.91489 1.26525 8.22128 1.82128C8.52766 2.36596 8.68085 2.97305 8.68085 3.64255C8.68085 4.27801 8.53333 4.87376 8.2383 5.42979C7.94326 5.97447 7.47801 6.41702 6.84255 6.75745C6.21844 7.08653 5.41277 7.25106 4.42553 7.25106H2.29787V11.9149H0ZM6.17872 11.9149L3.72766 6.67234H6.21277L8.8 11.9149H6.17872ZM2.29787 5.58298H4.30638C4.99858 5.58298 5.50922 5.41277 5.8383 5.07234C6.16738 4.73192 6.33191 4.28369 6.33191 3.72766C6.33191 3.17163 6.16738 2.73475 5.8383 2.41702C5.52057 2.08794 5.00993 1.9234 4.30638 1.9234H2.29787V5.58298Z"
                            fill="black"
                        />
                    </svg>
                </Link>

                <NavigationMenu className={styles.menu} />
                <div className={styles.actions}>
                    <UserMenu />

                    <button
                        className={classNames(styles.cartButton, 'iconButton')}
                        onClick={() => cartOpener.setIsOpen(true)}
                    >
                        {cartItemCount > 0 && (
                            <div className={styles.cartItemCounter}>{cartItemCount}</div>
                        )}
                        <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                    <button
                        className={classNames(styles.searchButton, 'iconButton')}
                        onClick={searchButtonOnClickHandler}
                    >
                        <span className="material-symbols-outlined">{isSearchOpen? "close" : "search"}</span>
                    </button>
                </div>
            </section>
            {isSearchOpen && <RemoveScroll><SearchInput ref={searchInputRef} onKeyDown={onSearchKeyDown} onSearchSubmit={onSearchSubmit} /></RemoveScroll>}
            <SidebarNavigationMenu open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    );
};
