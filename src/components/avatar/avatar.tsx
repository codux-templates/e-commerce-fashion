import classNames from 'classnames';

import styles from './avatar.module.scss';
import Icon from '../icons/icon';

export interface AvatarProps {
    className?: string;
    /** @format media-url */
    imageSrc: string | undefined;
}

export const Avatar = ({ className, imageSrc }: AvatarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {imageSrc ? (
                <img crossOrigin="anonymous" src={imageSrc} alt="" />
            ) : (
                <Icon name="person" />
            )}
        </div>
    );
};
