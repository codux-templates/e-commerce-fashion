import { type IconName } from "./iconNames"
import classNames from 'classnames';
import { type HTMLAttributes } from 'react';

type IconProps = {
  name: IconName
  className?: string
  size?: number
}

export default function Icon({ name, size = 20, className, style, ...props }: IconProps & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span style={{fontSize: size, ...style}}  className={classNames("material-symbols-outlined", className)} {...props}>
      {name}
    </span>
  )
}
