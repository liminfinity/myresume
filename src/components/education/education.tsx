
import { IDefaultProps } from '../../types/components'
import Title from '../../ui/title'
import { IEducation } from '../../types/entities'
import styles from './style.module.scss'

interface IEducationProps extends IEducation, IDefaultProps {}

export default function Education({university, speciality, yearEnding}: IEducationProps) {
  return (
    <article className={styles.education}>
        <Title level={3}>{university}</Title>
        <div className={styles.content}>
          <p>{`Специальность: ${speciality}`}</p>
          <p>{`Год окончания: ${yearEnding}`}</p>
        </div>
    </article>
  )
}