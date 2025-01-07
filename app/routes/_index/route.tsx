import '../../../src/styles/utils.scss';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { SalesBar } from '~/src/components/marquee/sales-bar';
import { CategoriesSection } from '~/src/components/categories-section/categories-section';
import { Section } from '~/src/components/section/section';
import { SplitSection } from '~/src/components/spit-section/split-section';
import styles from './route.module.scss';
import { MetaFunction } from '@remix-run/react';
import { Banner } from '~/src/components/banner/banner';
import { ProductsSpotlight } from '~/src/components/products-spotlight/products-spotlight';

export default function HomePage() {
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
                        <button className="button invert button-lg">Shop Collections</button>
                    </CategoryLink>
                </div>
            </div>
            <SalesBar elements={['Shop Sale', 'Up to 50% off']} />
            <div className={'pageWrapper'}>
                <FeaturedProductsSection categorySlug="new-in" title="New In" productCount={4} />

                <CategoriesSection categorySlugs={['women', 'man', 'accessories']} />

                <Section
                    title="Sale is on"
                    subheading="Don’t miss our last catches"
                >
                    <ProductsSpotlight
                      spotlights={[
                          {
                              x: 0.57,
                              y: 0.28,
                              productSlug: 'flowers'
                          },
                          {
                              x: 0.4,
                              y: 0.6,
                              productSlug: 'i-m-a-product-9'
                          },
                      ]}
                      imagePosition={'top'}
                      imageUrl="https://static.wixstatic.com/media/a2cc95_11cce258e7cb45ab80637d887a5e8aea~mv2.png/v1/fit/w_640,h_640/0e228a0f121297eada19e8519cd7c75e.png.png"
                    />
                    <ProductsSpotlight
                      spotlights={[
                          {
                              x: 0.4,
                              y: 0.6,
                              productSlug: 'flowers'
                          },
                          {
                              x: 0.4,
                              y: 0.8,
                              productSlug: 'i-m-a-product-9'
                          },
                      ]}
                      imageUrl="https://static.wixstatic.com/media/a2cc95_547fc6927ad4401e92ada183ffcfffcf~mv2.png/v1/fit/w_640,h_640/9a9999cd3f47e2952e55fc45ae9f75b5.png.png"
                    />
                </Section>
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

                <Banner
                    title="A hot summer deserves a cool hat"
                    subheading="Product Spotlight"
                    buttonText="Shop now"
                    buttonUrl="/products/all-products"
                    imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_640,h_640/a9bfabda082c6167b007f5eda6ea0bf8.png.png"
                />

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
