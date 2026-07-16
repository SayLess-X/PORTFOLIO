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
    <title>Sailesh Maharjan | Portfolio</title>
    <meta
      name="description"
      content="Sailesh Maharjan is a backend-focused developer building reliable web applications, APIs, and scalable solutions."
    />
    <meta name="keywords" content="Sailesh Maharjan, backend developer, web developer, APIs, Spring Boot, PostgreSQL, portfolio" />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <link rel="canonical" href="https://saileshmaharjan63.com.np/" />
  </>
);
