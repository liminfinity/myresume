import { HTMLAttributes } from 'react';

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: number;
};
