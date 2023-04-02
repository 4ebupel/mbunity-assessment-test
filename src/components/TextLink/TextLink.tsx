import React, { FC, memo } from "react";
import { Link } from "react-router-dom"
import cn from 'classnames';
import './TextLink.scss';

type Props = {
  to: string;
  text: string;
  white?: boolean;
  responsive?: boolean;
}

export const TextLink: FC<Props> = memo(({ to, text, white, responsive }) => {
  return (
    <Link
      to={to}
      className={cn('textLink', { 'textLink--responsive': responsive })}
      style={white ? {color: '#fff'} : {color: '#000'}}
    >
      {text}
    </Link>
  )
})