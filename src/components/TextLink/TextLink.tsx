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
  blank?: boolean;
}

export const TextLink: FC<Props> = memo(({ to, text, white, adaptive, size, blank }) => {
  return (
    <Link
      to={to}
      className={cn(
        'textLink', 
        { 'textLink--adaptive': adaptive }, 
        { 'textLink--white': white }
        )}
      style={{fontSize: size ? `${size}px` : ''}}
      target={blank ? '_blank' : '_self'}
    >
      {text}
    </Link>
  )
})