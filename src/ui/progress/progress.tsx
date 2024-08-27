import { cn } from '../../lib';
import type { ProgressProps } from './progress.types';
import styles from './style.module.scss';

export const Progress = ({ min = 1, max = 10, value = 5, className }: ProgressProps) => {
  return (
    <meter className={cn(styles.progress, className)} min={min} max={max} value={value}></meter>
  );
};
