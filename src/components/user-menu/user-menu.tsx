import { NavLink } from '@remix-run/react';
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
            <NavLink className={styles.root} to={'/login'}>
                <div className={styles.icon}>
                    <Icon name={'person'} />
                </div>
                <div className={styles.label}>Sign in</div>
            </NavLink>
        );
    }

    return (
        <DropdownMenu
            trigger={
                <div className={styles.root}>
                    <Avatar imageSrc={user?.profile?.photo?.url} />
                    <Icon name={'expand_more'} />
                </div>
            }
            contentProps={{
                align: 'end',
                sideOffset: 6,
            }}
        >
            <DropdownMenuItem asChild>
                <NavLink className={styles.link} to={'/members-area/my-account'}>
                    My Account
                </NavLink>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
                <NavLink className={styles.link} to={'/members-area/my-orders'}>
                    My Orders
                </NavLink>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
                <NavLink className={styles.link} to={'/logout'}>
                    Log out
                </NavLink>
            </DropdownMenuItem>
        </DropdownMenu>
    );
};
