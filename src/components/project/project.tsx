import { Title, Link } from '../../ui';
import styles from './style.module.scss';
import type { ProjectProps } from './project.types';
import { cn } from '../../lib';

export const Project = ({ name, stack, experience, link, className, ...props }: ProjectProps) => {
  return (
    <article className={cn(styles.project, className)} {...props}>
      <Title level={3}>{name}</Title>
      <div className={styles.content}>
        <p>{`Стек технологий: ${stack.join(', ')}`}</p>
        <div className={styles.expContainer}>
          <span>Полученный опыт:</span>
          <ol className={styles.experience}>
            {experience.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ol>
        </div>
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
