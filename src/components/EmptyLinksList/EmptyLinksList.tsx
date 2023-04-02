/* eslint-disable array-callback-return */
import { FC, memo } from "react";
import { TextLink } from "../TextLink/TextLink";
import './EmptyLinksList.scss';

type Props = {
  names: string[];
  white?: boolean;
  adaptive?: boolean;
  size?: string;
};

export const EmpyLinksList: FC<Props> = memo(({ names, white, adaptive, size }) => {
  return (
    <ul className="emptyLinksList">
      {names.map((name) => (
        <li key={name}>
          <TextLink to="#" text={name} white={white} adaptive={adaptive} size={size}/>
        </li>
      ))}
    </ul>
  );
});
