import { Avatar, Title } from '../../ui';
import styles from './profileCard.module.scss';

export const ProfileCard = () => {
  return (
    <article className={styles.card}>
      <Avatar src="./avatar.jpg" alt="Фотография автора. На ней изображен мужчина 20 лет" />
      <div className={styles.content}>
        <Title level={1}>
          Артём Полешко <span className={styles.age}>20 лет</span>
        </Title>
        <Title level={2}>Frontend разработчик</Title>
      </div>
    </article>
  );
};
