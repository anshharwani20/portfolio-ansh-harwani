import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-light hero-text leading-tight">
              Ansh
              <br />
              <span className="font-normal">Harwani</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-primary font-medium">
                Data Science | AI | Machine Learning
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 glow"
                onClick={() => window.open('https://github.com/Tanmay-Harwani', '_blank')}
              >
                <Eye className="mr-2" size={20} />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://drive.google.com/file/d/1ETWYklYI7XJC_tow69r9053lkviqcJUS/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="mailto:tanmay22@bu.edu" 
                className="flex items-center gap-2 body-text hover:text-primary transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/tanmay-harwani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 body-text hover:text-primary transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                LinkedIn
              </a>
              <a 
                href="https://github.com/Tanmay-Harwani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 body-text hover:text-primary transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-glow-pulse">
                <img 
                  src="/lovable-uploads/7e117324-bb70-4456-8130-465bd6991b03.png"
                  alt="Tanmay Nihal Harwani - Data Science Consultant"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;