import React from 'react';

import Layout from 'layouts/index';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';

import projects from 'content/projects';
import statements from 'content/about-me';

const Home = () => {
  return (
    <Layout>
      <React.Fragment>
        <Hero />
        <About statements={statements} />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
      </React.Fragment>
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Sailesh Maharjan | Backend Developer | Portfolio</title>
    <meta
      name="description"
      content="Sailesh Maharjan is a backend developer from Nepal building reliable web applications, APIs, databases, and scalable systems."
    />
    <meta
      name="keywords"
      content="sailesh, sailesh maharjan, sailesh maharjan portfolio, sailesh maharjan nepal, sailesh maharjan backend, backend developer nepal, backend developer, web developer nepal, apis, spring boot, postgresql, portfolio"
    />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta property="og:title" content="Sailesh Maharjan | Backend Developer" />
    <meta property="og:description" content="Backend developer from Nepal building reliable web applications and APIs." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.saileshmaharjan63.com.np/" />
    <meta property="og:site_name" content="Sailesh Maharjan" />
    <link rel="canonical" href="https://www.saileshmaharjan63.com.np/" />
  </>
);
