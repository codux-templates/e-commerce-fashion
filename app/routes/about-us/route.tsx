import type { MetaFunction } from '@remix-run/react';
import styles from './route.module.scss';
import { Banner } from '~/src/components/banner/banner';
import { SplitSection } from '~/src/components/spit-section/split-section';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { FAQSection } from '~/src/components/faq-section/faq-section';

export default function AboutUsPage() {
    return (
        <div className={styles.root}>
            <div className={styles.hero}>
                <div className={styles.header}>
                    <h1 className={styles.title}>About</h1>
                    <span className={'body1-caps'}>
                        Apparel is what happens when two creative minds bump heads on the streets of
                        New York
                    </span>
                </div>
                <div className={styles.heroImageWrapper}>
                    <img
                        className={styles.heroImage}
                        src="https://static.wixstatic.com/media/a2cc95_d312443aeecb499bb9f6986404b94193~mv2.png/v1/fit/w_2560,h_2560/25846e5769d5dff3f39611ee1589857b.png"
                        alt=""
                    />
                </div>
            </div>
            <SplitSection
                imageUrl="https://static.wixstatic.com/media/a2cc95_2dfffa7ca5f14845bbdb8de7fc7f52fe~mv2.jpg/v1/fit/w_640,h_640/09eb998c8105e324a30f42242f2ae18a.jpg.jpg"
                title={
                    "This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors."
                }
                subheading={'01 our style'}
            />
            <div className={styles.splitSection}>
                <div className={styles.videoWrapper}>
                    <video
                        className={styles.video}
                        controls={false}
                        muted={true}
                        autoPlay={true}
                        loop={true}
                        src="https://video.wixstatic.com/video/a2cc95_9d86da442483461b9b1a94fb41ccf556/480p/mp4/file.mp4"
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        src="https://static.wixstatic.com/media/a2cc95_5b6837ef722949f880075a1a81880171~mv2.jpg/v1/fit/w_960,h_960/4b66b9db6997058c01a307d873cba85f_edited.jpg"
                        alt=""
                    />
                </div>
            </div>
            <SplitSection
                inverted={true}
                title={
                    "This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors."
                }
                subheading="02 Our philosophy"
                imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5eda6ea0bf8.png"
            />
            <SplitSection
                title={
                    "This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors."
                }
                subheading="03 Our values"
                imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_1920,h_1920/a9bfabda082c6167b007f5eda6ea0bf8.png"
            />

            <FAQSection
                items={[
                    {
                        question: 'What is your returns policy?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.',
                    },
                    {
                        question: 'What is the status of my order?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.',
                    },
                    {
                        question: 'Can I return sale items?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.',
                    },
                    {
                        question: 'My payment has failes, what should I do?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.',
                    },
                    {
                        question: 'Which clothing size should I get?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.',
                    },
                ]}
            />

            <FeaturedProductsSection categorySlug={'new-in'} />
            <Banner
                title="Our Comfy sweatshirts is now online!"
                subheading="Product Spotlight"
                buttonText="Shop now"
                buttonUrl="/product-details/women-s-oversized-sweatshirt"
                imageUrl="https://static.wixstatic.com/media/a2cc95_c3f3157d16424344a167c12f4e59af0d~mv2.png/v1/fit/w_640,h_640/a9bfabda082c6167b007f5eda6ea0bf8.png.png"
            />
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'About RND.Apparel' },
        {
            name: 'description',
            content: 'Essential home products for sustainable living',
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
    ];
};
