import React from 'react'
import Article from '../../ui/article'
import Contact from '../../components/contact'
import { IContact } from '../../types/entities'
import { v4 as uuid } from 'uuid'


const contacts: (IContact & {id: string})[] = [
    {
        id: uuid(),
        title: 'Город',
        contact: 'Краснояск' ,
        svg: "../../public/svg/location.svg"
    },
    {
      id: uuid(),
      title: 'Телефон',
      contact: '+7 913 557 70 11' ,
      svg: "../../public/svg/phone.svg"
    },
    {
      id: uuid(),
      title: 'Почта',
      contact: 'poleshko.artem04@gmail.com' ,
      svg: "../../public/svg/mail.svg"
    },
    {
      id: uuid(),
      title: 'Telegram',
      contact: 'https://t.me/liminfinity' ,
      svg: "../../public/svg/telegram.svg"
    },
    {
      id: uuid(),
      title: 'Github',
      contact: 'https://github.com/liminfinity' ,
      svg: "../../public/svg/github.svg"
    },
    {
      id: uuid(),
      title: 'Codewars',
      contact: 'https://www.codewars.com/users/liminfinity' ,
      svg: "../../public/svg/codewars.svg"
    }

]

export default function Contacts() {
  return (
    <Article title='Контактная информация'>
        {contacts.map(contact => <Contact key={contact.id} {...contact}/>)}
    </Article>
  )
}