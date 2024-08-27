import { cn } from '../../lib';
import { Title } from '../../ui';
import { EducationProps } from './education.types';
import styles from './style.module.scss';

export const Education = ({
  university,
  speciality,
  yearEnding,
  className,
  ...props
}: EducationProps) => {
  return (
    <article className={cn(styles.education, className)} {...props}>
      <Title level={3}>{university}</Title>
      <div className={styles.content}>
        <p>{`Специальность: ${speciality}`}</p>
        <p>{`Год окончания: ${yearEnding}`}</p>
      </div>
    </article>
  );
};
