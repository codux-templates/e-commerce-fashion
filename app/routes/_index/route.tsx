import '../../../src/styles/utils.scss';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { Marquee } from '~/src/components/marquee/marquee';
import { CategoriesSection } from '~/src/components/categories-section/categories-section';
import { Section } from '~/src/components/section/section';
import { SplitSection } from '~/src/components/spit-section/split-section';
import { MetaFunction } from '@remix-run/react';
import { Banner } from '~/src/components/banner/banner';
import { ProductsSpotlight } from '~/src/components/products-spotlight/products-spotlight';
import { InfoSection } from '~/src/components/info-section/info-section';

export default function HomePage() {
    return (
        <>
            <div className="heroBanner">
                <img
                    src="https://static.wixstatic.com/media/a2cc95_30c2b0d877354d389a2bce2e169440c9~mv2.png/v1/fit/w_2560,h_1440/4737ca55766dd3c7e65a3f69a8937bc5.png"
                    className="heroBannerImage"
                    alt=""
                />
                <div className="heroBannerOverlay">
                    <div className="subheading">Start the freshest season</div>
                    <h1 className="uppercase">New Spring Collection is Now Online</h1>
                    <CategoryLink categorySlug="all-products">
                        <button className="button invert animated button-md">
                            Shop Collections
                        </button>
                    </CategoryLink>
                </div>
            </div>
            <Marquee elements={['Shop Sale', 'Up to 50% off']} />
            <div className={'pageWrapper'}>
                <FeaturedProductsSection categorySlug="new-in" title="New In" productCount={8} />

                <CategoriesSection categorySlugs={['women', 'men', 'accessories']} />

                <Section title="Sale is on" subheading="Don’t miss our last catches">
                    <ProductsSpotlight
                        spotlights={[
                            {
                                horizontalPercentage: 37,
                                verticalPercentage: 50,
                                productSlug: 't-shirt-dress',
                            },
                        ]}
                        imagePosition={'top'}
                        imageUrl="https://static.wixstatic.com/media/a2cc95_11cce258e7cb45ab80637d887a5e8aea~mv2.png/v1/fit/w_640,h_640/0e228a0f121297eada19e8519cd7c75e.png.png"
                    />
                    <ProductsSpotlight
                        spotlights={[
                            {
                                horizontalPercentage: 55,
                                verticalPercentage: 20,
                                productSlug: 'knit-beanie',
                            },
                            {
                                horizontalPercentage: 40,
                                verticalPercentage: 80,
                                productSlug: 'unisex-oversized-t-shirt',
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
                        "Fashion is more than just what you wear it's how you express yourself. That’s why we’re committed to offering pieces that blend quality, comfort, and style, so you can look and feel your best every day."
                    }
                    imageUrl="https://static.wixstatic.com/media/a2cc95_d312443aeecb499bb9f6986404b94193~mv2.png/v1/fit/w_1920,h_1920/25846e5769d5dff3f39611ee1589857b.png"
                />
                <FeaturedProductsSection
                    categorySlug="best-seller"
                    title="Best Sellers"
                    productCount={4}
                />

                <Banner
                    title="Our Comfy sweatshirts is now online!"
                    subheading="Product Spotlight"
                    buttonText="Shop now"
                    buttonUrl="/product-details/women-s-oversized-sweatshirt"
                    imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5eda6ea0bf8.png"
                />

                <InfoSection
                    items={[
                        {
                            icon: 'local_shipping',
                            heading: 'Free Shipping',
                            subheading: 'On orders over 120$',
                        },
                        {
                            icon: 'refresh',
                            heading: 'Easy Returns',
                            subheading: 'Enjoy 30 days to change your mind.',
                        },
                        {
                            icon: 'loyalty',
                            heading: 'Weekly Deals',
                            subheading: 'Save big on new offers every weekend.',
                        },
                        {
                            icon: 'recycling',
                            heading: 'Secure Checkout',
                            subheading: 'Shop confidently with encrypted payments.',
                        },
                    ]}
                />
            </div>
        </>
    );
}

export const meta: MetaFunction = () => {
    const title = 'RND.Apparel';
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
