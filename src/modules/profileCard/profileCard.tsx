import React from 'react'
import Title from '../../ui/title'
import Avatar from '../../ui/avatar'

export default function ProfileCard() {
  return (
    <article>
        <Avatar src="../../public/images/avatar.jpg" alt="Моя фотография. На ней изображен мужчина 20 лет"/>
        <div>
            <Title level={1}>
                Артём Полешко <span>20 лет</span>
            </Title>
            <span>Frontend разработчик</span>
        </div>
    </article>
  )
}