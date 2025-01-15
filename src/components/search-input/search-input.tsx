import { type FormEventHandler, forwardRef, useState } from 'react';
import styles from './search-input.module.scss';
import classNames from 'classnames';
import { FadeIn, FloatIn } from '~/src/components/visual-effects';

export interface SearchInputProps extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    defaultValue?: string;
    onSearchSubmit?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
    { className, defaultValue = '', onSearchSubmit, onKeyDown },
    ref,
) {
    const [value, setValue] = useState(defaultValue);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (value.trim()) onSearchSubmit?.(value);
    };

    return (
        <div onKeyDown={onKeyDown} tabIndex={-1} className={classNames(styles.root, className)}>
            <FadeIn duration={0.15} className={styles.backdrop}></FadeIn>
            <FloatIn distance={56} direction={'down'} duration={0.2} className={styles.content}>
                <form onSubmit={handleSubmit} role={'search'}>
                    <label className={styles.label}>
                        <span className="material-symbols-outlined">search</span>
                        <input
                            ref={ref}
                            className={styles.input}
                            type="text"
                            spellCheck="false"
                            placeholder="Start typing..."
                            minLength={2}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </label>
                </form>
            </FloatIn>
        </div>
    );
});
