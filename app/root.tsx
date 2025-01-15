import '~/src/styles/reset.scss';
import '~/src/styles/colors.scss';
import '~/src/styles/typography.scss';
import '~/src/styles/global.scss';
import '~/src/styles/utils.scss';

import { json, LoaderFunctionArgs } from '@remix-run/node';
import {
    Links,
    Meta,
    type MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react';
import { Cart } from '~/src/components/cart/cart';
import { Footer } from '~/src/components/footer/footer';
import { Header } from '~/src/components/header/header';
import { NavigationProgressBar } from '~/src/components/navigation-progress-bar/navigation-progress-bar';
import { Toaster } from '~/src/components/toaster/toaster';
import { CartOpenContextProvider } from '~/src/wix/cart';
import { EcomApiContextProvider, getWixClientId, setWixClientId } from '~/src/wix/ecom';
import { commitSession, initializeEcomSession } from '~/src/wix/ecom/session';
import 'material-symbols';

import styles from './root.module.scss';
import { PropsWithChildren } from 'react';

export async function loader({ request }: LoaderFunctionArgs) {
    const { wixSessionTokens, session, shouldUpdateSessionCookie } =
        await initializeEcomSession(request);

    const data = {
        wixClientId: getWixClientId(),
        wixSessionTokens,
    };

    const headers: HeadersInit = shouldUpdateSessionCookie
        ? { 'Set-Cookie': await commitSession(session) }
        : {};

    return json(data, { headers });
}

export function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <title>RND.Apparel</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    const { wixClientId, wixSessionTokens } = useLoaderData<typeof loader>();

    setWixClientId(wixClientId);

    return (
        <EcomApiContextProvider tokens={wixSessionTokens}>
            <CartOpenContextProvider>
                <div className={styles.root}>
                    <Header />
                    <main className={styles.main}>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
                <Cart />
                <NavigationProgressBar className={styles.navigationProgressBar} />
                <Toaster />
            </CartOpenContextProvider>
        </EcomApiContextProvider>
    );
}

export const meta: MetaFunction = () => {
    const title = 'RND.Apparel';
    const description = 'Essential home products for sustainable living';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: '/social-media-image.jpg',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
