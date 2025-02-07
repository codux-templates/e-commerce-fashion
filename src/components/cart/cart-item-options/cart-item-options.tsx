import { useState } from 'react';
import { cart } from '@wix/ecom';
import classNames from 'classnames';

import styles from './cart-item-options.module.scss';
import Icon from '../../icons/icon';

interface CartItemOptionsProps {
    options: cart.DescriptionLine[];
    /**
     * The maximum amount of options that are visible even in the collapsed state.
     */
    visibleOptionsCount: number;
    className?: string;
}

export const CartItemOptions = ({
    options,
    visibleOptionsCount,
    className,
}: CartItemOptionsProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleIsExpanded = () => setIsExpanded((prev) => !prev);

    return (
        <div className={classNames(styles.root, { [styles.expanded]: isExpanded }, className)}>
            {options.slice(0, isExpanded ? undefined : visibleOptionsCount).map((option) => (
                <div key={option.name!.translated} className="paragraph3">
                    {option.name!.translated}:{' '}
                    {option.colorInfo ? option.colorInfo.translated : option.plainText?.translated}
                </div>
            ))}

            {options.length > visibleOptionsCount && (
                <button
                    className={classNames(styles.moreOptionsButton, 'linkButton')}
                    onClick={toggleIsExpanded}
                >
                    {isExpanded ? 'Less Details' : 'More Details'}
                    <Icon name={'expand_more'} />
                </button>
            )}
        </div>
    );
};
