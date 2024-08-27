import { Article } from '../../ui';
import { Skill } from '../../components';
import { ISkill } from '../../types/entities';
import { DefaultProps } from '../../types';
import styles from './style.module.scss';

const skills: ISkill[] = [
  {
    name: 'JavaScript',
    level: 9,
  },
  {
    name: 'TypeScript',
    level: 8,
  },
  {
    name: 'React',
    level: 8,
  },
  {
    name: 'Redux',
    level: 7,
  },
  {
    name: 'Webpack',
    level: 6,
  },
  {
    name: 'Node.js',
    level: 8,
  },
  {
    name: 'CSS3',
    level: 9,
  },
  {
    name: 'HTML5',
    level: 10,
  },
  {
    name: 'Git',
    level: 6,
  },
];

export const Skills = ({ className }: DefaultProps) => {
  return (
    <Article className={className} title="Навыки">
      <ul className={styles.skills}>
        {skills.map((skill, idx) => (
          <li>
            <Skill key={idx} {...skill} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
