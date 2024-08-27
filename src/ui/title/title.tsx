import { createElement } from 'react';
import type { TitleProps } from './title.types';

export const Title = ({ level = 2, ...props }: TitleProps) => {
  const tagType = `h${level}`;
  return createElement(tagType, { ...props });
};
