import { orders } from '@wix/ecom';
import { LoaderResponseData } from './route';

export const loaderMockData: LoaderResponseData = {
    orderTransactions: {
        payments: [
            {
                regularPaymentDetails: {
                    paymentMethod: 'ApplePay',
                    creditCardDetails: {
                        brand: 'Visa',
                        lastFourDigits: '1234'
                    }
                }
            }
        ]
    },
    order: {
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
        buyerNote:"Teszt note",
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
};
