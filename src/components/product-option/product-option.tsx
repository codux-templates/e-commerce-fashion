import { products } from '@wix/stores';
import { ColorSelect } from '~/src/components/color-select/color-select';
import { getChoiceValue } from '~/src/wix/products';
import { Select, SelectItem } from '~/src/components/select/select';
import { ErrorIcon } from '../icons';

import styles from './product-option.module.scss';

export interface ProductOptionProps {
    option: products.ProductOption;
    selectedChoice: products.Choice | undefined;
    error: string | undefined;
    onChange: (choice: products.Choice) => void;
    isQuickView?: boolean;
}

export const ProductOption = ({ isQuickView = false, option, selectedChoice, error, onChange }: ProductOptionProps) => {
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

      {!isQuickView &&
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
                  <ErrorIcon width={18} height={18} />
                  {error}
              </div>
            )}
        </div>}

      {isQuickView && <div>
          {optionType === products.OptionType.color && (
            <div className={styles.quickViewRow}>
                Color
                <ColorSelect
                  className="colorSelect quickViewColors"
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

          ) }
          {optionType !== products.OptionType.color && (
            <div className={styles.quickViewRow}>
                <div>Size</div>
                <div className={styles.quickViewSizes}>
                    {choices
                    .filter((c) => c.value && c.description && c.visible)
                    .map((c) => (
                      <span className={'options'} style={{border: selectedChoice?.value === c.value!? '1px solid #000':'', color: !c.inStock ? 'var(--text-disabled)':''}} key={c.value} onClick={()=>handleChange(c.value!)}>
                      {c.description}
                  </span>
                    ))}
                </div>
            </div>
          )}
      </div>
}
</>

)
    ;
};
