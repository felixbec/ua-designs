import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Process from '../sections/Process';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Testimonials from '../sections/Testimonials';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Parallax from '../sections/Parallax';
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Skills />
    <Testimonials />
    <Process />
    <Projects />
    <Writing />
    <Contact />
    <Parallax />
    <Footer />
  </Layout>
);

export default IndexPage;
