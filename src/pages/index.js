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
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';
import ToggleSections from '../components/Toggle';

class IndexPage extends React.Component {
  componentDidMount() {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
  render() {
    return (
      <Layout>
        <Header />
        <Landing />
        <About />
        <ToggleSections />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    );
  }
}

export default IndexPage;
