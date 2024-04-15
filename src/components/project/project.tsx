import React from 'react'
import { IDefaultProps } from '../../types/components'

import Title from '../../ui/title'
import { IProject } from '../../types/entities'
import {v4 as uuid} from 'uuid'
import styles from './style.module.scss'
import Link from '../../ui/link'

interface IProjectProps extends IProject, IDefaultProps {}

export default function Project({name, stack, experience, link}: IProjectProps) {
  return (
    <article className={styles.project}>
        <Title level={3}>{name}</Title>
        <div className={styles.content}>
          <p>{`Стек технологий: ${stack.join(', ')}`}</p>
          <div className={styles.expContainer}>
              <span>Полученный опыт:</span>
              <ol className={styles.experience}>
                  {experience.map(exp => <li key={uuid()}>{exp}</li>)}
              </ol>
          </div>
          <div>
              <span>Сссылка: </span>
              <Link href={link} title='Ссылка на проект'>{link.substring(link.lastIndexOf('/') + 1)}</Link>
          </div>
        </div>
    </article>
  )
}