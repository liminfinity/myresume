import { Article } from '../../ui';
import { Skill } from '../../components';
import { ISkill } from '../../types/entities';
import { DefaultProps } from '../../types';
import styles from './style.module.scss';

const skills: ISkill[] = [
  {
    name: 'JavaScript',
    level: 10,
  },
  {
    name: 'TypeScript',
    level: 9,
  },
  {
    name: 'React',
    level: 9,
  },
  {
    name: 'Redux',
    level: 9,
  },
  {
    name: 'Next.js',
    level: 7,
  },
  {
    name: 'Node.js',
    level: 8,
  },
  {
    name: 'NestJS',
    level: 8,
  },
  {
    name: 'HTML5',
    level: 10,
  },
  {
    name: 'CSS3',
    level: 10,
  },
  {
    name: 'Git',
    level: 8,
  },
];

export const Skills = ({ className }: DefaultProps) => {
  return (
    <Article className={className} title="Навыки">
      <ul className={styles.skills}>
        {skills.map((skill, idx) => (
          <li>
            <Skill skill={skill} key={idx} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
