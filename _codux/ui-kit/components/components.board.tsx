import { createBoard, Variant } from '@wixc3/react-board';
import { Accordion } from '~/src/components/accordion/accordion';
import { ProductCard } from '~/src/components/product-card/product-card';
import { QuantityInput } from '~/src/components/quantity-input/quantity-input';
import { Select, SelectItem } from '~/src/components/select/select';
import { ColorSelect } from '~/src/components/color-select/color-select';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Kit } from '../ui-kit-utils/kit';
import { Marquee } from '~/src/components/marquee/marquee';
import { ProductsSpotlight } from '~/src/components/products-spotlight/products-spotlight';
import { products } from '@wix/stores';

import styles from './components.board.module.scss';

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
                        <Variant name="Input Error">
                            <div className="formGroup">
                                <input
                                    className="textInput error"
                                    placeholder="Placeholder"
                                    value=""
                                    onChange={() => {}}
                                />
                                <span className="errorMessage">Error message</span>
                            </div>
                        </Variant>
                        <Kit.Description>Input Error</Kit.Description>
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
                            <ProductCard product={product} />
                        </Variant>
                        <Kit.Description>Product Card</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
                <Kit.Section title="Marquee">
                    <Kit.Item>
                        <Variant name="Marquee">
                            <Marquee elements={['Shop Sale', 'Up to 50% off']} />
                        </Variant>
                        <Kit.Description>Marquee</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
                <Kit.Section title="Products Spotlight">
                    <Kit.Item className={styles.demoWidth}>
                        <Variant name="Products Spotlight">
                            <ProductsSpotlight
                                imageUrl="https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fill/w_640,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.webp"
                                spotlights={[
                                    {
                                        horizontalPercentage: 40,
                                        verticalPercentage: 33,
                                        productSlug: 'knit-beanie',
                                    },
                                    {
                                        horizontalPercentage: 60,
                                        verticalPercentage: 66,
                                        productSlug: 'knit-beanie',
                                    },
                                ]}
                            />
                        </Variant>
                        <Kit.Description>Products Spotlight</Kit.Description>
                    </Kit.Item>
                </Kit.Section>
            </Kit>
        </ComponentWrapper>
    ),
    environmentProps: {
        windowWidth: 746,
        windowHeight: 800,
    },
    isSnippet: true,
});

const product: products.Product = {
    name: 'Knit Beanie',
    slug: 'knit-beanie',
    visible: true,
    productType: 'physical' as products.ProductType,
    description:
        "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
    sku: '36523641234523',
    weight: 0,
    weightRange: {
        minValue: 0,
        maxValue: 0,
    },
    stock: {
        trackInventory: false,
        inStock: true,
        inventoryStatus: 'IN_STOCK' as products.InventoryStatus,
    },
    price: {
        currency: 'USD',
        price: 30,
        discountedPrice: 15,
        formatted: {
            price: '30,00$',
            discountedPrice: '15,00$',
        },
    },
    priceData: {
        currency: 'USD',
        price: 30,
        discountedPrice: 15,
        formatted: {
            price: '30,00$',
            discountedPrice: '15,00$',
        },
    },
    convertedPriceData: {
        currency: 'USD',
        price: 30,
        discountedPrice: 15,
        formatted: {
            price: '30,00$',
            discountedPrice: '15,00$',
        },
    },
    priceRange: {
        minValue: 30,
        maxValue: 30,
    },
    costRange: {
        minValue: 0,
        maxValue: 0,
    },
    additionalInfoSections: [
        {
            title: 'Product Info',
            description:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        },
        {
            title: 'Return & Refund Policy',
            description:
                'I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.',
        },
        {
            title: 'Shipping Info',
            description:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
        },
    ],
    ribbons: [],
    media: {
        mainMedia: {
            thumbnail: {
                url: 'https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                width: 50,
                height: 50,
            },
            mediaType: 'image' as products.MediaItemType,
            title: '',
            image: {
                url: 'https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fit/w_4849,h_6465,q_90/file.jpg',
                width: 4849,
                height: 6465,
            },
            _id: 'c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg',
        },
        items: [
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg/v1/fit/w_4849,h_6465,q_90/file.jpg',
                    width: 4849,
                    height: 6465,
                },
                _id: 'c837a6_38ddd1ca2a044f1ca066291bca023845~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_d762db06ee28411596c1399082f66d62~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_d762db06ee28411596c1399082f66d62~mv2.jpg/v1/fit/w_2048,h_2048,q_90/file.jpg',
                    width: 2048,
                    height: 2048,
                },
                _id: 'c837a6_d762db06ee28411596c1399082f66d62~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_b1faaa2a2f4a4a158e654f7b057357f7~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_b1faaa2a2f4a4a158e654f7b057357f7~mv2.jpg/v1/fit/w_2048,h_2048,q_90/file.jpg',
                    width: 2048,
                    height: 2048,
                },
                _id: 'c837a6_b1faaa2a2f4a4a158e654f7b057357f7~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_21c42b74162843e7a305c87431ca5567~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_21c42b74162843e7a305c87431ca5567~mv2.jpg/v1/fit/w_2048,h_1761,q_90/file.jpg',
                    width: 2048,
                    height: 1761,
                },
                _id: 'c837a6_21c42b74162843e7a305c87431ca5567~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_9d75d592c3ee47fea83c0f789d71cc60~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_9d75d592c3ee47fea83c0f789d71cc60~mv2.jpg/v1/fit/w_2048,h_2048,q_90/file.jpg',
                    width: 2048,
                    height: 2048,
                },
                _id: 'c837a6_9d75d592c3ee47fea83c0f789d71cc60~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_26e58628afb64e2abd3060d5695f2e5d~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_26e58628afb64e2abd3060d5695f2e5d~mv2.jpg/v1/fit/w_4849,h_6465,q_90/file.jpg',
                    width: 4849,
                    height: 6465,
                },
                _id: 'c837a6_26e58628afb64e2abd3060d5695f2e5d~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_ad665a5d6f7041fea8443e56eb663ac1~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_ad665a5d6f7041fea8443e56eb663ac1~mv2.jpg/v1/fit/w_4849,h_6465,q_90/file.jpg',
                    width: 4849,
                    height: 6465,
                },
                _id: 'c837a6_ad665a5d6f7041fea8443e56eb663ac1~mv2.jpg',
            },
            {
                thumbnail: {
                    url: 'https://static.wixstatic.com/media/c837a6_16d2062e3e794f579938115dafe2c766~mv2.jpg/v1/fit/w_50,h_50,q_90/file.jpg',
                    width: 50,
                    height: 50,
                },
                mediaType: 'image' as products.MediaItemType,
                title: '',
                image: {
                    url: 'https://static.wixstatic.com/media/c837a6_16d2062e3e794f579938115dafe2c766~mv2.jpg/v1/fit/w_4849,h_6465,q_90/file.jpg',
                    width: 4849,
                    height: 6465,
                },
                _id: 'c837a6_16d2062e3e794f579938115dafe2c766~mv2.jpg',
            },
        ],
    },
    customTextFields: [],
    manageVariants: false,
    productOptions: [
        {
            optionType: 'color' as products.OptionType,
            name: 'Color',
            choices: [
                {
                    value: '#FF6600',
                    description: 'Burnt Orange',
                    inStock: true,
                    visible: true,
                },
                {
                    value: '#2145b2',
                    description: 'Royal Blue',
                    inStock: true,
                    visible: true,
                },
                {
                    value: '#3c5639',
                    description: 'Forest Green',
                    inStock: true,
                    visible: true,
                },
                {
                    value: '#DDDD36',
                    description: 'Yellow',
                    inStock: true,
                    visible: true,
                },
            ],
        },
    ],
    productPageUrl: {
        base: 'https://davidpolynar.wixstudio.com/test',
        path: '/product-page/knit-beanie',
    },
    numericId: '1736336747532017',
    inventoryItemId: '9f270997-522f-b82b-5b7b-3a9e79455f55',
    discount: {
        type: 'PERCENT' as products.DiscountType,
        value: 50,
    },
    collectionIds: [
        '6dc62abd-e8ce-fd9c-d552-653efc49bafd',
        '5adfcc71-407b-1b6e-4a0a-07918bd221a4',
        'cd5487fc-1a06-4050-aa79-fb35dbff5830',
        '00000000-000000-000000-000000000001',
    ],
    variants: [
        {
            choices: {},
            variant: {
                priceData: {
                    currency: 'USD',
                    price: 30,
                    discountedPrice: 15,
                    formatted: {
                        price: '30,00$',
                        discountedPrice: '15,00$',
                    },
                },
                convertedPriceData: {
                    currency: 'USD',
                    price: 30,
                    discountedPrice: 15,
                    formatted: {
                        price: '30,00$',
                        discountedPrice: '15,00$',
                    },
                },
                weight: 0,
                sku: '36523641234523',
                visible: true,
            },
            stock: {
                trackQuantity: false,
                inStock: true,
            },
            _id: '00000000-0000-0000-0000-000000000000',
        },
    ],
    lastUpdated: new Date('2025-01-08T15:54:06.569Z'),
    ribbon: '',
    _id: '60d8f668-add0-47d4-a484-c56186baa0aa',
    _createdDate: new Date('2025-01-08T11:45:47.532Z'),
};
