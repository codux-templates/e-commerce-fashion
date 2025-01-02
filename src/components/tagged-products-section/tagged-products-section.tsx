import styles from './tagged-products-section.module.scss';
import { ProductsSpotlight } from '~/src/components/products-spotlight/products-spotlight';
export const TaggedProductsSection = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={'subheading'}>Sale is on</div>
                <h3 className={'uppercase'}>Don’t miss our last catches</h3>
            </div>
            <div className={styles.content}>
                <ProductsSpotlight
                    spotlights={[
                        {
                            x: 0.57,
                            y: 0.28,
                            productId: '123',
                            productName: 'Earrings',
                            price: '$9.00',
                        },
                        {
                            x: 0.4,
                            y: 0.6,
                            productId: '123',
                            productName: 'Woman’s T-shirt',
                            price: '$14.00',
                        },
                    ]}
                    imagePosition={'top'}
                    imageUrl="https://static.wixstatic.com/media/a2cc95_11cce258e7cb45ab80637d887a5e8aea~mv2.png/v1/fit/w_640,h_640/0e228a0f121297eada19e8519cd7c75e.png.png"
                />
                <ProductsSpotlight
                    spotlights={[
                        {
                            x: 0.57,
                            y: 0.2,
                            productId: '123',
                            productName: 'Beanie',
                            price: '$11.00',
                        },
                        {
                            x: 0.4,
                            y: 0.8,
                            productId: '123',
                            productName: 'Man’s T-shirt',
                            price: '$14.00',
                        },
                    ]}
                    imageUrl="https://static.wixstatic.com/media/a2cc95_547fc6927ad4401e92ada183ffcfffcf~mv2.png/v1/fit/w_640,h_640/9a9999cd3f47e2952e55fc45ae9f75b5.png.png"
                />
            </div>
        </div>
    );
};
