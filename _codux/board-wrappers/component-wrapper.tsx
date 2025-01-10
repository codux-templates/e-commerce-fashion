import { createRemixStub } from '@remix-run/testing';
import { PropsWithChildren } from 'react';
import { EcomApiContextProvider } from '~/src/wix/ecom';
import { CartOpenContextProvider } from '~/src/wix/cart';

export interface ComponentWrapperProps extends PropsWithChildren {
    loaderData?: Record<string, unknown>;
}

export default function ComponentWrapper({ children, loaderData }: ComponentWrapperProps) {
    const RemixStub = createRemixStub([
        {
            Component: () => children,
            ErrorBoundary: () => children,
        },
    ]);

    return (
        <EcomApiContextProvider>
            <CartOpenContextProvider>
                <RemixStub hydrationData={{ loaderData }} />
            </CartOpenContextProvider>
        </EcomApiContextProvider>
    );
}
