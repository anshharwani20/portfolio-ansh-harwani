import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harwaniansh@gmail.com",
      href: "mailto:harwaniansh@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7987424118",
      href: "tel:+917987424118",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/ansh-harwani",
    },
  ];

  return (
    <section id="contact" className="z-10 mt-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="subtitle-text text-lg max-w-2xl mx-auto">
            Ready to collaborate on product management projects or discuss
            opportunities? Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="p-3 bg-primary/20 rounded-lg text-primary hover:bg-primary/30 transition-colors duration-300"
                      >
                        {info.icon}
                      </a>
                    ) : (
                      <div className="p-3 bg-primary/20 rounded-lg text-primary">
                        {info.icon}
                      </div>
                    )}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-semibold hero-text hover:text-primary transition-colors duration-300 break-words"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <div>
                      <h3 className="font-semibold hero-text mb-2">
                        {info.label}
                      </h3>
                      <span className="body-text break-words">
                        {info.value}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-semibold hero-text mb-4">
                Let's Work Together
              </h3>
              <p className="body-text text-lg mb-6 max-w-2xl mx-auto">
                Open to collaborating on innovative projects and exploring
                opportunities in Product Management, AI, and Business Strategy
                that drive real world impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 glow"
                  onClick={() =>
                    window.open("mailto:harwaniansh@gmail.com", "_blank")
                  }
                >
                  <Mail className="mr-2" size={20} />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
