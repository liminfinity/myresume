import { IDefaultProps } from '../../types/components'
import Title from '../../ui/title'
import Icon from '../../ui/icon'
import { IContact } from '../../types/entities'
import styles from './style.module.scss'
import Link from '../../ui/link/link'
interface IContactProps extends IContact, IDefaultProps {}

export default function Contact({title, contact, icon}: IContactProps) {
  return (
    <article className={styles.card}>
        <Icon icon={icon}/>
        <address className={styles.content}>
            {/^https?:\/\/.+/.test(contact) ? <Link className={styles.link} href={contact}>{title}</Link> : (
              <>
                <Title level={4}>{title}</Title>
                <span>{contact}</span>
              </>
            )}
        </address>
    </article>
  )
}