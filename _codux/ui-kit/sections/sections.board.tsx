import { createBoard, Variant } from '@wixc3/react-board';
import { CategoryLink } from '~/src/components/category-link/category-link';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { Kit } from '../ui-kit-utils/kit';

import styles from './sections.board.module.scss';
import { SplitSection } from '~/src/components/spit-section/split-section';
import { Banner } from '~/src/components/banner/banner';
import { InfoSection } from '~/src/components/info-section/info-section';

export default createBoard({
    name: 'Sections',
    Board: () => (
        <ComponentWrapper>
            <Kit category="Core Components" title="Sections" className={styles.container}>
                <Kit.Section>
                    <Kit.Item>
                        <Variant name="Hero Banner">
                            <div className="heroBanner">
                                <img
                                    src="https://static.wixstatic.com/media/a2cc95_30c2b0d877354d389a2bce2e169440c9~mv2.png/v1/fit/w_2560,h_1440/4737ca55766dd3c7e65a3f69a8937bc5.png"
                                    className="heroBannerImage"
                                    alt=""
                                />
                                <div className="heroBannerOverlay">
                                    <div className="subheading">Start the freshest season</div>
                                    <h1 className="uppercase">
                                        New Spring Collection is Now Online
                                    </h1>
                                    <CategoryLink categorySlug="all-products">
                                        <button className="button invert button-md">
                                            Shop Collections
                                        </button>
                                    </CategoryLink>
                                </div>
                            </div>
                        </Variant>
                        <Kit.Description>Hero Banner</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Split Section">
                            <SplitSection
                                subheading={'About'}
                                buttonText={'Shop All'}
                                buttonUrl={'/products/all-products'}
                                title={
                                    "Fashion is more than just what you wear it's how you express yourself. That’s why we’re committed to offering pieces that blend quality, comfort, and style, so you can look and feel your best every day."
                                }
                                imageUrl="https://static.wixstatic.com/media/a2cc95_d312443aeecb499bb9f6986404b94193~mv2.png/v1/fit/w_640,h_640/25846e5769d5dff3f39611ee1589857b.png.png"
                            />
                        </Variant>
                        <Kit.Description>Split section</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Split Section (Inverted)">
                            <SplitSection
                                inverted={true}
                                subheading={'About'}
                                buttonText={'Shop All'}
                                buttonUrl={'/products/all-products'}
                                title={
                                    "Fashion is more than just what you wear it's how you express yourself. That’s why we’re committed to offering pieces that blend quality, comfort, and style, so you can look and feel your best every day."
                                }
                                imageUrl="https://static.wixstatic.com/media/a2cc95_d312443aeecb499bb9f6986404b94193~mv2.png/v1/fit/w_640,h_640/25846e5769d5dff3f39611ee1589857b.png.png"
                            />
                        </Variant>
                        <Kit.Description>Split section (inverted)</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Featured Products">
                            <FeaturedProductsSection categorySlug="new-in" title="New In" />
                        </Variant>
                        <Kit.Description>Featured Products</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Product Banner">
                            <Banner
                                title={'Our Comfy sweatshirts is now online!'}
                                subheading={'Product Spotlight'}
                                buttonText={'Shop Now'}
                                buttonUrl={'/product-details/women-s-oversized-sweatshirt'}
                                imageUrl={
                                    'https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5eda6ea0bf8.png'
                                }
                            />
                        </Variant>
                        <Kit.Description>Product Banner</Kit.Description>
                    </Kit.Item>
                    <Kit.Item>
                        <Variant name="Info Section">
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
                        </Variant>
                        <Kit.Description>Info Section</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
            </Kit>
        </ComponentWrapper>
    ),
    environmentProps: {
        windowWidth: 1070,
        windowHeight: 1800,
    },
    isSnippet: true,
});
