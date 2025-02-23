import { BsArrowUpCircleFill } from "react-icons/bs";

import Achievements from '~/components/Achievements'
import Contact from '~/components/Contact'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
import Skills from '~/components/Skills'

const HomePage = () => {
  return (
    <Layout>
      <section id="hero" className="mb-24">
        <Hero />
      </section>

      <section id="skills" className="mb-24">
        <Skills />
      </section>

      <section id="achievements" className="mb-24">
        <Achievements />
      </section>

      <section id="contact" className="mb-24">
        <Contact />
      </section>

      <a href="#hero" className="fixed right-6 bottom-6 text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
        <BsArrowUpCircleFill className="w-8 h-8" />
      </a>
    </Layout>
  )
}

export default HomePage;