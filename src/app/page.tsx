import Info from "@/components/info/info";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects"
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/contact";
import ThemeSwitch from "@/components/theme-switch/theme-switch";

export default function Home() {
  return (
      <main className="">
      
      <Info />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <ThemeSwitch />
      </main>
      
  );
}
