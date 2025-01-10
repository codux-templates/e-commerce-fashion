import {
    redirect,
    type TypedResponse,
    type LoaderFunctionArgs,
    type MetaFunction,
} from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import { type OrderDetails } from '~/src/wix/ecom';
import { initializeEcomApiForRequest } from '~/src/wix/ecom/session';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { loaderMockData } from './loader-mock-data';


import styles from './route.module.scss';

export type LoaderResponseData = { orders: OrderDetails[] };
export type LoaderResponse = Promise<TypedResponse<never> | LoaderResponseData>;

export async function loader({ request }: LoaderFunctionArgs): LoaderResponse {
    const api = await initializeEcomApiForRequest(request);
    if (!api.isLoggedIn()) {
        return redirect('/login');
    }

    const ordersResponse = await api.getOrders();
    return { orders: ordersResponse.items };
}

// will be called if app is run in Codux because fetching orders requires
// user to be logged in but it's currently can't be done through Codux
export async function coduxLoader(): ReturnType<typeof loader> {
    return loaderMockData;
}

export default function MyOrdersPage() {
    const navigate = useNavigate()
    const { orders } = useLoaderData<typeof loader>();

    const formatOrderCreationDate = (date: Date) =>
        date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });

    return (
        <div>
            <div className={styles.orders}>
                {orders.length > 0 ? (
                    <>
                        <div className={styles.orderListHeader}>
                            <div className={styles.orderListHeaderSection}>Order</div>
                            <div className={styles.orderListHeaderSection}>Date</div>
                            <div className={styles.orderListHeaderSection}>Status</div>
                            <div className={styles.orderListHeaderSection}>Total</div>
                            <div className={styles.orderListHeaderSection}></div>
                        </div>

                        {orders.map((order) => (
                            <div key={order._id} className={styles.orderHeaderWrapper}>
                                <div className={styles.orderHeader}>
                                    <div className={styles.orderHeaderSection}>
                                        <span className={styles.orderHeaderSectionName}>
                                            Order:{' '}
                                        </span>
                                        {order.number}
                                    </div>
                                    <div className={styles.orderHeaderSection}>
                                        <span className={styles.orderHeaderSectionName}>
                                            Date:{' '}
                                        </span>
                                        {formatOrderCreationDate(new Date(order._createdDate!))}
                                    </div>

                                    <div className={styles.orderHeaderSection}>
                                        <span className={styles.orderHeaderSectionName}>
                                            Status:{' '}
                                        </span>
                                        {order.status}
                                    </div>
                                    <div className={styles.orderHeaderSection}>
                                        <span className={styles.orderHeaderSectionName}>
                                            Total:{' '}
                                        </span>
                                        {order.priceSummary?.total?.formattedAmount}
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            navigate(`/members-area/my-orders/${order._id}`)
                                        }
                                        className="button"
                                    >
                                        View Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className={styles.emptyStateContainer}>
                        <div className={styles.emptyStateMessage}>
                            {"You haven't placed any orders yet"}
                        </div>
                        <CategoryLink
                            categorySlug="all-products"
                            className={styles.startBrowsingLink}
                        >
                            Start Browsing
                        </CategoryLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'My Orders | RND.Apparel' },
        {
            name: 'description',
            content: 'Essential home products for sustainable living',
        },
        {
            property: 'robots',
            content: 'noindex, nofollow',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
