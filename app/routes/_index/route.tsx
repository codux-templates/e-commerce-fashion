import '../../../src/styles/utils.scss';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
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
                    src="https://s3-alpha-sig.figma.com/img/34eb/d38e/4737ca55766dd3c7e65a3f69a8937bc5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akfbVZ9I38apeW~rJ1XTtr7IhCMH-zOz0c8Vkuo00w9Z5rGoo2IJFxKnKJzfSIThBRE8KYkmMZGNHW9RjWtrjX7rwqeXxicUEBCQU73ygYZVhyMyVmjC8zTIBHyxi2OJKRwmXISZlfJC~22RH0oFSfnleot2QjT6MSGnBB4law8VwIi-9ebeHZ7afd9lSsdrne0CLlVfMXPNdGHEI~BPUGR1p3rbR9Lso4KHRGiad4Ysq-xycENG5zC~LgvQG4s8mrOWXAiEQSIRjObQo26G0h78cEBUsoW9ABmh86XFzKDwCo5LPQGIlMEN9AqRTObeEL1SM9qWCJRCIdT8krdFVA__"
                    className="heroBannerImage"
                    alt=""
                />
                <div className="heroBannerOverlay">
                    <div className="subheading">Start the freshest season</div>
                    <h1 className="uppercase">New Spring Collection is Now Online</h1>
                    <CategoryLink categorySlug="all-products">
                        <LabelWithArrow>Shop Collections</LabelWithArrow>
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
                    imageUrl={
                        'https://s3-alpha-sig.figma.com/img/9dd3/fe0d/25846e5769d5dff3f39611ee1589857b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsgAYeVcBWBuoo-zvP6AzvWq6etJft7oxhmwxZMsVoW8B7-RWKoAl51G-bCWAzjlqlloVk8iwkmmx-qddC5GsRG-r~i8lh4bU8VbaT1e~lQFuPhSI6gh0sAyDNNRzsJskAKKhaJtvVLwWb7rMUKSYKvNTOiiggOk5CXD4fy8-J2l64-RjQ6qZ-YltxF7TbPxGSLShQ8KEpBctHHjO27BCqMLS6aBk8f9GmEu7Y7ox9hyYpNGShe61yNMDJpTAkFT4h651XDN93WvuJ-Vn695yKcy1dRn8Wfc4SE7AZ0js0hCQr~6Csw5CqIpKwI2oXXCTuJH9Jj-ydzaDwfkIfsaJA__'
                    }
                />
                <FeaturedProductsSection
                    categorySlug="best-sellers"
                    title="Best Sellers"
                    productCount={4}
                />

                <div className={styles.banner}>
                    <div className={styles.bannerContentWrapper}>
                        <div className={styles.bannerContent}>
                            <span className={styles.bannerSubheading}>
                                Product Spotlight
                            </span>
                            <span className={styles.bannerTitle}>
                                A hot summer deserves a cool hat
                            </span>
                        </div>
                        <button onClick={() => navigate('/products/all-products')} className={classNames("button button-lg",styles.bannerButton)}>
                          Shop now
                        </button>
                    </div>
                    <div className={styles.bannerImageWrapper}>
                        <img className={styles.bannerImage} src="https://s3-alpha-sig.figma.com/img/ae39/2e28/a9bfabda082c6167b007f5eda6ea0bf8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NNEJH16XwLY1sAIUuudpWmNTRJ6gAvNXbo9nkUbS-Gh71eFm-6Ojrc-TsWEk-Jesl5Fc5SjsH1XIBtPzxuTqiBL-TiSPCq686vfjXlMkOdAf6EmSeKSnRDYz-LkW984Bt~NibG~8axA8tAW69IgieOVapjRv7~kyQl-73SDxeZqX70hFldrHsd4iJ0zYSIf1SRSqRJZ2mT4QsksZ1y~nk5a~W4BD59TAkRFq4HJXUTrMMv~AM1qdBzS4~wiBqkB5tJjVmKtbm3X4Gfxlgo18EEB8X9rWuzys5GCYtKz5Sc43akkUwPPa7ebHuLunKgQsDLlXq8Fg7LYar0dSXF9hbA__" alt="Product Spotlight" />
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.infoSectionCard}>
                        <span className={"material-symbols-outlined"}>local_shipping</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>
                                Free Shipping
                            </span>
                            <span className={styles.infoSectionCardSubheading}>
                                On orders over 120$
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoSectionCard}>
                        <span className={"material-symbols-outlined"}>refresh</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>
Free Returns
                            </span>
                            <span className={styles.infoSectionCardSubheading}>
On full time priced items only
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoSectionCard}>
                        <span className={"material-symbols-outlined"}>loyalty</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>
Crash replacement
                            </span>
                            <span className={styles.infoSectionCardSubheading}>
40% off your new kit
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoSectionCard}>
                        <span className={"material-symbols-outlined"}>recycling</span>
                        <div className={styles.infoSectionCardTextWrapper}>
                            <span className={styles.infoCardHeading}>
Eco-friendly
                            </span>
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
