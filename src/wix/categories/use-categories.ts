import useSwr, { SWRResponse } from 'swr';
import { useEcomApi, type Collection } from '../ecom';

export function useCategories(): SWRResponse<Collection[] | any | undefined> {
    const ecomApi = useEcomApi();
    return useSwr('categories', async () => ecomApi.getAllCategories(), {
        keepPreviousData: false,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
    });
}
