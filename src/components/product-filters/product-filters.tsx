import { useMemo } from 'react';
import { IProductFilters } from '~/src/wix/ecom';
import { productFiltersFromSearchParams, searchParamsFromProductFilters } from '~/src/wix/products';
import { mergeUrlSearchParams, useSearchParamsOptimistic } from '~/src/wix/utils';
import { PriceFilter } from './price-filter';
import { DropdownMenu } from '~/src/components/dropdown-menu/dropdown-menu';
import styles from './product-filters.module.scss';
import Icon from '../icons/icon';

interface ProductFiltersProps {
    minAvailablePrice: number;
    maxAvailablePrice: number;
    currency: string;
    onClearFilters: () => void;
}

export const ProductFilters = ({
    minAvailablePrice,
    maxAvailablePrice,
    currency,
    onClearFilters,
}: ProductFiltersProps) => {
    const [searchParams, setSearchParams] = useSearchParamsOptimistic();

    const filters = useMemo(() => productFiltersFromSearchParams(searchParams), [searchParams]);

    const handleFiltersChange = (changed: Partial<IProductFilters>) => {
        const newParams = searchParamsFromProductFilters({ ...filters, ...changed });
        setSearchParams((params) => mergeUrlSearchParams(params, newParams), {
            preventScrollReset: true,
        });
    };

    return (
        <DropdownMenu
            trigger={
                <button className={styles.trigger}>
                    Price
                    <Icon className={styles.triggerIcon} name={'expand_more'} />
                </button>
            }
            contentProps={{ align: 'end', className: styles.content }}
        >
            <PriceFilter
                minAvailablePrice={minAvailablePrice}
                maxAvailablePrice={maxAvailablePrice}
                minSelectedPrice={filters.minPrice}
                maxSelectedPrice={filters.maxPrice}
                currency={currency}
                onChange={handleFiltersChange}
                onClearFilters={onClearFilters}
            />
        </DropdownMenu>
    );
};
