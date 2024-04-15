
import ProfileCard from '../modules/profileCard'
import About from '../modules/about'
import Experience from '../modules/experience'
import Educations from '../modules/educations'
import Contacts from '../modules/contacts'
import Skills from '../modules/skills'
import styles from './style.module.scss'


export default function Resume() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.main}>
          <section className={styles.card}>
              <ProfileCard/>
            </section>
            <section className={styles.about}>
                <About/>
                <Experience/>
                <Educations/>
            </section>
            <section className={styles.details}>
              <Skills className={styles.skills}/>
            </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Contacts/>
        </div>
      </footer>
    </>
  )
}