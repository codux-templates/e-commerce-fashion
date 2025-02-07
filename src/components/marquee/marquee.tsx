import styles from './sales-bar.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import ReactMarquee from 'react-fast-marquee';
import { ClientOnly } from 'remix-utils/client-only';

interface SalesBarProps {
    className?: string;
    elements: string[];
}

export const Marquee: FC<SalesBarProps> = ({ className, elements }) => {
    return (
        <div className={classNames(styles.saleBar, className)}>
            <ClientOnly>
                {() => (
                    <ReactMarquee autoFill={true}>
                        {elements.map((element, index) => (
                            <SalesBarItem key={index} string={element} />
                        ))}
                    </ReactMarquee>
                )}
            </ClientOnly>
        </div>
    );
};

const SalesBarItem: FC<{ string: string }> = ({ string }) => {
    return <div className={styles.saleBarItem}>{string}</div>;
};
