import { cn } from '../../lib';
import type { LinkProps } from './link.types';
import styles from './style.module.scss';

export const Link = ({ className, ...props }: LinkProps) => {
  return <a className={cn(styles.link, className)} {...props} />;
};
