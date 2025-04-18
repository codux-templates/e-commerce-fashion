import type { SerializeFrom } from '@remix-run/node';
import { products } from '@wix/stores';
import { useCallback, useState } from 'react';
import { useCart, useCartOpen } from '../cart';
import { AddToCartOptions, Product } from '../ecom';
import {
    getMedia,
    getPriceData,
    getProductOptions,
    getSelectedVariant,
    getSKU,
    isOutOfStock,
    selectedChoicesToVariantChoices,
} from './product-details';

export function useProductDetails(product: Product | SerializeFrom<products.Product>) {
    const cartOpener = useCartOpen();
    const { addToCart, isAddingToCart } = useCart();

    const getInitialSelectedChoices = () => {
        const result: Record<string, products.Choice | undefined> = {};
        for (const option of product.productOptions ?? []) {
            if (option.name) {
                result[option.name] = option?.choices?.length === 1 ? option.choices[0] : undefined;
            }
        }

        return result;
    };

    const [selectedChoices, setSelectedChoices] = useState(() => getInitialSelectedChoices());
    const [quantity, setQuantity] = useState(1);
    const [addToCartAttempted, setAddToCartAttempted] = useState(false);

    const outOfStock = isOutOfStock(product, selectedChoices);
    const priceData = getPriceData(product, selectedChoices);
    const sku = getSKU(product, selectedChoices);
    const media = getMedia(product, selectedChoices);
    const productOptions = getProductOptions(product, selectedChoices);

    const handleAddToCart = useCallback(
        async (openCart = true) => {
            setAddToCartAttempted(true);

            if (Object.values(selectedChoices).includes(undefined)) return false;

            const selectedVariant = getSelectedVariant(product, selectedChoices);

            const options: AddToCartOptions =
                product.manageVariants && selectedVariant?._id
                    ? { variantId: selectedVariant._id }
                    : { options: selectedChoicesToVariantChoices(product, selectedChoices) };

            await addToCart(product._id!, quantity, options);
            if (openCart) cartOpener.setIsOpen(true);
            return true;
        },
        [addToCart, cartOpener, product, quantity, selectedChoices],
    );

    const handleOptionChange = useCallback((optionName: string, newChoice: products.Choice) => {
        setQuantity(1);
        setSelectedChoices((prev) => ({
            ...prev,
            [optionName]: newChoice,
        }));
    }, []);

    const isAllOptionsSelected = (): boolean => {
        return !Object.values(selectedChoices).includes(undefined);
    };

    return {
        outOfStock,
        priceData,
        sku,
        media,
        productOptions,
        quantity,
        selectedChoices,
        isAddingToCart,
        addToCartAttempted,
        handleAddToCart,
        handleOptionChange,
        handleQuantityChange: setQuantity,
        isAllOptionsSelected,
    };
}
