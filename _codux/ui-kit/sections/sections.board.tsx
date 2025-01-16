import { createBoard, Variant } from '@wixc3/react-board';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { Kit } from '../ui-kit-utils/kit';

import styles from './sections.board.module.scss';
import { SplitSection } from '~/src/components/spit-section/split-section';

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
                                    src="https://static.wixstatic.com/media/32aab9_2c3c65e142434906992aedb17db53566~mv2.jpg"
                                    className="heroBannerImage"
                                    alt=""
                                />
                                <div className="heroBannerOverlay">
                                    <div className="heroBannerSubtitle">RND.Apparel</div>
                                    <h1 className="heroBannerTitle">Reuse. Repurpose. Relove.</h1>
                                    <CategoryLink categorySlug="all-products">
                                        <LabelWithArrow>Shop Collections</LabelWithArrow>
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
