import { useEffect, useState } from 'react';
import {
    useFloating,
    offset,
    useInteractions,
    useHover,
    useFocus,
    safePolygon,
    useRole,
    autoPlacement,
} from '@floating-ui/react';
import styles from './products-spotlight.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { Product, useEcomApi } from '~/src/wix/ecom';
import { useNavigate } from '@remix-run/react';
import Icon from '../icons/icon';

export interface ProductSpotlight {
    horizontalPercentage: number;
    verticalPercentage: number;
    productSlug: string;
}

export type ProductsSpotlightProps = {
    spotlights: ProductSpotlight[];
    imageUrl: string;
    imagePosition?: 'top' | 'bottom' | 'center';
};

export const ProductsSpotlight = ({
    spotlights,
    imageUrl,
    imagePosition,
}: ProductsSpotlightProps) => {
    return (
        <div className={styles.productsSpotlight}>
            <div className={styles.imageContainer}>
                {spotlights.map((spotlight, index) => (
                    <Spotlight key={index} spotlight={spotlight} />
                ))}
                <img
                    style={{ objectPosition: imagePosition }}
                    className={styles.image}
                    src={imageUrl}
                    alt="Product"
                />
            </div>
        </div>
    );
};

const Spotlight = ({ spotlight }: { spotlight: ProductSpotlight }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const api = useEcomApi();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        if (!spotlight.productSlug) return;

        async function getProduct() {
            const product = await api.getProductBySlug(spotlight.productSlug);
            setProduct(product);
        }

        getProduct();
    }, [api, spotlight.productSlug]);

    const { refs, floatingStyles, context, placement } = useFloating({
        placement: 'right',
        middleware: [
            offset(8),
            autoPlacement({
                allowedPlacements: ['right', 'left'],
            }),
        ],
        open: isOpen,
        onOpenChange: setIsOpen,
    });
    const hover = useHover(context, {
        handleClose: safePolygon({
            requireIntent: false,
            buffer: 28,
        }),
    });
    const focus = useFocus(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, role]);

    const navigate = useNavigate();
    return (
        <>
            <div
                className={styles.spotlight}
                style={{
                    backgroundColor: isOpen ? '#00000066' : '#00000029',
                    left: `${spotlight.horizontalPercentage}%`,
                    top: `${spotlight.verticalPercentage}%`,
                }}
                ref={refs.setReference}
                {...getReferenceProps()}
                onClick={() => product && navigate(`/product-details/${product.slug}`)}
            >
                <div className={styles.spotlightInner}></div>
            </div>

            <AnimatePresence>
                {isOpen && product && (
                    <div
                        ref={refs.setFloating}
                        style={{ ...floatingStyles }}
                        {...getFloatingProps()}
                    >
                        <motion.div
                            className={styles.popup}
                            initial={{
                                opacity: 0,
                                scale: 1,
                                x: placement === 'right' ? '-10px' : '10px',
                            }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                scale: 1,
                                x: placement === 'right' ? '-10px' : '10px',
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() => navigate(`/product-details/${product.slug}`)}
                        >
                            <div className={styles.popupContentWrapper}>
                                <div className={styles.popupContent}>
                                    <div className={styles.productName}>{product.name}</div>
                                    <div className={styles.price}>
                                        {product.priceData?.formatted?.discountedPrice ??
                                            product.priceData?.formatted?.price ??
                                            ''}
                                    </div>
                                </div>
                                <Icon name={'chevron_right'} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
