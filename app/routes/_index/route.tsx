import '../../../src/styles/utils.scss';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { SalesBar } from '~/src/components/marquee/sales-bar';
import { CategoriesSection } from '~/src/components/categories-section/categories-section';
import { TaggedProductsSection } from '~/src/components/tagged-products-section/tagged-products-section';
import { SplitSection } from '~/src/components/spit-section/split-section';
import styles from './route.module.scss';
import classNames from 'classnames';
import { MetaFunction, useNavigate } from '@remix-run/react';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="heroBanner">
                <img
                    src="https://static.wixstatic.com/media/a2cc95_30c2b0d877354d389a2bce2e169440c9~mv2.png/v1/fit/w_640,h_640/4737ca55766dd3c7e65a3f69a8937bc5.png.png"
                    className="heroBannerImage"
                    alt=""
                />
                <div className="heroBannerOverlay">
                    <div className="subheading">Start the freshest season</div>
                    <h1 className="uppercase">New Spring Collection is Now Online</h1>
                    <CategoryLink categorySlug="all-products">
                        <button className="button invert lg">Shop Collections</button>
                    </CategoryLink>
                </div>
            </div>
            <SalesBar elements={['Shop Sale', 'Up to 50% off']} />
            <div className={'pageWrapper'}>
                <FeaturedProductsSection categorySlug="new-in" title="New In" productCount={4} />

                <CategoriesSection categorySlugs={['women', 'man', 'accessories']} />

                <TaggedProductsSection />
                <SplitSection
                    subheading={'About'}
                    buttonText={'Shop All'}
                    buttonUrl={'/products/all-products'}
                    title={
                        "Fashion is more than just what you wear—it's how you express yourself. That’s why we’re committed to offering pieces that blend quality, comfort, and style, so you can look and feel your best every day."
                    }
                    imageUrl="https://static.wixstatic.com/media/a2cc95_d312443aeecb499bb9f6986404b94193~mv2.png/v1/fit/w_640,h_640/25846e5769d5dff3f39611ee1589857b.png.png"
                />
                <FeaturedProductsSection
                    categorySlug="best-sellers"
                    title="Best Sellers"
                    productCount={4}
                />

                <div className={styles.banner}>
                    <div className={styles.bannerContentWrapper}>
                        <div className={styles.bannerContent}>
                            <span className={styles.bannerSubheading}>Product Spotlight</span>
                            <span className={styles.bannerTitle}>
                                A hot summer deserves a cool hat
                            </span>
                        </div>
                        <button
                            onClick={() => navigate('/products/all-products')}
                            className={classNames('button button-lg', styles.bannerButton)}
                        >
                            Shop now
                        </button>
                    </div>
                    <div className={styles.bannerImageWrapper}>
                        <img
                            className={styles.bannerImage}
                            src="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_640,h_640/a9bfabda082c6167b007f5eda6ea0bf8.png.png"
                            alt="Product Spotlight"
                        />
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.infoSectionCard}>
                        <span className={'material-symbols-outlined'}>local_shipping</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>Free Shipping</span>
                            <span className={styles.infoSectionCardSubheading}>
                                On orders over 120$
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoSectionCard}>
                        <span className={'material-symbols-outlined'}>refresh</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>Free Returns</span>
                            <span className={styles.infoSectionCardSubheading}>
                                On full time priced items only
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoSectionCard}>
                        <span className={'material-symbols-outlined'}>loyalty</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>Crash replacement</span>
                            <span className={styles.infoSectionCardSubheading}>
                                40% off your new kit
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoSectionCard}>
                        <span className={'material-symbols-outlined'}>recycling</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>Eco-friendly</span>
                            <span className={styles.infoSectionCardSubheading}>
                                All of our packacing is recycled
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const meta: MetaFunction = () => {
    const title = 'ReClaim: Home Goods Store';
    const description = 'Essential home products for sustainable living';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: '/social-media-image.jpg',
        },
    ];
};
