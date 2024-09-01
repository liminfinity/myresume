import { Title, } from '../../ui';
import styles from './language.module.scss';
import type { LanguageProps } from './language.types';
import { cn } from '../../lib';

export const Language = ({ language, className, ...props }: LanguageProps) => {
  const {level, name} = language
  return (
    <article className={cn(styles.container, className)} {...props}>
      <Title level={4}>{name}</Title>
      -
      <span>{level}</span>
    </article>
  );
};
