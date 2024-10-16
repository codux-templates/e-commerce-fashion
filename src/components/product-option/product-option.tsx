import { products } from '@wix/stores';
import { ColorSelect } from '~/components/color-select/color-select';
import { Select, SelectItem } from '~/components/select/select';
import { getChoiceValue } from '~/utils/product-utils';
import { ErrorIcon } from '../icons';

import styles from './product-option.module.scss';

export interface ProductOptionProps {
    option: products.ProductOption;
    selectedChoice: products.Choice | undefined;
    error: string | undefined;
    onChange: (choice: products.Choice) => void;
}

export const ProductOption = ({ option, selectedChoice, error, onChange }: ProductOptionProps) => {
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
        <div className={styles.root}>
            <div className="paragraph2">
                {name}
                {selectedChoice && `: ${selectedChoice.description}`}
            </div>

            {optionType === products.OptionType.color ? (
                <ColorSelect
                    className="colorSelect"
                    // `description` is what identifies the color choice. It's the unique color name.
                    // `value` is the color value, which can be repeated in different color choices.
                    options={choices.map((c) => ({ id: c.description!, color: c.value! }))}
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
                    {choices.map((c) => (
                        <SelectItem key={c.value} value={c.value!}>
                            {c.description}
                        </SelectItem>
                    ))}
                </Select>
            )}

            {hasError && (
                <div className={styles.error}>
                    <ErrorIcon width={18} height={18} />
                    {error}
                </div>
            )}
        </div>
    );
};