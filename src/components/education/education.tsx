import React from 'react'
import { IDefaultProps } from '../../types/components'
import Title from '../../ui/title'
import { IEducation } from '../../types/entities'


interface IEducationProps extends IEducation, IDefaultProps {}

export default function Education({university, speciality, yearEnding}: IEducationProps) {
  return (
    <article>
        <Title level={3}>{university}</Title>
        <p>{`Специальность: ${speciality}`}</p>
        <p>{`Год окончания: ${yearEnding}`}</p>
    </article>
  )
}