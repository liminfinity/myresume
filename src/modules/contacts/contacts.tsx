import { Article } from '../../ui';
import { Contact } from '../../components';
import type { IContact } from '../../types';
import { faCode, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';

const contacts: IContact[] = [
  {
    title: 'Город',
    contact: 'Краснояск',
    icon: faLocationDot,
  },
  {
    title: 'Телефон',
    contact: '+7 913 557 70 11',
    icon: faPhone,
  },
  {
    title: 'Почта',
    contact: 'poleshko.artyom04@gmail.com',
    icon: faEnvelope,
  },
  {
    title: 'Telegram',
    contact: 'https://t.me/liminfinity',
    icon: faEnvelope,
  },
  {
    title: 'Github',
    contact: 'https://github.com/liminfinity',
    icon: faCode,
  },
  {
    title: 'Codewars',
    contact: 'https://www.codewars.com/users/liminfinity',
    icon: faCode,
  },
];

export const Contacts = () => {
  return (
    <Article title="Контактная информация">
      <ul className={styles.contacts}>
        {contacts.map((contact, idx) => (
          <li>
            <Contact key={idx} {...contact} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
