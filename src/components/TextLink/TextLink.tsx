import React, { FC, memo } from "react";
import { Link } from "react-router-dom"
import cn from 'classnames';
import './TextLink.scss';

type Props = {
  to: string;
  text: string;
  white?: boolean;
  adaptive?: boolean;
  size?: string;
}

export const TextLink: FC<Props> = memo(({ to, text, white, adaptive, size }) => {
  return (
    <Link
      to={to}
      className={cn('textLink', { 'textLink--adaptive': adaptive })}
      style={{color: white ? '#fff' : '#000', fontSize: size ? `${size}px` : ''}}
    >
      {text}
    </Link>
  )
})