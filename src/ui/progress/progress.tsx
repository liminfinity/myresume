
import { IDefaultProps } from '../../types/components'
import styles from './style.module.scss'

interface IProgressProps extends IDefaultProps {
    min?: number,
    max?: number,
    value?: number
}

export default function Progress({min = 1, max = 10, value = 5}: IProgressProps) {
  return (
    <meter className={styles.progress} min={min} max={max} value={value}></meter>
  )
}