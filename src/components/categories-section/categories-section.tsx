import classNames from 'classnames';
import { FadeIn, Reveal } from '~/src/components/visual-effects';
import { getCategoryImageUrl, useCategoryDetails } from '~/src/wix/categories';
import styles from './categories-section.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { motion } from 'motion/react';

interface CategoriesSectionProps {
    categorySlugs: string[];
    className?: string;
}

export const CategoriesSection = ({ className, categorySlugs }: CategoriesSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FadeIn className={styles.header} duration={1.8}>
                <h4 className={'uppercase'}>Shop by category</h4>
            </FadeIn>
            <Reveal className={styles.categories} direction="down" duration={1.4}>
                {categorySlugs &&
                    categorySlugs.map((categorySlug) => (
                        <Category categorySlug={categorySlug} key={categorySlug} />
                    ))}
            </Reveal>
        </div>
    );
};

interface CategoryProps {
    categorySlug: string;
}

export const Category = ({ categorySlug }: CategoryProps) => {
    const { data: category } = useCategoryDetails(categorySlug);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [preloadedImage, setPreloadedImage] = useState<string | undefined>();
    const navigate = useNavigate();

    useEffect(() => {
        if (category?.media?.mainMedia?.image?.url) {
            const img = new Image();
            img.src =
                getCategoryImageUrl(category, { maxWidth: 400, maxHeight: 400, quality: 100 }) ??
                '';
            img.onload = () => setPreloadedImage(img.src);
        }
    }, [category, category?.media?.mainMedia?.image?.url]);

    const handleMouseMove = (event: React.MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div
            onClick={() => navigate(`/products/${categorySlug}`)}
            onMouseMove={isHovered ? handleMouseMove : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Reveal direction="down" duration={1.4} className={styles.category}>
                <img
                    className={styles.categoryImageMobile}
                    src={preloadedImage}
                    alt={category?.name ?? categorySlug}
                />
                {category?.name}
                <motion.div
                    style={{
                        display: isHovered ? 'block' : 'none',
                        top: mousePosition.y,
                        left: mousePosition.x,
                    }}
                    className={styles.categoryImage}
                    //transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    animate={isHovered ? 'show' : 'hidden'}
                    initial={false}
                    variants={{
                        show: {
                            clipPath: 'inset(0 0 0 0)',
                            transitionEnd: { clipPath: '' },
                        },
                        hidden: {
                            clipPath: 'inset(100% 0 0 0)',
                        },
                    }}
                >
                    <img src={preloadedImage} alt={category?.name ?? categorySlug} />
                </motion.div>
            </Reveal>
        </div>
    );
};
