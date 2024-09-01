import { cn, isSourceLink } from '../../lib';
import { Title, Icon, Link } from '../../ui';
import type { ContactProps } from './contact.types';
import styles from './contact.module.scss';

export const Contact = ({ contact, className, ...props }: ContactProps) => {
  const {icon, source, title} = contact;
  const isContactLink = isSourceLink(source);

  return (
    <article className={cn(styles.card, className)} {...props}>
      <Icon icon={icon} />
      <address className={styles.content}>
        {isContactLink && (
          <Link className={styles.link} href={source}>
            {title}
          </Link>
        )}
        {!isContactLink && (
          <>
            <Title level={4}>{title}</Title>
            <span>{source}</span>
          </>
        )}
      </address>
    </article>
  );
};
