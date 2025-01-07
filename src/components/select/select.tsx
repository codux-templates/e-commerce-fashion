import * as RadixSelect from '@radix-ui/react-select';
import classNames from 'classnames';
import { DropdownIcon } from '../icons';

import styles from './select.module.scss';
import React from 'react';

export interface SelectProps<V extends string> {
    value: V;
    onValueChange: (value: V) => void;
    placeholder?: string;
    children: React.ReactNode;
    className?: string;
    dropdownClassName?: string;
    hasError?: boolean;
}

export const Select = <V extends string>({
    value,
    onValueChange,
    placeholder,
    children,
    className,
    dropdownClassName,
    hasError,
}: SelectProps<V>) => (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
        <RadixSelect.Trigger
            className={classNames(styles.trigger, { [styles.hasError]: hasError }, className)}
        >
            <RadixSelect.Value placeholder={placeholder}>Sort by</RadixSelect.Value>
            <RadixSelect.Icon className={styles.triggerIcon}>
                <DropdownIcon width={12} />
            </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
            <RadixSelect.Content
              align={'end'}
                className={classNames(styles.content, dropdownClassName)}
                position="popper"
            >
                <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
            </RadixSelect.Content>
        </RadixSelect.Portal>
    </RadixSelect.Root>
);

export interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export const SelectItem = ({ value, children, className }: SelectItemProps) => {
    return (
        <RadixSelect.Item className={classNames(styles.item, className)} value={value}>
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </RadixSelect.Item>
    );
};
