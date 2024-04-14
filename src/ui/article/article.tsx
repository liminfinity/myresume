import React from 'react'
import { IDefaultProps } from '../../types/components'

import Title from '../title/title'

interface IArticleProps extends IDefaultProps {
    title: string
}

export default function Article({title, children}: IArticleProps) {
  return (
    <article>
        <Title level={2}>{title}</Title>
        <div>{children}</div>
    </article>
  )
}