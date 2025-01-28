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
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useLocation,
    useOutlet,
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
import React, { PropsWithChildren, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

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
                <link rel="icon" href="/favicon.png" type="image/png" />
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
    const { wixClientId, wixSessionTokens } = useLoaderData<typeof loader>() || {};

    setWixClientId(wixClientId);
    const location = useLocation();
    return (
        <EcomApiContextProvider tokens={wixSessionTokens}>
            <CartOpenContextProvider>
                <AnimatePresence mode={'wait'} initial={false}>
                    <motion.div
                        key={location.key}
                        variants={{
                            initial: {
                                opacity: 0,
                                scale: 0.8,
                                originX: '50vw',
                                originY: '50vh',
                            },
                            animate: {
                                transition: { delay: 0.3, ease: 'easeInOut' },
                                opacity: 1,
                                scale: 1,
                                originX: '50vw',
                                originY: '50vh',
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.8,
                                originX: '50vw',
                                originY: '50vh',
                            },
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                        }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className={styles.root}>
                            <Header />
                            <main className={styles.main}>
                                <AnimatedOutlet locationKey={location.key} />
                            </main>
                            <Footer />
                        </div>
                    </motion.div>
                </AnimatePresence>
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

const AnimatedOutlet = ({ locationKey }: { locationKey: string }) => {
    const [outlet] = useState(useOutlet());
    return outlet && React.cloneElement(outlet, { key: locationKey });
};
