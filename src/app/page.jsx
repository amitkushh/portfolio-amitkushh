import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Drawer from "../components/Common/Drawer";

export default function Home() {
  return (
    <>
      <Drawer />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
