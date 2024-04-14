import React from 'react'
import { IDefaultProps } from '../../types/components'

import Title from '../../ui/title'
import { IProject } from '../../types/entities'
import {v4 as uuid} from 'uuid'

interface IProjectProps extends IProject, IDefaultProps {}

export default function Project({name, stack, experience, link}: IProjectProps) {
  return (
    <article>
        <Title level={3}>{name}</Title>
        <p>{`Стек технологий: ${stack.join(', ')}`}</p>
        <div>
            <span>Полученный опыт:</span>
            <ul>
                {experience.map(exp => <li key={uuid()}>{exp}</li>)}
            </ul>
        </div>
        <div>
            <span>Сссылка: </span>
            <a href={link} title='Ссылка на проект'></a>
        </div>
    </article>
  )
}