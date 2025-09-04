import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold hero-text">Ansh Harwani</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.href.includes("#") ? (
                <HashLink
                  key={item.label}
                  smooth
                  to={item.href}
                  className="body-text hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </HashLink>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="body-text hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/ansh-harwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            {/* <a
              href="https://github.com/ansh-Harwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a> */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=harwaniansh@gmail.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) =>
                item.href.includes("#") ? (
                  <HashLink
                    key={item.label}
                    smooth
                    to={item.href}
                    className="body-text hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </HashLink>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="body-text hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://linkedin.com/in/ansh-harwani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ansh-Harwani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:ansh22@bu.edu"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
