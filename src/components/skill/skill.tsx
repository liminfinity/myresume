
import { IDefaultProps } from '../../types/components'

import Title from '../../ui/title'
import Progress from '../../ui/progress'
import { ISkill } from '../../types/entities'
import {formatToCSSVar} from './lib/format'
import styles from './style.module.scss'
interface ISkillProps extends  ISkill, IDefaultProps {}

export default function Skill({name, level}: ISkillProps) {
  return (
    <article className={styles[formatToCSSVar(name)]}>
        <Title level={4}>{name}</Title>
        <Progress min={1} max={10} value={level}/>
    </article>
  )
}