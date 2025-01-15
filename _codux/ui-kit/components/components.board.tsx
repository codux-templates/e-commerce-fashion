import { createBoard, Variant } from '@wixc3/react-board';
import { Accordion } from '~/src/components/accordion/accordion';
import { ProductCard } from '~/src/components/product-card/product-card';
import { QuantityInput } from '~/src/components/quantity-input/quantity-input';
import { Select, SelectItem } from '~/src/components/select/select';
import { ColorSelect } from '~/src/components/color-select/color-select';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Kit } from '../ui-kit-utils/kit';

import styles from './components.board.module.scss';
import { products } from '@wix/stores';

export default createBoard({
    name: 'Components & Elements',
    Board: () => (
        <ComponentWrapper>
            <Kit category="Core Components" title="Components & Elements">
                <Kit.Section title="Inputs">
                    <Kit.Item>
                        <Variant name="Input">
                            <input className="textInput" value="Text input" onChange={() => {}} />
                        </Variant>
                        <Kit.Description>Input</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Input Placeholder">
                            <input
                                className="textInput"
                                placeholder="Placeholder"
                                value=""
                                onChange={() => {}}
                            />
                        </Variant>
                        <Kit.Description>Input Placeholder</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Disabled Input">
                            <input
                                disabled
                                className="textInput"
                                value="Disabled input"
                                onChange={() => {}}
                            />
                        </Variant>
                        <Kit.Description>Disabled Input</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Number Input">
                            <QuantityInput value={6} onChange={() => {}} />
                        </Variant>
                        <Kit.Description>Number Input</Kit.Description>
                    </Kit.Item>
                </Kit.Section>

                <Kit.Section title="Selects" className={styles.demoWidth}>
                    <Kit.Item>
                        <Variant name="Select">
                            <Select value="" onValueChange={() => {}} placeholder="Select value">
                                <SelectItem value="option-1">Option 1</SelectItem>
                                <SelectItem value="option-2">Option 2</SelectItem>
                                <SelectItem value="option-3">Option 3</SelectItem>
                            </Select>
                        </Variant>
                        <Kit.Description>Select</Kit.Description>
                    </Kit.Item>

                    <Kit.Item>
                        <Variant name="Color Select">
                            <ColorSelect
                                className="colorSelect"
                                selectedId="color2"
                                onChange={() => {}}
                                options={[
                                    { id: 'color1', color: 'white' },
                                    { id: 'color2', color: 'black' },
                                    { id: 'color3', color: '#00a400' },
                                    { id: 'color4', color: 'rgb(214, 122, 127)' },
                                    { id: 'color5', color: 'hsl(30deg 82% 43%)' },
                                ]}
                            />
                        </Variant>
                        <Kit.Description>Color Select</Kit.Description>
                    </Kit.Item>
                </Kit.Section>

                <Kit.Section title="Accordion">
                    <Kit.Item className={styles.demoWidth}>
                        <Variant name="Accordion">
                            <Accordion
                                items={[
                                    {
                                        header: 'Product Info',
                                        content: 'Content',
                                    },
                                    {
                                        header: 'Return & Refund Policy',
                                        content: 'Content',
                                    },
                                    {
                                        header: 'Shipping Info ',
                                        content: 'Content',
                                    },
                                ]}
                            />
                        </Variant>
                        <Kit.Description>Accordion</Kit.Description>
                    </Kit.Item>
                </Kit.Section>

                <Kit.Section title="Cards">
                    <Kit.Item className={styles.demoWidth}>
                        <Variant name="Product Card">
                            <ProductCard
                                product={
                                    {
                                        slug: 'knit-beanie',
                                        name: 'Knit Beanie',
                                        priceData: {
                                            price: 6.0,
                                            discountedPrice: 5.5,
                                            formatted: {
                                                price: '$6',
                                                discountedPrice: '$5.5',
                                            },
                                        },
                                        ribbon: 'NEW',
                                        stock: {
                                            inventoryStatus: 'IN_STOCK' as products.InventoryStatus, // Possible values: 'OUT_OF_STOCK', 'IN_STOCK'
                                        },
                                        media: {
                                            mainMedia: {
                                                _id: 'c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg',
                                                image: {
                                                    url: 'https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fit/w_4849,h_6465,q_90/file.jpg',
                                                    width: 4849,
                                                    height: 6465,
                                                },
                                            },
                                            items: [
                                                {
                                                    _id: 'c837a6_18152edaef9940ca88f446ae94b48a47~mv2.jpg',
                                                    image: {
                                                        url: 'https://static.wixstatic.com/media/c837a6_18152edaef9940ca88f446ae94b48a47~mv2.jpg/v1/fill/w_824,h_1098,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_18152edaef9940ca88f446ae94b48a47~mv2.jpg',
                                                        width: 4849,
                                                        height: 6465,
                                                    },
                                                },
                                            ],
                                        },
                                        productOptions: [
                                            {
                                                name: 'Color',
                                                choices: [
                                                    'Green' as products.Choice,
                                                    'Blue' as products.Choice,
                                                ],
                                            },
                                            {
                                                name: 'Size',
                                                choices: [
                                                    'Small' as products.Choice,
                                                    'Medium' as products.Choice,
                                                ],
                                            },
                                        ],
                                    } satisfies products.Product
                                }
                            />
                        </Variant>
                        <Kit.Description>Product Card</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
            </Kit>
        </ComponentWrapper>
    ),
    environmentProps: {
        windowWidth: 550,
        windowHeight: 800,
    },
    isSnippet: true,
});
