import { Article } from '../../ui';
import { IProject } from '../../types/entities';
import { Project } from '../../components';
import styles from './projects.module.scss';
import { ProjectsProps } from './projects.types';

const projects: IProject[] = [
  {
    name: 'Интерактивное 3D-меню с геймификацией',
    stack: ['React', 'RTK/RTK Query', 'Typescript', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/lunchlayout',
  },
  {
    name: 'Приложение для суммаризации видео с помощью AI',
    stack: ['React', 'RTK/RTK Query', 'Typescript', 'TailwindCSS'],
    link: 'https://bitbucket.org/aspirity/practice-2024',
  },
  {
    name: 'Глобальное хранилище всех книг',
    stack: ['React', 'Zustand', 'Tanstack Query', 'Typescript', 'SCSS'],
    link: 'https://github.com/liminfinity/mybook',
  },
  {
    name: 'Мессенджер с функцией распознавания речи',
    stack: ['React', 'RTK', 'Javascript', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/liminfinity/mychat',
  },
];

export const Projects = ({ className }: ProjectsProps) => {
  return (
    <Article title="Мои проекты" className={className}>
      <ul className={styles.experience}>
        {projects.map((project, idx) => (
          <li>
            <Project project={project} key={idx} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
