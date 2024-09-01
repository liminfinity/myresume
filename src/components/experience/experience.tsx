import { cn } from '../../lib';
import { Title } from '../../ui';
import type { ExperienceProps } from './experience.types';
import styles from './style.module.scss';

export const Experience = ({ experience, className, ...props }: ExperienceProps) => {

  const {company, position, duties, startingDate, endingDate} = experience;

  return (
    <article className={cn(styles.experience, className)} {...props}>
      <Title level={3}>{company}</Title>
      <span className={styles.dates}>{`${startingDate} - ${endingDate}`}</span>
      <b>{position}</b>
      <div className={styles.achievements}>
        <ol className={styles.achievementList}>
          {duties.map((duty, idx) => (
            <li key={idx}>{duty}</li>
          ))}
        </ol>
      </div>
    </article>
  );
};
