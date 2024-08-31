import { cn } from '../../lib';
import { Title } from '../../ui';
import type { ExperienceProps } from './experience.types';
import styles from './style.module.scss';

export const Experience = ({ experience, className, ...props }: ExperienceProps) => {

  const {company, position, achievements, startingDate, endingDate} = experience;

  return (
    <article className={cn(styles.experience, className)} {...props}>
      <Title level={3}>{company}</Title>
      <span className={styles.dates}>{`${startingDate} - ${endingDate}`}</span>
      <b>{position}</b>
      <div className={styles.achievements}>
        <b>Достижения</b>
        <ol className={styles.achievementList}>
          {achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ol>
      </div>
    </article>
  );
};
