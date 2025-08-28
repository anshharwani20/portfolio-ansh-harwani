import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="max-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
