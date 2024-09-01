import { Experience } from '../../components';
import { IExperience } from '../../types';
import { Article } from '../../ui';
import type { ExperiencesProps } from './experiences.types';
import styles from './experiences.module.scss';


const experiences: IExperience[] = [
  {
    company: 'Яндекс',
    position: 'Студент-разработчик интерфейсов',
    startingDate: "Август 2024",
    endingDate: "Сентябрь 2024",
    duties: [
      "Спроектировал и разработал основную продуктовую часть интерфейсов сервиса на React;",
      "Настроил инфраструктуру проекта, интегрировал сервис с OAUTH авторизацией Яндекса и другими внутренними сервисами;",
      "Покрыл большинство продуктовых сценариев модульными тестами на Jest и интеграционными тестами на React Testing Library;",
      "Проект был успешно защищен, получил высокие оценки и дальнейшую поддержку в разработке. Сейчас находится под NDA."
    ]
  },
  {
    company: 'Аспирити — студия веб разработки',
    position: 'Стажер - разработчик интерфейсов',
    startingDate: "Июнь 2024",
    endingDate: "Июль 2024",
    duties: [
      "Разработал интерфейс для аутентификации пользователя, а также для загрузки и управления созвонами в приложении для суммаризации видео на React;",
      "Настроил инфраструктуру проекта (eslint, stylelint, prettier, husky и др);",
      "Перевел команду на FSD архитектуру."
    ]
  },
]

export const Experiences = ({ className }: ExperiencesProps) => {

  return (
    <Article title="Опыт работы" className={className}>
      <ul className={styles.experiences}>
        {experiences.map((experience, idx) => (
          <li>
            <Experience experience={experience} key={idx} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
