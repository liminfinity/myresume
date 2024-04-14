import React from 'react'
import { IDefaultProps } from '../../types/components'

import Title from '../../ui/title'
import Progress from '../../ui/progress'
import { ISkill } from '../../types/entities'

interface ISkillProps extends  ISkill, IDefaultProps {}

export default function Skill({name, level}: ISkillProps) {
  return (
    <article>
        <Title level={4}>{name}</Title>
        <Progress min={1} max={10} value={level}/>
    </article>
  )
}