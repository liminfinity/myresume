import { cn, isContactLink } from '../../lib';
import { Title, Icon, Link } from '../../ui';
import type { ContactProps } from './contact.types';
import styles from './style.module.scss';

export const Contact = ({ title, contact, icon, className, ...props }: ContactProps) => {
  const contactLink = isContactLink(contact);

  return (
    <article className={cn(styles.card, className)} {...props}>
      <Icon icon={icon} />
      <address className={styles.content}>
        {contactLink && (
          <Link className={styles.link} href={contact}>
            {title}
          </Link>
        )}
        {!contactLink && (
          <>
            <Title level={4}>{title}</Title>
            <span>{contact}</span>
          </>
        )}
      </address>
    </article>
  );
};
