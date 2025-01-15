import {
    redirect,
    type TypedResponse,
    type LoaderFunctionArgs,
    type MetaFunction,
} from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';
import { initializeEcomApiForRequest } from '~/src/wix/ecom/session';
import { OrderSummary } from '~/src/components/order-summary/order-summary';
import { loaderMockData } from './loader-mock-data';
import { OrderDetails } from '~/src/wix/ecom';

import styles from './route.module.scss';
import classNames from 'classnames';
import { orderTransactions } from '@wix/ecom';

export type LoaderResponseData = {
    order: OrderDetails;
    orderTransactions: orderTransactions.OrderTransactions | undefined;
};
export type LoaderResponse = Promise<TypedResponse<never> | LoaderResponseData>;

export async function loader({ params, request }: LoaderFunctionArgs): LoaderResponse {
    if (!params.orderId) throw new Response('Bad Request', { status: 400 });
    const api = await initializeEcomApiForRequest(request);
    if (!api.isLoggedIn()) {
        return redirect('/login');
    }

    const order = await api.getOrder(params.orderId);
    const orderTransactions = await api.getOrderTransactions(params.orderId);
    if (!order) throw new Response('Order Not Found', { status: 404 });
    return { order, orderTransactions };
}

// will be called if app is run in Codux because fetching orders requires
// user to be logged in but it's currently can't be done through Codux
export async function coduxLoader(): ReturnType<typeof loader> {
    return loaderMockData;
}

export default function MyOrderPage() {
    const { order, orderTransactions } = useLoaderData<typeof loader>();

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <NavLink
                    to={'/members-area/my-orders'}
                    className={classNames('action', styles.backLink)}
                >
                    <span className={'material-symbols-outlined'}>arrow_back</span>
                    My orders
                </NavLink>
                <h1 className="heading1 uppercase">Order details</h1>
            </div>
            <div className={styles.content}>
                <OrderSummary key={order._id} order={order} orderTransactions={orderTransactions} />
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'My Order | RND.Apparel' },
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
