import React from 'react'
import { IDefaultProps } from '../../types/components'
import styles from './style.module.scss'

interface IAvatarProps extends IDefaultProps {
    src: string,
    alt: string
}

export default function Avatar({src, alt}: IAvatarProps) {
  return (
    <div className={styles.frame}>
      <img className={styles.avatar} src={src} alt={alt} />
    </div>
  )
}