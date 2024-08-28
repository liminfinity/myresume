import { Experience } from '../../components';
import { IExperience } from '../../types';
import { Article } from '../../ui';
import type { ExperiencesProps } from './experiences.types';
import styles from './style.module.scss';


const experiences: IExperience[] = [
  {
    company: 'Яндекс',
    position: 'Студент-разработчик ШРИ',
    startingDate: "Август 2024",
    endingDate: "Сентябрь 2024",
    task: "Спроектировал и разработал основную продуктовую часть интерфейсов сервиса, настроил инфраструктуру проекта, интегрировал сервис с OAUTH авторизацией Яндекса и другими внутренними сервисами. Проект был успешно защищен, получил высокие оценки и дальнейшую поддержку в разработке. Сейчас находится под NDA."
  },
  {
    company: 'Аспирити — студия веб разработки',
    position: 'Стажер - разработчик интерфейсов',
    startingDate: "Июнь 2024",
    endingDate: "Июль 2024",
    task: "Разработал интерфейс в приложении для суммаризации видео с помощью ИИ для всего цикла аутентификации пользователя (авторизация, регистрация, восстановление пароля), а также для загрузки и управления созвонами. Настроил инфраструктуру проекта (линтер, роутер, husky и др). Перевел команду на fsd архитектуру."
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
