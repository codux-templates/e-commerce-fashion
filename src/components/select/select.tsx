import * as RadixSelect from '@radix-ui/react-select';
import classNames from 'classnames';

import styles from './select.module.scss';
import React from 'react';
import Icon from '../icons/icon';

export interface SelectProps<V extends string> {
    value: V;
    onValueChange: (value: V) => void;
    placeholder?: string;
    children: React.ReactNode;
    className?: string;
    dropdownClassName?: string;
    /**
     * Allows to customize the selected value.
     * By default the selected item's text will be rendered.
     */
    renderValue?: (value: V) => React.ReactNode;
    hasError?: boolean;
}

export const Select = <V extends string>({
    value,
    onValueChange,
    placeholder,
    children,
    className,
    dropdownClassName,
    renderValue,
    hasError,
}: SelectProps<V>) => (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
        <RadixSelect.Trigger
            className={classNames(styles.trigger, { [styles.hasError]: hasError }, className)}
        >
            <RadixSelect.Value placeholder={placeholder}>{renderValue?.(value)}</RadixSelect.Value>
            <RadixSelect.Icon className={styles.triggerIcon}>
                <Icon name="expand_more" />
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

export const SelasdectItem = ({ value, children, className }: SelectItemProps) => {
    return (
        <RadixSelect.Item className={classNames(styles.item, className)} value={value}>
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </RadixSelect.Item>
    );
};

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectItem({ children, className, ...props }, forwardedRef) {
      return (
        <RadixSelect.Item
          className={classNames(styles.item, className)}
          {...props}
          ref={forwardedRef}
        >
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </RadixSelect.Item>
      );
  }
);
