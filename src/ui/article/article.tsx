import React from 'react'
import { IDefaultProps } from '../../types/components'

import Title from '../title/title'
import styles from './style.module.scss'

interface IArticleProps extends IDefaultProps {
    title: string
}

export default function Article({title, children, className = ''}: IArticleProps) {
  return (
    <article className={styles.article + ` ${className}`}>
        <Title level={2}>{title}</Title>
        <div className={styles.text}>{children}</div>
    </article>
  )
}