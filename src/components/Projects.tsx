import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mental Wellness Tracker for Professionals",
      description: "Designed a wellness app prototype, informed by 10+ user interviews on emotional health and motivation. Shaped 5+ features like lock-screen widgets, streak rewards and adaptive check-ins to enhance engagement. Led surveys and persona building to capture user aspirations and built features by combining insights and metrics.",
      technologies: ["User Research", "Prototyping", "Feature Design"],
      highlights: ["10+ user interviews", "5+ features designed", "Engagement-focused", "User-centered design"],
      liveDemo: "Apr 2025"
    },
    {
      title: "Recipe Cup App Teardown | Design & Product Enhancement",
      description: "Conducted survey with 50+ millennials, designed a new onboarding flow, reducing drop-off rates. Created subscription meal plans and categorized menus, improving navigation and increasing retention by 25%. Integrated personalized features, driving user engagement and increasing click-through rates by 40%.",
      technologies: ["User Research", "Product Analysis", "UX Design"],
      highlights: ["50+ user surveys", "25% retention increase", "40% CTR improvement", "Personalization"],
      liveDemo: "Oct 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="subtitle-text text-lg max-w-2xl mx-auto">
            Showcasing product management and design projects with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl hero-text mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="body-text text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="subtitle-text font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="subtitle-text font-medium mb-3">Key Highlights:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="body-text">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Completed {project.liveDemo}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;