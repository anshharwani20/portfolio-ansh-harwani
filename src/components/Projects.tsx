import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wellnest - Mental Wellness Tracker for Professionals",
      description:
        "Designed a mental wellness app based on 10+ user interviews, featuring 30-second emotional check-ins, streak rewards, and smart nudges to reduce friction and boost long-term retention for busy professionals.",
      image: "/lovable-uploads/wellnest.png",
      protoType: "Prototype",
      protoTypeLink: "https://indian-wellbeing-hub.lovable.app/welcome",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://www.canva.com/design/DAGuMOy1lVs/cCjCNphb2ymp_ec1hxAaFQ/edit",
      twoButtons: "True",
    },
    {
      title: "CredPe - Behavioral Nudging in UPI App",
      description:
        "Built a UPI prototype addressing delayed credit card payments through behavior-driven features—smart reminders, consequence framing, and gamified streaks—based on 30+ user responses to boost timely repayment.",
      image: "/lovable-uploads/credpe.png",
      protoType: "Prototype",
      protoTypeLink: "https://credpe-pay-smartly-now.lovable.app/",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://www.canva.com/design/DAGwu07c3t4/fVx_Dyn1aFMU5xQROKBEcg/edit?utm_content=DAGwu07c3t4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      twoButtons: "True",
    },
    {
      title: "Recipe Cup App Teardown - Design & Product Enhancement",
      description:
        "Surveyed 30+ users to redesign Recipe Cup's journey—simplified onboarding, subscription meal plans, and personalized recommendations—cutting drop-offs and boosting click-through rates by 40%.",
      image: "/lovable-uploads/recipecup.png",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://www.figma.com/deck/rFe5F6aOzcmh2fUoBEOg0g/Recipe-Cup%3A-Product-Teardown?node-id=1-26&t=K9rK1uQxeFkeHWON-1",
      twoButtons: "False",
    },
    {
      title: "Swiggy Product Teardown - Retention Strategy",
      description:
        "Mapped 5 friction points in Swiggy's daily ordering flow and designed 3 habit-forming MVPs (SnackPass, Smart Work Lunch, Ghar ka Khaana) projected to boost weekday retention by 30%.",
      image: "/lovable-uploads/swiggy.png",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://drive.google.com/file/d/1neUW6M_iqDnoElVx4jTVNdIyIrDHlKxQ/view?usp=sharing",
      twoButtons: "False",
    },
    {
      title: "FitTrack – Product Requirements Document",
      description:
        "Wrote a comprehensive PRD for a fitness app targeting 20% DAU growth via AI recommendations, gamified challenges, wearable integrations, and community features, covering edge cases for inclusivity and fairness.",
      image: "/lovable-uploads/fittrack.png",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://admitted-mongoose-a0a.notion.site/FitTrack-PRD-76848692542049bda685912ce1afb718",
      twoButtons: "False",
    },
    {
      title: "Stockgrow – Product Strategy & Roadmap",
      description:
        "Designed a fintech platform with SEBI-verified creators, AI misinformation monitoring, and virtual cash trading—targeting 30% user retention growth with a 5-year roadmap including crypto and in-house brokerage.",
      image: "/lovable-uploads/stockgrow.png",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://drive.google.com/file/d/1AyQIlYbFvBEBU8p69pJsJRcGOswOoHG7/view",
      twoButtons: "False",
    },
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Product Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="subtitle-text text-lg max-w-2xl mx-auto">
            Showcasing product management and design projects with real-world
            impact
          </p>
        </div>

        <div className="space-y-12 w-full max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row overflow-hidden w-full ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Left/Right Content */}
                <div className="flex flex-col justify-between p-6 lg:p-8 md:w-1/2">
                  <div>
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-2xl font-light hero-text leading-snug">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="body-text text-sm lg:text-base leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    {project.twoButtons === "True" && (
                      <Button
                        variant="ghost"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-9 text-sm"
                        onClick={() =>
                          window.open(
                            project.protoTypeLink,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        <ExternalLink className="mr-2" size={14} />
                        {project.protoType}
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-9 text-sm"
                      onClick={() =>
                        window.open(
                          project.caseStudyLink,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <ExternalLink className="mr-1" size={14} />
                      {project.caseStudy}
                    </Button>
                  </div>
                </div>

                {/* Right/Left Image Container */}
                <div className={`relative w-full md:w-1/2 min-h-[220px] md:min-h-0 overflow-hidden border-t md:border-t-0 border-border flex ${
                  isEven ? "md:border-l" : "md:border-r"
                }`}>
                  {project.images ? (
                    project.images.map((imgUrl, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={imgUrl}
                        alt={`${project.title} screenshot ${imgIdx + 1}`}
                        className="w-1/2 h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    ))
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
