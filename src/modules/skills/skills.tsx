
import Article from '../../ui/article'
import Skill from '../../components/skill'
import { ISkill } from '../../types/entities'
import {v4 as uuid} from 'uuid'
import { IDefaultProps } from '../../types/components'
import styles from './style.module.scss'

const skills: (ISkill & {id: string})[] = [
    {
        id: uuid(),
        name: "JavaScript",
        level: 9 
    },
    {
        id: uuid(),
        name: "TypeScript",
        level: 8 
    },
    {
        id: uuid(),
        name: "React",
        level: 8 
    },
    {
        id: uuid(),
        name: "Redux",
        level: 7 
    },
    {
        id: uuid(),
        name: "Webpack",
        level: 6 
    },
    {
        id: uuid(),
        name: "Node.js",
        level: 8 
    },
    {
        id: uuid(),
        name: "CSS3",
        level: 9 
    },
    {
        id: uuid(),
        name: "HTML5",
        level: 10 
    },
    {
        id: uuid(),
        name: "Git",
        level: 6 
    },

]

export default function Skills({className}: IDefaultProps) {
  return (
    <Article className={className} title='Навыки'>
        <ul className={styles.skills}>
            {skills.map(skill => {
                return <li>
                            <Skill key={skill.id} {...skill}/>
                        </li>
            })}
        </ul>
        
    </Article>
  )
}