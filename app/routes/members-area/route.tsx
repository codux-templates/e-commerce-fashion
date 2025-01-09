import '../../../src/styles/utils.scss';
import classNames from 'classnames';
import { Outlet, NavLink } from '@remix-run/react';

import styles from './route.module.scss';

export default function MembersAreaPage() {
    const tabClassName = ({ isActive }: { isActive: boolean }) => {
        return classNames('tab action', { active: isActive });
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className="heading1 uppercase">Profile</h1>
                <div className="tabs">
                    <NavLink to={'/members-area/my-orders'} className={tabClassName}>
                        My Orders
                    </NavLink>
                    <NavLink to={'/members-area/my-account'} className={tabClassName}>
                        My Account
                    </NavLink>
                </div>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
}
