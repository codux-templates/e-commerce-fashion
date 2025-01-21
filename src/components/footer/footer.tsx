import { Link, NavLink } from '@remix-run/react';
import classNames from 'classnames';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FadeIn } from '~/src/components/visual-effects';

import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const navItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.navItem, {
            [styles.active]: isActive,
        });

    return (
        <footer className={classNames(styles.root, className)}>
            <FadeIn duration={1.8}>
                <Link to="/" className={styles.logo}>
                    <svg
                        width="100%"
                        viewBox="0 0 1424 160"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1324.41 158.208V0.48877H1354.83V134.55H1424V158.208H1324.41Z"
                            fill="black"
                        />
                        <path
                            d="M1197.49 158.208V0.48877H1301.14V25.0479H1227.91V66.2802H1294.38V89.9381H1227.91V133.649H1301.14V158.208H1197.49Z"
                            fill="black"
                        />
                        <path
                            d="M1059.79 158.208V0.48877H1118.6C1131.37 0.48877 1141.88 2.6668 1150.14 7.02286C1158.41 11.3789 1164.56 17.237 1168.62 24.5973C1172.68 31.8073 1174.7 39.8435 1174.7 48.7058C1174.7 57.1175 1172.75 65.0034 1168.84 72.3637C1164.94 79.5737 1158.78 85.4318 1150.37 89.9381C1142.11 94.2941 1131.44 96.4722 1118.37 96.4722H1090.21V158.208H1059.79ZM1141.58 158.208L1109.14 88.8115H1142.03L1176.28 158.208H1141.58ZM1090.21 74.3915H1116.8C1125.96 74.3915 1132.72 72.1383 1137.08 67.6321C1141.43 63.1258 1143.61 57.1926 1143.61 49.8323C1143.61 42.4721 1141.43 36.6891 1137.08 32.4832C1132.87 28.1272 1126.11 25.9492 1116.8 25.9492H1090.21V74.3915Z"
                            fill="black"
                        />
                        <path
                            d="M893.901 158.208L951.581 0.48877H986.054L1043.51 158.208H1011.29L968.705 35.187L925.896 158.208H893.901ZM919.361 122.383L927.473 98.7253H1007.68L1015.57 122.383H919.361Z"
                            fill="black"
                        />
                        <path
                            d="M787.034 158.208V0.48877H846.066C858.834 0.48877 869.423 2.6668 877.835 7.02286C886.247 11.3789 892.48 17.237 896.536 24.5973C900.592 31.9575 902.62 40.3692 902.62 49.8323C902.62 58.5445 900.667 66.5806 896.761 73.9408C892.856 81.3011 886.697 87.3094 878.286 91.9659C869.874 96.4722 859.134 98.7253 846.066 98.7253H817.451V158.208H787.034ZM817.451 74.1662H844.263C854.027 74.1662 861.012 71.9881 865.217 67.6321C869.574 63.1258 871.752 57.1926 871.752 49.8323C871.752 42.0215 869.574 36.0131 865.217 31.8073C861.012 27.4512 854.027 25.2732 844.263 25.2732H817.451V74.1662Z"
                            fill="black"
                        />
                        <path
                            d="M653.074 158.208V0.48877H712.106C724.874 0.48877 735.464 2.6668 743.876 7.02286C752.287 11.3789 758.521 17.237 762.577 24.5973C766.632 31.9575 768.66 40.3692 768.66 49.8323C768.66 58.5445 766.707 66.5806 762.802 73.9408C758.896 81.3011 752.738 87.3094 744.326 91.9659C735.914 96.4722 725.175 98.7253 712.106 98.7253H683.492V158.208H653.074ZM683.492 74.1662H710.304C720.067 74.1662 727.052 71.9881 731.258 67.6321C735.614 63.1258 737.792 57.1926 737.792 49.8323C737.792 42.0215 735.614 36.0131 731.258 31.8073C727.052 27.4512 720.067 25.2732 710.304 25.2732H683.492V74.1662Z"
                            fill="black"
                        />
                        <path
                            d="M487.182 158.208L544.862 0.48877H579.335L636.79 158.208H604.57L561.986 35.187L519.177 158.208H487.182ZM512.643 122.383L520.754 98.7253H600.965L608.851 122.383H512.643Z"
                            fill="black"
                        />
                        <path
                            d="M458.513 159.335C452.805 159.335 448.223 157.682 444.769 154.378C441.314 150.923 439.586 146.717 439.586 141.76C439.586 136.803 441.314 132.672 444.769 129.368C448.223 125.913 452.805 124.186 458.513 124.186C463.92 124.186 468.351 125.913 471.806 129.368C475.261 132.672 476.988 136.803 476.988 141.76C476.988 146.717 475.261 150.923 471.806 154.378C468.351 157.682 463.92 159.335 458.513 159.335Z"
                            fill="black"
                        />
                        <path
                            d="M297.403 158.208V0.48877H350.126C368.452 0.48877 383.548 3.79336 395.414 10.4026C407.431 16.8615 416.293 26.0243 422.001 37.8907C427.859 49.607 430.788 63.4262 430.788 79.3484C430.788 95.2705 427.859 109.165 422.001 121.031C416.293 132.748 407.506 141.91 395.64 148.519C383.773 154.978 368.602 158.208 350.126 158.208H297.403ZM327.82 132.072H348.549C361.467 132.072 371.606 129.969 378.966 125.763C386.477 121.557 391.809 115.549 394.964 107.738C398.118 99.7768 399.695 90.3136 399.695 79.3484C399.695 68.2329 398.118 58.7698 394.964 50.9589C391.809 42.9979 386.477 36.9144 378.966 32.7085C371.606 28.5027 361.467 26.3998 348.549 26.3998H327.82V132.072Z"
                            fill="black"
                        />
                        <path
                            d="M137.7 158.208V0.48877H168.117L240.668 109.315V0.48877H271.085V158.208H240.668L168.117 49.607V158.208H137.7Z"
                            fill="black"
                        />
                        <path
                            d="M0 158.208V0.48877H58.8067C71.5745 0.48877 82.0891 2.6668 90.3506 7.02286C98.6121 11.3789 104.771 17.237 108.826 24.5973C112.882 31.8073 114.91 39.8435 114.91 48.7058C114.91 57.1175 112.957 65.0034 109.052 72.3637C105.146 79.5737 98.9876 85.4318 90.5759 89.9381C82.3144 94.2941 71.6496 96.4722 58.5814 96.4722H30.4173V158.208H0ZM81.7887 158.208L49.3436 88.8115H82.2393L116.487 158.208H81.7887ZM30.4173 74.3915H57.0042C66.167 74.3915 72.9264 72.1383 77.2824 67.6321C81.6385 63.1258 83.8165 57.1926 83.8165 49.8323C83.8165 42.4721 81.6385 36.6891 77.2824 32.4832C73.0766 28.1272 66.3172 25.9492 57.0042 25.9492H30.4173V74.3915Z"
                            fill="black"
                        />
                    </svg>
                </Link>
            </FadeIn>
            <div className={styles.footerNavWrapper}>
                <div className={styles.navWrapper}>
                    <div className={styles.description}>
                        {
                            "This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer"
                        }
                    </div>
                    <FadeIn className={styles.navigation} duration={1.8}>
                        <div className={styles.footerNavColumn}>
                            <div className={styles.footerNavColumnTitle}>Shop</div>
                            <nav>
                                <ul className={styles.navList}>
                                    <li>
                                        <CategoryLink categorySlug="women" className={navItemStyle}>
                                            Women
                                        </CategoryLink>
                                    </li>
                                    <li>
                                        <CategoryLink categorySlug="men" className={navItemStyle}>
                                            Men
                                        </CategoryLink>
                                    </li>
                                    <li>
                                        <CategoryLink
                                            categorySlug="accessories"
                                            className={navItemStyle}
                                        >
                                            Accessories
                                        </CategoryLink>
                                    </li>
                                    <li>
                                        <CategoryLink
                                            categorySlug="outlet"
                                            className={navItemStyle}
                                        >
                                            Outlet
                                        </CategoryLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/about-us'} className={navItemStyle}>
                                            About
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.footerNavColumn}>
                            <div className={styles.footerNavColumnTitle}>Follow us</div>
                            <ul className={styles.navList}>
                                <li>
                                    <Link
                                        to="https://www.facebook.com/WixStudio"
                                        className={styles.navItem}
                                        target="_blank"
                                    >
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.instagram.com/wixstudio"
                                        className={styles.navItem}
                                        target="_blank"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.linkedin.com/company/wixstudio/"
                                        className={styles.navItem}
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerNavColumn}>
                            <div className={styles.footerNavColumnTitle}>Contact</div>
                            <ul className={styles.navList}>
                                <li className={styles.navItem}>
                                    500 Terry Francine Street <br />
                                    San Francisco, CA 94158 <br />
                                </li>
                                <li>
                                    <Link
                                        to="tel:1234567890"
                                        className={styles.navItem}
                                        target="_blank"
                                    >
                                        Tel: 123-456-7890
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerNavColumn}>
                            <div className={styles.footerNavColumnTitle}>Legal</div>
                            <ul className={styles.navList}>
                                <li>
                                    <NavLink to={'/shipping-policy'} className={navItemStyle}>
                                        Shipping Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/privacy-policy'} className={navItemStyle}>
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/refund-policy'} className={navItemStyle}>
                                        Refund Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/terms-and-conditions'} className={navItemStyle}>
                                        Terms & Conditions
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
                <div className={styles.copyright}>© 2024 RND.APPAREL, All rights reserved.</div>
            </div>
        </footer>
    );
};
