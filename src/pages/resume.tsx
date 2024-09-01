import {
  About,
  Projects,
  ProfileCard,
  Educations,
  Skills,
  Contacts,
  Experiences,
  Languages,
} from '../modules';
import styles from './style.module.scss';

export default function Resume() {
  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <section className={styles.card}>
          <ProfileCard />
        </section>
        <section className={styles.about}>
          <Contacts />
          <Experiences />
          <Projects />
          <Educations />
          <About />
        </section>
        <section className={styles.details}>
          <Skills className={styles.skills} />
          <Languages className={styles.languages} />
        </section>
      </div>
    </main>
  );
}
