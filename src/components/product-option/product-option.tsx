import { products } from '@wix/stores';
import { ColorSelect } from '~/src/components/color-select/color-select';
import { getChoiceValue } from '~/src/wix/products';
import { Select, SelectItem } from '~/src/components/select/select';

import styles from './product-option.module.scss';
import classNames from 'classnames';
import Icon from '../icons/icon';

export interface ProductOptionProps {
    option: products.ProductOption;
    selectedChoice: products.Choice | undefined;
    error: string | undefined;
    onChange: (choice: products.Choice) => void;
    isQuickView?: boolean;
}

export const ProductOption = ({
    isQuickView = false,
    option,
    selectedChoice,
    error,
    onChange,
}: ProductOptionProps) => {
    const { name, optionType, choices } = option;

    if (name === undefined || choices === undefined || optionType === undefined) {
        return null;
    }

    const handleChange = (value: string) => {
        const newSelectedChoice = choices.find((c) => getChoiceValue(optionType, c) === value);
        if (newSelectedChoice) {
            onChange(newSelectedChoice);
        }
    };

    const hasError = error !== undefined;

    return (
        <>
            {!isQuickView && (
                <div className={styles.root}>
                    <div className="subheading">{name}</div>

                    {optionType === products.OptionType.color ? (
                        <ColorSelect
                            className={'colorSelect'}
                            // `description` is what identifies the color choice. It's the unique color name.
                            // `value` is the color value, which can be repeated in different color choices.
                            options={choices
                                .filter((c) => c.value && c.description && c.visible)
                                .map((c) => ({
                                    id: c.description!,
                                    color: c.value!,
                                    crossedOut: !c.inStock,
                                }))}
                            selectedId={selectedChoice?.description ?? ''}
                            onChange={handleChange}
                            hasError={hasError}
                        />
                    ) : (
                        <Select
                            placeholder={`Select ${name}`}
                            value={selectedChoice?.value ?? ''}
                            onValueChange={handleChange}
                            hasError={hasError}
                        >
                            {choices
                                .filter((c) => c.value && c.description && c.visible)
                                .map((c) => (
                                    <SelectItem key={c.value} value={c.value!}>
                                        {c.description}
                                        {!c.inStock && ` (out of stock)`}
                                    </SelectItem>
                                ))}
                        </Select>
                    )}

                    {hasError && (
                        <div className={styles.error}>
                            <Icon name={'error'} />
                            {error}
                        </div>
                    )}
                </div>
            )}

            {isQuickView && (
                <div>
                    {optionType === products.OptionType.color && (
                        <div className={styles.quickViewRow}>
                            Color
                            <ColorSelect
                                className={classNames('colorSelect', styles.quickViewColors)}
                                // `description` is what identifies the color choice. It's the unique color name.
                                // `value` is the color value, which can be repeated in different color choices.
                                options={choices
                                    .filter((c) => c.value && c.description && c.visible)
                                    .map((c) => ({
                                        id: c.description!,
                                        color: c.value!,
                                        crossedOut: !c.inStock,
                                    }))}
                                selectedId={selectedChoice?.description ?? ''}
                                onChange={handleChange}
                                hasError={hasError}
                            />
                        </div>
                    )}
                    {optionType !== products.OptionType.color && (
                        <div className={styles.quickViewRow}>
                            <div>Size</div>
                            <div className={styles.quickViewSizes}>
                                {choices
                                    .filter((c) => c.value && c.description && c.visible)
                                    .map((c) => (
                                        <span
                                            className={classNames(
                                                styles.option,
                                                { [styles.disabled]: !c.inStock },
                                                {
                                                    [styles.selected]:
                                                        selectedChoice?.value === c.value!,
                                                },
                                            )}
                                            key={c.value}
                                            onClick={() => handleChange(c.value!)}
                                        >
                                            {c.description}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
