import { Article } from '../../ui';
import { IProject } from '../../types/entities';
import { Project } from '../../components';
import styles from './style.module.scss';

const projects: IProject[] = [
  {
    name: 'Мессенджер с распознаванием речи',
    experience: [
      'Real time взаимодействие клиентской и серверной части',
      'Проектирование логики работы клиентского приложения, используя React',
      'Реализация маршрутизации с помощью React Router',
      'Проектирование и реализация API и модульной архитектуры на Node.js',
    ],
    stack: ['JavaScript', 'React', 'React Router', 'Socket.IO', 'Tailwind', 'Node.js'],
    link: 'https://github.com/liminfinity/mychat',
  },
  {
    name: 'JWT авторизация с возможностью восстановления пароля',
    experience: [
      'Реализация безопасной авторизации в приложении, используя JWT',
      'Создание типизированного клиентского приложения с однонаправленным потоком данных, используя Redux Toolkit',
      'Проектирование и реализация API и модульной архитектуры на Node.js',
    ],
    stack: ['TypeScript', 'React', 'Redux Toolkit', 'Tailwind', 'Node.js'],
    link: 'https://github.com/liminfinity/myauth',
  },
  {
    name: 'Адаптивный сайт по выбранному макету',
    experience: [
      'Создание адаптивности и доступности для вспомогательных технологий (скринридеры)',
      'Использование семантической верстки и БЭМ',
      'Реализация сборки сайта, используя Webpack',
    ],
    stack: ['HTML5', 'CSS3', 'Webpack', 'JavaScript'],
    link: 'https://liminfinity.github.io/eatly',
  },
];

export const Projects = () => {
  return (
    <Article title="Мои проекты">
      <ul className={styles.experience}>
        {projects.map((project, idx) => (
          <li>
            <Project key={idx} {...project} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
