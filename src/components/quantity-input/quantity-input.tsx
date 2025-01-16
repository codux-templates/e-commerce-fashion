import { useState } from 'react';
import classNames from 'classnames';
import styles from './quantity-input.module.scss';
import Icon from '../icons/icon';

type QuantityInputProps = {
    value: number;
    onChange: (value: number) => void;
    id?: string;
    className?: string;
    disabled?: boolean;
};

export const QuantityInput = ({
    value,
    onChange,
    id,
    className,
    disabled = false,
}: QuantityInputProps) => {
    const [internalValue, setInternalValue] = useState<string | undefined>();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const strValue = event.target.value.replace(/\D/g, '');
        const numValue = Number(strValue);
        setInternalValue(strValue);
        if (numValue) onChange(numValue);
    };

    const handleBlur = () => setInternalValue(undefined);
    const increment = () => onChange(Math.max(1, Math.floor(value + 1)));
    const decrement = () => onChange(Math.max(1, Math.ceil(value - 1)));

    return (
        <div className={classNames(styles.root, { [styles.disabled]: disabled }, className)}>
            <button
                className={classNames(styles.button, 'iconButton')}
                onClick={decrement}
                disabled={value <= 1 || disabled}
            >
                <Icon name={'remove'} />
            </button>
            <input
                id={id}
                type="text"
                inputMode="numeric"
                className={classNames(styles.input, 'transparentInput', className)}
                value={internalValue ?? value}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
            />
            <button
                className={classNames(styles.button, 'iconButton')}
                onClick={increment}
                disabled={disabled}
            >
                <Icon name={'add'} />
            </button>
        </div>
    );
};
