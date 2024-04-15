
import Article from '../../ui/article'
import Contact from '../../components/contact'
import { IContact } from '../../types/entities'
import { v4 as uuid } from 'uuid'
import { faCode, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.scss'

const contacts: (IContact & {id: string})[] = [
    {
        id: uuid(),
        title: 'Город',
        contact: 'Краснояск' ,
        icon: faLocationDot
    },
    {
      id: uuid(),
      title: 'Телефон',
      contact: '+7 913 557 70 11' ,
      icon: faPhone
    },
    {
      id: uuid(),
      title: 'Почта',
      contact: 'poleshko.artem04@gmail.com' ,
      icon: faEnvelope
    },
    {
      id: uuid(),
      title: 'Telegram',
      contact: 'https://t.me/liminfinity' ,
      icon: faEnvelope
    },
    {
      id: uuid(),
      title: 'Github',
      contact: 'https://github.com/liminfinity' ,
      icon: faCode
    },
    {
      id: uuid(),
      title: 'Codewars',
      contact: 'https://www.codewars.com/users/liminfinity' ,
      icon: faCode
    }

]

export default function Contacts() {
  return (
    <Article title='Контактная информация'>
      <ul className={styles.contacts}>
        {contacts.map(contact => {
          return <li>
                  <Contact key={contact.id} {...contact}/>
                </li>
        })}
      </ul>
    </Article>
  )
}