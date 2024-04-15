import React from 'react'
import { IDefaultProps } from '../../types/components'
import styles from './style.module.scss'

interface ILinkProps extends IDefaultProps {
    href: string,
    title?: string

}

export default function Link({href, children, className = '', title = ''}: ILinkProps) {
  return (
    <a className={styles.link + ` ${className}`} title={title} href={href}>{children}</a>
  )
}