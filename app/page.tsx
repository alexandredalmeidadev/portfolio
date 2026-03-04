import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Status } from "./_components/Status";
import { Services } from "./_components/Services";
import { Projects } from "./_components/Projects";

export default function Home() {
  return (
      <main>
        <Header />
        <Hero />
        <Projects />
        <Services />
        <Skills />  
        <Status />
        <Contact/>
        <Footer/>
      </main>
  );
}
