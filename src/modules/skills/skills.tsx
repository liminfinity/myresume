import React from 'react'
import Article from '../../ui/article'
import Skill from '../../components/skill'
import { ISkill } from '../../types/entities'
import {v4 as uuid} from 'uuid'


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

export default function Skills() {
  return (
    <Article title='Навыки'>
        {skills.map(skill => <Skill key={skill.id} {...skill}/>)}
    </Article>
  )
}