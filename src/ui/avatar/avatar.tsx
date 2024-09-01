import { cn } from '../../lib';
import type { AvatarProps } from './avatar.types';
import styles from './avatar.module.scss';

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <img className={styles.avatar} {...props} />
    </div>
  );
};
