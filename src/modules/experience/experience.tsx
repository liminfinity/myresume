import React from 'react'
import Article from '../../ui/article'
import { IProject } from '../../types/entities'
import Project from '../../components/project'
import {v4 as uuid} from 'uuid'


const projects: (IProject & {id: string})[] = [
    {
        id: uuid(),
        name: 'Мессенджер с распознаванием речи',
        experience: [
            'Real time взаимодействие клиентской и серверной части',
            'Проектирование логики работы клиентского приложения, используя React',
            'Реализация маршрутизации с помощью React Router',
            'Проектирование и реализация API и модульной архитектуры на Node.js'
        ],
        stack: ['JavaScript', 'React', 'React Router', 'Socket.IO', 'Tailwind', 'Node.js'],
        link: 'https://github.com/liminfinity/mychat'
    },
    {
        id: uuid(),
        name: 'JWT авторизация с возможностью восстановления пароля',
        experience: [
            'Реализация безопасной авторизации в приложении, используя JWT',
            'Создание типизированного клиентского приложения с однонаправленным потоком данных, используя Redux Toolkit',
            'Проектирование и реализация API и модульной архитектуры на Node.js'
        ],
        stack: ['TypeScript', 'React', 'Redux Toolkit', 'Tailwind', 'Node.js'],
        link: 'https://github.com/liminfinity/myauth'
    },
    {
        id: uuid(),
        name: 'Адаптивный сайт по выбранному макету',
        experience: [
            'Создание адаптивности и доступности для вспомогательных технологий (скринридеры)',
            'Использование семантической верстки и БЭМ',
            'Реализация сборки сайта, используя Webpack'
        ],
        stack: ['HTML5', 'CSS3', 'Webpack', 'JavaScript'],
        link: 'https://liminfinity.github.io/eatly'
    }

]

export default function Experience() {
  return (
    <Article title='Мои проекты'>
        {projects.map(project => <Project key={project.id} {...project}/>)}
    </Article>
  )
}