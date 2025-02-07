import { createBoard } from '@wixc3/react-board';
import {
    ProductSpotlight,
    ProductsSpotlight,
} from '~/src/components/products-spotlight/products-spotlight';

import styles from './products-spotlight.board.module.scss';
import ComponentWrapper from '~/_codux/board-wrappers/component-wrapper';

export default createBoard({
    Board: () => {
        const spotlights: ProductSpotlight[] = [
            { horizontalPercentage: 40, verticalPercentage: 33, productSlug: 'knit-beanie' },
            { horizontalPercentage: 60, verticalPercentage: 66, productSlug: 'knit-beanie' },
        ];
        return (
            <ComponentWrapper>
                <div className={styles.container}>
                    <ProductsSpotlight
                        imageUrl="https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fill/w_640,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.webp"
                        spotlights={spotlights}
                    />
                </div>
            </ComponentWrapper>
        );
    },
    name: 'Products Spotlight',
    environmentProps: {
        windowWidth: 500,
        windowHeight: 500,
    },
});
