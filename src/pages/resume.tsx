import { About, Projects, ProfileCard, Educations, Skills, Contacts, Experiences } from '../modules';
import styles from './style.module.scss';

export default function Resume() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.main}>
          <section className={styles.card}>
            <ProfileCard />
          </section>
          <section className={styles.about}>
            <About />
            <Experiences/>
            <Projects />
            <Educations />
          </section>
          <section className={styles.details}>
            <Skills className={styles.skills} />
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Contacts />
        </div>
      </footer>
    </>
  );
}
