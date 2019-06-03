import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Process from '../sections/Process';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Skills />
    <Process />
    <Projects />
    <Writing />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
