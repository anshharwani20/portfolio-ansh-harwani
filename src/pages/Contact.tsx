import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import ContactMe from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <ContactMe />
      </main>
    </div>
  );
};

export default Contact;
