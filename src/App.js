import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Python from './pages/Python';
import Certificate from './pages/Certificate';

export default function App() {
  const [isNavbar, setIsNavbar] = useState("/");

  function render(value) {
    if (value === "/") {
      return <Home />;
    } else if (value === "about-me") {
      return <AboutMe />;
    } else if (value === "projects") {
      return <Projects/>;
    } else if (value === "certificate") {
      return <Certificate />;
    } else if (value === "contact-me") {
      return <ContactMe />;
    } else if (value === "python") {
      return <Python />;
    }
  }

  return (
      <Layout setIsNavbar={setIsNavbar} isNavbar={isNavbar}>
        <AnimatePresence>{render(isNavbar)}</AnimatePresence>
      </Layout>
  );
}