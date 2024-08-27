import { Title, Link } from '../../ui';
import styles from './style.module.scss';
import type { ProjectProps } from './project.types';
import { cn } from '../../lib';

export const Project = ({ project, className, ...props }: ProjectProps) => {
  const { name, stack, link } = project;
  return (
    <article className={cn(styles.project, className)} {...props}>
      <Title level={3}>{name}</Title>
      <div className={styles.content}>
        <p>{`Стек технологий: ${stack.join(', ')}`}</p>
        <div>
          <span>Сссылка: </span>
          <Link href={link} title="Ссылка на проект">
            {link.substring(link.lastIndexOf('/') + 1)}
          </Link>
        </div>
      </div>
    </article>
  );
};
