import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  const experience = [
    {
      title: "Product Management Intern",
      company: "OneAssist Consumer Solutions",
      certificate: "Certificate",
      period: "May 2025 - July 2025",
      companyUrl: "https://oneassist.in/",
      url: "https://drive.google.com/file/d/1K5vfIp20_sMgkomQr9xnAa0kQfq0Rt1l/view",
      achievements: [
        "Analyzed 5+ months of chatbot interaction data to identify failure points and reduce manual transfer triggers",
        "Improved CSAT by 10% and lowered manual transfer rate by 4% within a 10-week sprint cycle",
        "Proposed scalable GenAI middleware solutions projected to resolve 75% of escalation triggers",
        "Benchmarked 10+ competitor chatbots to uncover best practices in LLM, multilingual, and monetization design",
        "Worked in a full Agile/Scrum setup, writing user stories, leading sprints, and validating deliverables with PAT",
      ],
    },
    {
      title: "Product Management Intern",
      company: "Nani's Bilona Ghee",
      certificate: "Certificate",
      period: "Dec 2024 - Mar 2025",
      companyUrl: "https://www.nanibilonaghee.com/",
      url: "https://drive.google.com/file/d/1Qv38PlllBIrcSYvH58qUZaZxAMERSf5O/view",
      achievements: [
        "Authored detailed PRDs for chatbot features, streamlining developer handoffs and reducing implementation time by 45%",
        "Conducted research with 200+ customers, optimizing chatbot flows and boosting order completion rates by 25%",
        "Analyzed purchase behaviors and launched a subscription model, increasing retention and repeat purchases by 25%",
        "Performed competitive analysis on 10+ brands, identifying differentiators to strengthen product positioning",
        "Managed company social handles to drive engagement, promote product launches, and strengthen digital presence",
      ],
    },
  ];
  return (
    <section id="about" className="py-20 relative z-10 bg-dark/95">
      <div className="container mx-auto px-6">
        {/* Professional Experience */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        {/* Experience */}
        <div className="space-y-8 mb-20">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold hero-text">
                      {exp.title}
                    </h3>
                    <p>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        className="text-primary text-lg font-medium"
                      >
                        {exp.company} |
                      </a>
                      {/* <a href= " " className="text-primary text-lg font-medium">{exp.certificate} <ExternalLink className="mr-2" size={16} /></a> */}
                      <Button
                        variant="default"
                        className="text-primary text-lg"
                        onClick={() => window.open(exp.url, "_blank")}
                      >
                        Certificate
                        <ExternalLink className="mr-2" size={10} />
                      </Button>
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-primary text-sm border-primary w-fit mt-2 lg:mt-0"
                  >
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-lg flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
