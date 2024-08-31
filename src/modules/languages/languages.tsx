import { Article } from '../../ui';
import { Language } from '../../components';
import { ILanguage } from '../../types/entities';
import styles from './languages.module.scss';
import { LanguagesProps } from './languages.types';

const languages: ILanguage[] = [
  {
    name: 'Русский',
    level: 'Носитель'
  },
  {
    name: 'Английский',
    level: 'B1 (Средний)'
  },
  
];

export const Languages = ({ className }: LanguagesProps) => {
  return (
    <Article className={className} title="Владение языками">
      <ul className={styles.languages}>
        {languages.map((language, idx) => (
          <li>
            <Language language={language} key={idx} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
