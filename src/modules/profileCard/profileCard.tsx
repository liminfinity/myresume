import React from 'react'
import Title from '../../ui/title'
import Avatar from '../../ui/avatar'
import styles from './style.module.scss'
export default function ProfileCard() {
  return (
    <article className={styles.card}>
        <Avatar src="../../public/avatar.jpg" alt="Моя фотография. На ней изображен мужчина 20 лет"/>
        <div className={styles.content}>
            <Title level={1}>
                Артём Полешко <span className={styles.age}>20 лет</span>
            </Title>
            <Title level={4}>Frontend разработчик</Title>
        </div>
    </article>
  )
}