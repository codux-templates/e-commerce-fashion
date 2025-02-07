import { Link } from '@remix-run/react';
import { Avatar } from '~/src/components/avatar/avatar';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '~/src/components/dropdown-menu/dropdown-menu';
import { useUserInfo } from '~/src/wix/users';

import styles from './user-menu.module.scss';
import Icon from '../icons/icon';

export const UserMenu = () => {
    const { isLoggedIn, user } = useUserInfo();

    if (!isLoggedIn) {
        return (
            <Link className={styles.root} to={'/login'}>
                <div className={styles.icon}>
                    <Icon name={'person'} />
                </div>
                <div className={styles.label}>Sign in</div>
            </Link>
        );
    }

    return (
        <DropdownMenu
            trigger={
                <button className={styles.root}>
                    <Avatar imageSrc={user?.profile?.photo?.url} />
                    <Icon name={'expand_more'} />
                </button>
            }
            contentProps={{
                align: 'end',
                sideOffset: 6,
            }}
        >
            <DropdownMenuItem className={styles.dropdownItem}>
                <Link className={styles.link} to={'/members-area/my-account'}>
                    My Account
                </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className={styles.dropdownItem}>
                <Link className={styles.link} to={'/members-area/my-orders'}>
                    My Orders
                </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className={styles.dropdownItem}>
                <Link className={styles.link} to={'/logout'}>
                    Log out
                </Link>
            </DropdownMenuItem>
        </DropdownMenu>
    );
};
