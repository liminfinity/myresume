import { HTMLAttributes } from 'react';

export type ArticleProps = HTMLAttributes<HTMLElement> & {
  title: string;
};
