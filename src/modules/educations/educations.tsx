
import Article from '../../ui/article'
import { IEducation } from '../../types/entities'
import Education from '../../components/education'
import {v4 as uuid} from 'uuid'


const educations: (IEducation & {id: string})[] = [
    {
        id: uuid(),
        university: 'Сибирский федеральный университет, Институт космических и информационных технологий (СФУ, ИКИТ)',
        speciality: 'Прикладная информатика (бакалавриат)',
        yearEnding: 2026
    }

]

export default function Educations() {
  return (
    <Article title='Образование'>
        <ul>
          {educations.map(education => {
            return <li>
                    <Education key={education.id} {...education}/>
                  </li>
          })}
        </ul>
    </Article>
  )
}