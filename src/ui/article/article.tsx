import type { ArticleProps } from './article.types';

import { Title } from '../title';
import styles from './article.module.scss';
import { cn } from '../../lib';

export const Article = ({ title, children, className, ...props }: ArticleProps) => {
  return (
    <article className={cn(styles.article, className)} {...props}>
      <Title level={2}>{title}</Title>
      <div className={styles.text}>{children}</div>
    </article>
  );
};
