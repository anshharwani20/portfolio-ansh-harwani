import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import MyJourney from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const About = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <MyJourney />
        <Education />
        <Skills />
      </main>
    </div>
  );
};

export default About;
