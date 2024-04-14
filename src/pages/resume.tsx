import React from 'react'
import ProfileCard from '../modules/profileCard'
import About from '../modules/about'
import Experience from '../modules/experience'
import Educations from '../modules/educations'
import Contacts from '../modules/contacts'
import Skills from '../modules/skills'



export default function Resume() {
  return (
    <main>
        <section>
            <ProfileCard/>
            <About/>
            <Experience/>
            <Educations/>
        </section>
        <section>
            <Contacts/>
            <Skills/>
        </section>
    </main>
  )
}