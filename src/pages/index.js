import React from 'react'
import Helmet from 'react-helmet'
import { CvDownload } from '../components/CvDownload'
import Icons from '../components/Icons'
import Layout from '../components/layout'



const HomeIndex = () => {
  const siteTitle = 'Ollie Rogers'
  const siteDescription = 'Front End Developer, & Designer, based in Bournemouth, UK'

  return (
    <Layout>

      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Keen coder, people person, rapid learner.</h2>
          </header>
          <p>
            Front End Developer with a strong background in UI design, UX and
            project management.
          </p>
          <Icons />
          <h3>Soft Skills</h3>
          <p>
            Team leadership, Project management, Mentorship, Coaching, Critical thinking.
          </p>
          <h3>Hard Skills</h3>
          <p>
            Javascript, Typescript, React, Redux, Jest, Cypress, REST, GraphQL, Apollo, Gatsby,
            Webpack, Ruby, Rails, Node, Contentful, CSS, (LESS/SASS/stylus),
            Bootstrap, UI design, Sketch, InVision, Adobe CS, Trello, Asana, Jira.
          </p>
          <CvDownload />
          <a href="mailto:ollie.rog@gmail.com" className="button">Get in touch</a>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
