import React from 'react'
import { IDefaultProps } from '../../types/components'
import Title from '../../ui/title'
import Icon from '../../ui/icon'
import { IContact } from '../../types/entities'

interface IContactProps extends IContact, IDefaultProps {}

export default function Contact({title, contact, svg}: IContactProps) {
  return (
    <article>
        <Icon src={svg}/>
        <address>
            <Title level={4}>{title}</Title>
            {/^https?:\/\/.+/.test(contact) ? <a href={contact}>{contact}</a> : <span>{contact}</span>}
        </address>
    </article>
  )
}