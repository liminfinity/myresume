import React from 'react'
import { IDefaultProps } from '../../types/components'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
interface IIconProps extends IDefaultProps {
    icon: IconDefinition
}

export default function Icon({icon, className = ''}: IIconProps) {
  return (
    <div className={styles.frame + ` ${className}`}>
       <FontAwesomeIcon icon={icon} color='#555555'/>
    </div>
  )
}