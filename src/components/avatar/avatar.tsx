import classNames from 'classnames';

import styles from './avatar.module.scss';

export interface AvatarProps {
    className?: string;
    /** @format media-url */
    imageSrc: string | undefined;
}

export const Avatar = ({ className, imageSrc }: AvatarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {imageSrc ? <img crossOrigin="anonymous" src={imageSrc} alt="" /> :
              <span className={"material-symbols-outlined"} style={{ fontSize: 20 }}>person</span>}
        </div>
    );
};
