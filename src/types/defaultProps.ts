import type { HTMLAttributes } from 'react';

type HTMLProps = HTMLAttributes<HTMLElement>;

export type DefaultProps = {
  className?: HTMLProps['className'];
  children?: HTMLProps['children'];
};
