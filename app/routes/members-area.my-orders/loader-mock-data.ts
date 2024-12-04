import { orders } from '@wix/ecom';
import { LoaderResponseData } from './route';

export const loaderMockData: LoaderResponseData = {
    orders: [
        {
            number: '10003',
            lineItems: [
                {
                    productName: {
                        original: 'Stainless Steel Lunch Box',
                        translated: 'Stainless Steel Lunch Box',
                    },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_1',
                        appId: 'app_id',
                        options: { options: {} },
                    },
                    quantity: 1,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [],
                    image: 'https://static.wixstatic.com/media/c837a6_4d79cefa20dd4ab0aa5dba663a6a071c~mv2.jpg/v1/fill/w_264,h_360,al_c,q_85,usm_0.66_1.00_0.01/c837a6_4d79cefa20dd4ab0aa5dba663a6a071c~mv2.webp',
                    physicalProperties: { sku: '111111111111', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '166.50', formattedAmount: '€166.50' },
                    priceBeforeDiscounts: { amount: '166.50', formattedAmount: '€166.50' },
                    totalPriceBeforeTax: { amount: '166.50', formattedAmount: '€166.50' },
                    totalPriceAfterTax: { amount: '166.50', formattedAmount: '€166.50' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '166.50', formattedAmount: '€166.50' },
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000001',
                },
                {
                    productName: { original: 'Eco Glass Jar', translated: 'Eco Glass Jar' },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_1',
                        appId: 'app_id',
                        options: { options: { Size: '250 ml' } },
                    },
                    quantity: 3,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [
                        {
                            name: { original: 'Size', translated: 'Size' },
                            plainText: { original: '250 ml', translated: '250 ml' },
                            lineType: orders.DescriptionLineType.COLOR,
                            plainTextValue: { original: '250 ml' },
                            color: '',
                        },
                    ],
                    image: 'https://static.wixstatic.com/media/c837a6_a52e4d4c344a4634bb2e601e79193a84~mv2.jpg/v1/fill/w_528,h_718,al_c,q_85,usm_0.66_1.00_0.01/c837a6_a52e4d4c344a4634bb2e601e79193a84~mv2.webp',
                    physicalProperties: { sku: '364215376135199', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '85.00', formattedAmount: '€85.00' },
                    priceBeforeDiscounts: { amount: '85.00', formattedAmount: '€85.00' },
                    totalPriceBeforeTax: { amount: '255.00', formattedAmount: '€255.00' },
                    totalPriceAfterTax: { amount: '255.00', formattedAmount: '€255.00' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '255.00', formattedAmount: '€255.00' },
                    customLineItem: false,
                    rootCatalogItemId: 'catalog_item_id_1',
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000002',
                },
            ],
            buyerInfo: {
                visitorId: 'visitor_id',
                contactId: 'contact_id',
                email: 'johnd@mail.com',
                memberId: 'member_id',
            },
            paymentStatus: orders.PaymentStatus.NOT_PAID,
            fulfillmentStatus: orders.FulfillmentStatus.NOT_FULFILLED,
            buyerLanguage: 'en',
            weightUnit: orders.WeightUnit.KG,
            currency: 'EUR',
            taxIncludedInPrices: false,
            siteLanguage: 'en',
            priceSummary: {
                subtotal: { amount: '421.50', formattedAmount: '€421.50' },
                shipping: { amount: '0.00', formattedAmount: '€0.00' },
                tax: { amount: '0.00', formattedAmount: '€0.00' },
                discount: { amount: '0.00', formattedAmount: '€0.00' },
                totalPrice: { amount: '421.50', formattedAmount: '€421.50' },
                total: { amount: '421.50', formattedAmount: '€421.50' },
                totalWithGiftCard: { amount: '421.50', formattedAmount: '€421.50' },
                totalWithoutGiftCard: { amount: '421.50', formattedAmount: '€421.50' },
                totalAdditionalFees: { amount: '0.00', formattedAmount: '€0.00' },
            },
            billingInfo: {
                address: {
                    addressLine1: 'New York',
                    city: 'New York',
                    country: 'US',
                    postalCode: '10000',
                },
                contactDetails: { firstName: 'John', lastName: 'Doe', phone: '+1234567890' },
            },
            shippingInfo: {
                carrierId: 'carrier_id',
                code: '00000000-0000-0000-0000-000000000001',
                title: 'Free Shipping',
                logistics: {
                    deliveryTime: '',
                    shippingDestination: {
                        address: {
                            addressLine1: 'New York',
                            city: 'New York',
                            country: 'US',
                            postalCode: '10000',
                        },
                        contactDetails: {
                            firstName: 'John',
                            lastName: 'Doe',
                            phone: '+1234567890',
                        },
                    },
                },
                cost: {
                    price: { amount: '0', formattedAmount: '€0.00' },
                    totalPriceBeforeTax: { amount: '0', formattedAmount: '€0.00' },
                    totalPriceAfterTax: { amount: '0.00', formattedAmount: '€0.00' },
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                },
                region: { name: 'Domestic' },
            },
            status: orders.OrderStatus.APPROVED,
            taxSummary: {
                totalTax: { amount: '0.00', formattedAmount: '€0.00' },
            },
            taxInfo: {
                totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                taxBreakdown: [],
            },
            appliedDiscounts: [],
            activities: [],
            attributionSource: orders.AttributionSource.UNSPECIFIED,
            createdBy: {
                visitorId: 'visitor_id',
                appId: 'app_id',
                memberId: 'member_id',
                userId: 'user_id',
            },
            channelInfo: { type: orders.ChannelType.WEB },
            checkoutId: 'checkout_id_1',
            customFields: [],
            isInternalOrderCreate: false,
            payNow: {
                subtotal: { amount: '421.50', formattedAmount: '€421.50' },
                shipping: { amount: '0.00', formattedAmount: '€0.00' },
                tax: { amount: '0.00', formattedAmount: '€0.00' },
                discount: { amount: '0.00', formattedAmount: '€0.00' },
                totalPrice: { amount: '421.50', formattedAmount: '€421.50' },
                total: { amount: '421.50', formattedAmount: '€421.50' },
                totalWithGiftCard: { amount: '421.50', formattedAmount: '€421.50' },
                totalWithoutGiftCard: { amount: '421.50', formattedAmount: '€421.50' },
                totalAdditionalFees: { amount: '0.00', formattedAmount: '€0.00' },
            },
            balanceSummary: {
                balance: { amount: '421.50', formattedAmount: '€421.50' },
                paid: { amount: '0', formattedAmount: '€0.00' },
                refunded: { amount: '0', formattedAmount: '€0.00' },
                authorized: { amount: '0', formattedAmount: '€0.00' },
                pendingRefund: { amount: '0', formattedAmount: '€0.00' },
            },
            additionalFees: [],
            purchaseFlowId: 'purchase_flow_id_1',
            recipientInfo: {
                address: {
                    addressLine1: 'New York',
                    city: 'New York',
                    country: 'US',
                    postalCode: '10000',
                },
                contactDetails: { firstName: 'John', lastName: 'Doe', phone: '+1234567890' },
            },
            purchasedDate: new Date('2024-11-06T15:32:51.397Z'),
            _id: 'order_id_1',
            _createdDate: new Date('2024-11-06T15:32:51.397Z'),
            _updatedDate: new Date('2024-11-07T19:38:54.179Z'),
        },
        {
            number: '10002',
            lineItems: [
                {
                    productName: {
                        original: 'Stainless Steel Lunch Box',
                        translated: 'Stainless Steel Lunch Box',
                    },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_2',
                        appId: 'app_id',
                        options: { options: {} },
                    },
                    quantity: 2,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [],
                    image: 'https://static.wixstatic.com/media/c837a6_4d79cefa20dd4ab0aa5dba663a6a071c~mv2.jpg/v1/fill/w_264,h_360,al_c,q_85,usm_0.66_1.00_0.01/c837a6_4d79cefa20dd4ab0aa5dba663a6a071c~mv2.webp',
                    physicalProperties: { sku: '671253175371', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '95.00', formattedAmount: '€95.00' },
                    priceBeforeDiscounts: { amount: '95.00', formattedAmount: '€95.00' },
                    totalPriceBeforeTax: { amount: '190.00', formattedAmount: '€190.00' },
                    totalPriceAfterTax: { amount: '190.00', formattedAmount: '€190.00' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '190.00', formattedAmount: '€190.00' },
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000001',
                },
                {
                    productName: { original: 'Wood Brush', translated: 'Wood Brush' },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_3',
                        appId: 'app_id',
                        options: { options: { Size: 'Small' } },
                    },
                    quantity: 1,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [
                        {
                            name: { original: 'Size', translated: 'Size' },
                            plainText: { original: 'Small', translated: 'Small' },
                            lineType: orders.DescriptionLineType.COLOR,
                            plainTextValue: { original: 'Small' },
                            color: '',
                        },
                    ],
                    image: 'https://static.wixstatic.com/media/c837a6_15f76c50660f4eb2880397307fc9d114~mv2.jpg/v1/fill/w_528,h_718,al_c,q_85,usm_0.66_1.00_0.01/c837a6_15f76c50660f4eb2880397307fc9d114~mv2.webp',
                    physicalProperties: { sku: '21554345656', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '120.00', formattedAmount: '€120.00' },
                    priceBeforeDiscounts: { amount: '120.00', formattedAmount: '€120.00' },
                    totalPriceBeforeTax: { amount: '120.00', formattedAmount: '€120.00' },
                    totalPriceAfterTax: { amount: '120.00', formattedAmount: '€120.00' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '120.00', formattedAmount: '€120.00' },
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000002',
                },
                {
                    productName: {
                        original: 'Stainless Steel Bottle',
                        translated: 'Stainless Steel Bottle',
                    },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_3',
                        appId: 'app_id',
                        options: { options: { Size: 'Large' } },
                    },
                    quantity: 3,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [
                        {
                            name: { original: 'Size', translated: 'Size' },
                            plainText: { original: 'Large', translated: 'Large' },
                            lineType: orders.DescriptionLineType.COLOR,
                            plainTextValue: { original: 'Large' },
                            color: '',
                        },
                    ],
                    image: 'https://static.wixstatic.com/media/c837a6_b985edee7e274f068e0e3783a789889a~mv2.jpg/v1/fill/w_528,h_718,al_c,q_85,usm_0.66_1.00_0.01/c837a6_b985edee7e274f068e0e3783a789889a~mv2.webp',
                    physicalProperties: { sku: '21554345656', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '120.00', formattedAmount: '€120.00' },
                    priceBeforeDiscounts: { amount: '120.00', formattedAmount: '€120.00' },
                    totalPriceBeforeTax: { amount: '360.00', formattedAmount: '€360.00' },
                    totalPriceAfterTax: { amount: '360.00', formattedAmount: '€360.00' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '360.00', formattedAmount: '€360.00' },
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000003',
                },
                {
                    productName: {
                        original: 'Stainless Steel Bottle',
                        translated: 'Stainless Steel Bottle',
                    },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_4',
                        appId: 'app_id',
                        options: { options: { Size: 'Small' } },
                    },
                    quantity: 1,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [
                        {
                            name: { original: 'Size', translated: 'Size' },
                            plainText: { original: 'Small', translated: 'Small' },
                            lineType: orders.DescriptionLineType.COLOR,
                            plainTextValue: { original: 'Small' },
                            color: '',
                        },
                    ],
                    image: 'https://static.wixstatic.com/media/c837a6_b985edee7e274f068e0e3783a789889a~mv2.jpg/v1/fill/w_528,h_718,al_c,q_85,usm_0.66_1.00_0.01/c837a6_b985edee7e274f068e0e3783a789889a~mv2.webp',
                    physicalProperties: { sku: '366615376135191', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '7.50', formattedAmount: '€7.50' },
                    priceBeforeDiscounts: { amount: '7.50', formattedAmount: '€7.50' },
                    totalPriceBeforeTax: { amount: '7.50', formattedAmount: '€7.50' },
                    totalPriceAfterTax: { amount: '7.50', formattedAmount: '€7.50' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '7.50', formattedAmount: '€7.50' },
                    customLineItem: false,
                    rootCatalogItemId: 'catalog_item_id_4',
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000004',
                },
            ],
            buyerInfo: {
                visitorId: 'visitor_id',
                contactId: 'contact_id',
                email: 'johnd@mail.com',
                memberId: 'member_id',
            },
            paymentStatus: orders.PaymentStatus.NOT_PAID,
            fulfillmentStatus: orders.FulfillmentStatus.NOT_FULFILLED,
            buyerLanguage: 'en',
            weightUnit: orders.WeightUnit.KG,
            currency: 'EUR',
            taxIncludedInPrices: false,
            siteLanguage: 'en',
            priceSummary: {
                subtotal: { amount: '677.50', formattedAmount: '€677.50' },
                shipping: { amount: '0.00', formattedAmount: '€0.00' },
                tax: { amount: '0.00', formattedAmount: '€0.00' },
                discount: { amount: '0.00', formattedAmount: '€0.00' },
                totalPrice: { amount: '677.50', formattedAmount: '€677.50' },
                total: { amount: '677.50', formattedAmount: '€677.50' },
                totalWithGiftCard: { amount: '677.50', formattedAmount: '€677.50' },
                totalWithoutGiftCard: { amount: '677.50', formattedAmount: '€677.50' },
                totalAdditionalFees: { amount: '0.00', formattedAmount: '€0.00' },
            },
            billingInfo: {
                address: {
                    addressLine1: 'New York',
                    city: 'New York',
                    country: 'US',
                    postalCode: '10000',
                },
                contactDetails: { firstName: 'John', lastName: 'Doe', phone: '+1234567890' },
            },
            shippingInfo: {
                carrierId: 'carrier_id',
                code: '00000000-0000-0000-0000-000000000001',
                title: 'Free Shipping',
                logistics: {
                    deliveryTime: '',
                    shippingDestination: {
                        address: {
                            addressLine1: 'New York',
                            city: 'New York',
                            country: 'US',
                            postalCode: '10000',
                        },
                        contactDetails: {
                            firstName: 'John',
                            lastName: 'Doe',
                            phone: '+1234567890',
                        },
                    },
                },
                cost: {
                    price: { amount: '0', formattedAmount: '€0.00' },
                    totalPriceBeforeTax: { amount: '0', formattedAmount: '€0.00' },
                    totalPriceAfterTax: { amount: '0.00', formattedAmount: '€0.00' },
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                },
                region: { name: 'Domestic' },
            },
            status: orders.OrderStatus.APPROVED,
            taxSummary: {
                totalTax: { amount: '0.00', formattedAmount: '€0.00' },
            },
            taxInfo: {
                totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                taxBreakdown: [],
            },
            appliedDiscounts: [],
            activities: [],
            attributionSource: orders.AttributionSource.UNSPECIFIED,
            createdBy: {
                visitorId: 'visitor_id',
                appId: 'app_id',
                memberId: 'member_id',
                userId: 'user_id',
            },
            channelInfo: { type: orders.ChannelType.WEB },
            checkoutId: 'checkout_id_2',
            customFields: [],
            isInternalOrderCreate: false,
            payNow: {
                subtotal: { amount: '677.50', formattedAmount: '€677.50' },
                shipping: { amount: '0.00', formattedAmount: '€0.00' },
                tax: { amount: '0.00', formattedAmount: '€0.00' },
                discount: { amount: '0.00', formattedAmount: '€0.00' },
                totalPrice: { amount: '677.50', formattedAmount: '€677.50' },
                total: { amount: '677.50', formattedAmount: '€677.50' },
                totalWithGiftCard: { amount: '677.50', formattedAmount: '€677.50' },
                totalWithoutGiftCard: { amount: '677.50', formattedAmount: '€677.50' },
                totalAdditionalFees: { amount: '0.00', formattedAmount: '€0.00' },
            },
            balanceSummary: {
                balance: { amount: '677.50', formattedAmount: '€677.50' },
                paid: { amount: '0', formattedAmount: '€0.00' },
                refunded: { amount: '0', formattedAmount: '€0.00' },
                authorized: { amount: '0', formattedAmount: '€0.00' },
                pendingRefund: { amount: '0', formattedAmount: '€0.00' },
            },
            additionalFees: [],
            purchaseFlowId: 'purchase_flow_id_2',
            recipientInfo: {
                address: {
                    addressLine1: 'New York',
                    city: 'New York',
                    country: 'US',
                    postalCode: '10000',
                },
                contactDetails: { firstName: 'John', lastName: 'Doe', phone: '+1234567890' },
            },
            purchasedDate: new Date('2024-11-05T14:27:31.225Z'),
            _id: 'order_id_2',
            _createdDate: new Date('2024-11-05T14:27:31.225Z'),
            _updatedDate: new Date('2024-11-06T19:03:25.253Z'),
        },
        {
            number: '10001',
            lineItems: [
                {
                    productName: {
                        original: 'Organic Shopping Bag',
                        translated: 'Organic Shopping Bag',
                    },
                    catalogReference: {
                        catalogItemId: 'catalog_item_id_5',
                        appId: 'app_id',
                        options: { options: { Color: 'White' } },
                    },
                    quantity: 1,
                    totalDiscount: { amount: '0.00', formattedAmount: '€0.00' },
                    descriptionLines: [
                        {
                            name: { original: 'Color', translated: 'Color' },
                            colorInfo: {
                                original: 'White',
                                translated: 'White',
                                code: 'rgb(255, 255, 255)',
                            },
                            lineType: orders.DescriptionLineType.COLOR,
                            color: 'White',
                        },
                    ],
                    image: 'https://static.wixstatic.com/media/c837a6_935cf1de86ee4db0a33721aee2f7a69b~mv2.jpg/v1/fill/w_528,h_718,al_c,q_85,usm_0.66_1.00_0.01/c837a6_935cf1de86ee4db0a33721aee2f7a69b~mv2.webp',
                    physicalProperties: { sku: '364115376135191', shippable: true },
                    itemType: { preset: orders.ItemTypeItemType.PHYSICAL, custom: '' },
                    price: { amount: '10.00', formattedAmount: '€10.00' },
                    priceBeforeDiscounts: { amount: '10.00', formattedAmount: '€10.00' },
                    totalPriceBeforeTax: { amount: '10.00', formattedAmount: '€10.00' },
                    totalPriceAfterTax: { amount: '10.00', formattedAmount: '€10.00' },
                    paymentOption: orders.PaymentOptionType.FULL_PAYMENT_ONLINE,
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                    taxInfo: {
                        taxAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        taxIncludedInPrice: false,
                        taxBreakdown: [],
                    },
                    locations: [],
                    lineItemPrice: { amount: '10.00', formattedAmount: '€10.00' },
                    customLineItem: false,
                    rootCatalogItemId: 'catalog_item_id_5',
                    taxableAddress: { addressType: orders.TaxableAddressType.SHIPPING },
                    priceUndetermined: false,
                    fixedQuantity: false,
                    _id: '00000000-0000-0000-0000-000000000001',
                },
            ],
            buyerInfo: {
                visitorId: 'visitor_id',
                contactId: 'contact_id',
                email: 'johnd@mail.com',
                memberId: 'member_id',
            },
            paymentStatus: orders.PaymentStatus.NOT_PAID,
            fulfillmentStatus: orders.FulfillmentStatus.NOT_FULFILLED,
            buyerLanguage: 'en',
            weightUnit: orders.WeightUnit.KG,
            currency: 'EUR',
            taxIncludedInPrices: false,
            siteLanguage: 'en',
            priceSummary: {
                subtotal: { amount: '10.00', formattedAmount: '€10.00' },
                shipping: { amount: '0.00', formattedAmount: '€0.00' },
                tax: { amount: '0.00', formattedAmount: '€0.00' },
                discount: { amount: '0.00', formattedAmount: '€0.00' },
                totalPrice: { amount: '10.00', formattedAmount: '€10.00' },
                total: { amount: '10.00', formattedAmount: '€10.00' },
                totalWithGiftCard: { amount: '10.00', formattedAmount: '€10.00' },
                totalWithoutGiftCard: { amount: '10.00', formattedAmount: '€10.00' },
                totalAdditionalFees: { amount: '0.00', formattedAmount: '€0.00' },
            },
            billingInfo: {
                address: {
                    addressLine1: 'New York',
                    city: 'New York',
                    country: 'US',
                    postalCode: '10000',
                },
                contactDetails: { firstName: 'John', lastName: 'Doe', phone: '+1234567890' },
            },
            shippingInfo: {
                carrierId: 'carrier_id',
                code: '00000000-0000-0000-0000-000000000001',
                title: 'Free Shipping',
                logistics: {
                    deliveryTime: '',
                    shippingDestination: {
                        address: {
                            addressLine1: 'New York',
                            city: 'New York',
                            country: 'US',
                            postalCode: '10000',
                        },
                        contactDetails: {
                            firstName: 'John',
                            lastName: 'Doe',
                            phone: '+1234567890',
                        },
                    },
                },
                cost: {
                    price: { amount: '0', formattedAmount: '€0.00' },
                    totalPriceBeforeTax: { amount: '0', formattedAmount: '€0.00' },
                    totalPriceAfterTax: { amount: '0.00', formattedAmount: '€0.00' },
                    taxDetails: {
                        taxableAmount: { amount: '0.00', formattedAmount: '€0.00' },
                        taxRate: '0.0000',
                        totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                    },
                },
                region: { name: 'Domestic' },
            },
            status: orders.OrderStatus.APPROVED,
            taxSummary: {
                totalTax: { amount: '0.00', formattedAmount: '€0.00' },
            },
            taxInfo: {
                totalTax: { amount: '0.00', formattedAmount: '€0.00' },
                taxBreakdown: [],
            },
            appliedDiscounts: [],
            activities: [],
            attributionSource: orders.AttributionSource.UNSPECIFIED,
            createdBy: {
                visitorId: 'visitor_id',
                appId: 'app_id',
                memberId: 'member_id',
                userId: 'user_id',
            },
            channelInfo: { type: orders.ChannelType.WEB },
            checkoutId: 'checkout_id_3',
            customFields: [],
            isInternalOrderCreate: false,
            payNow: {
                subtotal: { amount: '10.00', formattedAmount: '€10.00' },
                shipping: { amount: '0.00', formattedAmount: '€0.00' },
                tax: { amount: '0.00', formattedAmount: '€0.00' },
                discount: { amount: '0.00', formattedAmount: '€0.00' },
                totalPrice: { amount: '10.00', formattedAmount: '€10.00' },
                total: { amount: '10.00', formattedAmount: '€10.00' },
                totalWithGiftCard: { amount: '10.00', formattedAmount: '€10.00' },
                totalWithoutGiftCard: { amount: '10.00', formattedAmount: '€10.00' },
                totalAdditionalFees: { amount: '0.00', formattedAmount: '€0.00' },
            },
            balanceSummary: {
                balance: { amount: '10.00', formattedAmount: '€10.00' },
                paid: { amount: '0', formattedAmount: '€0.00' },
                refunded: { amount: '0', formattedAmount: '€0.00' },
                authorized: { amount: '0', formattedAmount: '€0.00' },
                pendingRefund: { amount: '0', formattedAmount: '€0.00' },
            },
            additionalFees: [],
            purchaseFlowId: 'purchase_flow_id_3',
            recipientInfo: {
                address: {
                    addressLine1: 'New York',
                    city: 'New York',
                    country: 'US',
                    postalCode: '10000',
                },
                contactDetails: { firstName: 'John', lastName: 'Doe', phone: '+1234567890' },
            },
            purchasedDate: new Date('2024-11-05T10:25:45.821Z'),
            _id: 'order_id_3',
            _createdDate: new Date('2024-11-05T10:25:45.821Z'),
            _updatedDate: new Date('2024-11-06T12:54:32.347Z'),
        },
    ],
};