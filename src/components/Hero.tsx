// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center z-10 pt-20 mt-10"
    >
      <div className="relative mx-auto w-full">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-center px-3">
          
          {/* ✨ Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-center -mt-8" // ⬅ shifts heading up
          >
            <h1 className="text-5xl lg:text-7xl hero-text leading-tight pb-10">
              <span className="text-white">Hey, I'm</span>{" "}
              <span
                className="font-bold bg-gradient-to-r from-primary to-purple-500 via-red-400 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                ANSH HARWANI
              </span>
            </h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="space-y-5"
            >
              {/* first two lines grouped tighter */}
              <div className="space-y-1">
                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-xl lg:text-4xl text-white font-medium"
                  >
                    I mix{" "}
                    <span className="text-purple-300 italic">
                      tech
                    </span>{" "}
                    with business, blend{" "}
                    <span className="text-purple-300 italic">
                      design
                    </span>{" "}
                    with empathy,
                  </motion.p>
                  <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-xl lg:text-4xl text-white font-medium"
                  >
                    and build{" "}
                    <span className="text-purple-300 italic">
                      products
                    </span>{" "}
                    that solve real-world problems.
                  </motion.p>
                </div>


              {/* third line pushed lower */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-xl lg:text-3xl font-medium pt-10 bg-gradient-to-r from-primary to-purple-500 via-red-400 bg-clip-text text-transparent bg-[length:200%_200%] italic"
              >
                I chase curiosity, shape ideas with intent, and bring them to life as products.
              </motion.p>
            </motion.div>

            {/* 🎯 CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-10 pt-10 justify-center mx-5">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-120 hover:shadow-lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/15MWeaM5j7zMz7_bk-X2SMWX06Ukty78W/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <HashLink smooth to="/#projects">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-md px-8 py-3 rounded-lg transition-all duration-300 hover:scale-130 hover:shadow-lg hover:shadow-primary/40"
                >
                  <Eye className="mr-2" size={20} />
                  View Projects
                </Button>
              </HashLink>
            </div>

            {/* 📬 Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center pt-2">
              {[
                { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=harwaniansh@gmail.com" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ansh-harwani" },
                { label: "Contact", href: "tel:+917987424118" },
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 font-medium text-md hover:text-primary transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 🖼️ Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-center relative pb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* 🌈 Gradient Glow Behind */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary via-purple-500 to-red-400 blur-lg opacity-30"></div>

              {/* 👤 Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/lovable-uploads/dea842d3-e21e-454f-9372-768f702b7a64.png"
                  alt="Ansh Harwani - Product Management Professional"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
