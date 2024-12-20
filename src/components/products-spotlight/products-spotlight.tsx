import { useState } from 'react';
import {
    useFloating,
    offset,
    useInteractions,
    useHover,
    useFocus,
    safePolygon,
    useRole, autoPlacement
} from '@floating-ui/react';
import styles from './products-spotlight.module.scss';
import { AnimatePresence, motion } from 'motion/react';


export type ProductSpotlight = {
    x: number;
    y: number;
    productId: string;
    productName: string;
    price: string;
};

export type ProductsSpotlightProps = {
    spotlights: ProductSpotlight[];
    imageUrl: string;
    imagePosition?: "top" | "bottom" | "center";
};

export const ProductsSpotlight = ({ spotlights, imageUrl, imagePosition }: ProductsSpotlightProps) => {
    return (
        <div className={styles.productsSpotlight}>
            <div className={styles.imageContainer}>
                {spotlights.map((spotlight, index) => (
                    <Spotlight key={index} spotlight={spotlight} />
                ))}
                <img style={{objectPosition: imagePosition}} className={styles.image} src={imageUrl} alt="Product" />
            </div>
        </div>
    );
};

const Spotlight = ({ spotlight }:{spotlight: ProductSpotlight})=> {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { refs, floatingStyles, context, placement } = useFloating({
        placement: 'right',
        middleware: [
          offset(8),
          autoPlacement({
              allowedPlacements: ['right', 'left'],
          })
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

    return (
        <>
            <div
                className={styles.spotlight}
                style={{
                    left: `${spotlight.x * 100}%`,
                    top: `${spotlight.y * 100}%`,
                }}
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                <div className={styles.spotlightInner}></div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div
                      ref={refs.setFloating}
                      style={{ ...floatingStyles }}
                      {...getFloatingProps()}
                    >
                        <motion.div
                            className={styles.popup}
                            initial={{ opacity: 0, scale: 1, x: placement === 'right' ? '-10px' : '10px' }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1, x: placement === 'right' ? '-10px' : '10px'}}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.popupContent}>
                                <div className={styles.productName}>{spotlight.productName}</div>
                                <div className={styles.price}>{spotlight.price}</div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
