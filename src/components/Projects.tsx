import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wellnest - Mental Wellness Tracker for Professionals",
      description:
        "WellNest is a mental wellness app prototype designed to address the low adoption of existing wellness apps, which many busy professionals find time-consuming and difficult to maintain. Based on 10+ user interviews, I created four personas and mapped user flows to design a solution centered around 30-second emotional check-ins, streak rewards, and smart nudges. This approach reduced friction, built engaging habits, and aimed to improve long-term retention and emotional well-being.",
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
        "CredPe is a UPI app prototype designed to tackle the problem of delayed credit card bill payments caused by forgetfulness, procrastination, and untimely reminders. Based on 30+ user responses and interviews, I defined four personas, mapped pain points, and prioritized solutions using an impact–effort matrix. The prototype introduced behavior-driven features like smart reminders, consequence framing, and gamified streak rewards, making timely payments effortless and rewarding while aiming to boost trust, engagement, and repayment consistency.",
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
        "Recipe Cup aimed to bridge food lovers with home chefs but struggled with high drop-offs, poor navigation, and low engagement. To address this, I surveyed 30+ users and redesigned the journey by simplifying onboarding with flexible login options, introducing subscription meal plans, categorizing menus by meal times, and adding personalized recommendations and chef profiles. These changes streamlined the experience, cutting onboarding drop-offs, improving retention by 25%, and driving a 40% increase in click-through rates through richer personalization.",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://www.figma.com/deck/rFe5F6aOzcmh2fUoBEOg0g/Recipe-Cup%3A-Product-Teardown?node-id=1-26&t=K9rK1uQxeFkeHWON-1",
      twoButtons: "False",
    },
    {
      title: "Swiggy Product Teardown - Retention Strategy",
      description:
        "Swiggy is India's leading food delivery app, but its retention rate remains limited as most users order only on weekends or special occasions. To address this, I mapped five key friction points in the daily ordering flow and designed three habit-forming MVPs including SnackPass, Smart Work Lunch Program, and Ghar ka Khaana to improve consistency. Using the RICE framework for prioritization and wireframing solutions, these features were projected to boost weekday retention by 30% and improve NPS assumptions by 25%.",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://drive.google.com/file/d/1neUW6M_iqDnoElVx4jTVNdIyIrDHlKxQ/view?usp=sharing",
      twoButtons: "False",
    },
    {
      title: "FitTrack – Product Requirements Document",
      description:
        "FitTrack is a fitness-tracking app PRD created to address declining daily active users (DAU) and reduced session length. I developed a strategy to increase DAU by 20% and boost session length by 15% through personalized content, gamified challenges, community interaction, and in-app rewards. To guide design, I built detailed user personas, mapped user stories, and specified technical requirements such as AI/ML-based recommendations, wearable device integrations, and OAuth 2.0 authentication. The PRD also included design and non-functional requirements for scalability, accessibility, and security. Critical edge cases like dietary restrictions, score normalization in leaderboards, content moderation, and therapeutic workout needs were addressed to ensure inclusivity, fairness, and a seamless user experience.",
      protoType: "Prototype",
      caseStudy: "Case Study",
      caseStudyLink:
        "https://admitted-mongoose-a0a.notion.site/FitTrack-PRD-76848692542049bda685912ce1afb718",
      twoButtons: "False",
    },
    {
      title: "Stockgrow – Product Strategy & Roadmap",
      description:
        "Stockgrow is a fintech platform prototype designed to address low participation in investing, where over 70% of young adults lack formal financial education and are influenced by misleading content creators. Through analysis of user pain points, we designed solutions such as SEBI-verified creator onboarding, AI-driven monitoring to reduce misinformation by 40%, and virtual cash trading that allowed users to practice with zero financial risk. Personalized learning paths and portfolio-based recommendations aimed to increase user retention by 30%. The roadmap spanned from beta testing and referral incentives in the short term to integrating cryptocurrency and launching an in-house brokerage within five years, building a scalable model driven by subscription, referral, and platform fee revenues.",
      protoType: "Prototype",
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
          <p className="subtitle-text text-xl max-w-2xl mx-auto">
            A collection of product thinking - from teardowns to prototypes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-2xl hero-text mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              {/* Make content stretch */}
              <CardContent className="flex flex-col flex-grow">
                <p className="body-text text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Action Buttons (pushed to bottom) */}
                <div className="flex gap-4 pt-4 mt-auto">
                  {project.twoButtons == "True" && (
                    <Button
                      variant="ghost"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() =>
                        window.open(
                          project.protoTypeLink,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <ExternalLink className="mr-2" size={16} />
                      {project.protoType}
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() =>
                      window.open(
                        project.caseStudyLink,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <ExternalLink className="mr-1" size={16} />
                    {project.caseStudy}
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
