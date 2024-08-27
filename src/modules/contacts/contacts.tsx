import { Article } from '../../ui';
import { Contact } from '../../components';
import type { IContact } from '../../types';
import { faCode, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';
import type { ContactsProps } from './contacts.types';

const contacts: IContact[] = [
  {
    title: 'Город',
    source: 'Краснояск',
    icon: faLocationDot,
  },
  {
    title: 'Телефон',
    source: '+7 913 557 70 11',
    icon: faPhone,
  },
  {
    title: 'Почта',
    source: 'poleshko.artyom04@gmail.com',
    icon: faEnvelope,
  },
  {
    title: 'Telegram',
    source: 'https://t.me/liminfinity',
    icon: faEnvelope,
  },
  {
    title: 'Github',
    source: 'https://github.com/liminfinity',
    icon: faCode,
  },
  {
    title: 'VK',
    source: 'https://vk.com/poleshkoas',
    icon: faEnvelope,
  },
];

export const Contacts = ({ className }: ContactsProps) => {
  return (
    <Article title="Контактная информация" className={className}>
      <ul className={styles.contacts}>
        {contacts.map((contact, idx) => (
          <li>
            <Contact contact={contact} key={idx} />
          </li>
        ))}
      </ul>
    </Article>
  );
};
