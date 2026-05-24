import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Cpu, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & GenAI",
      skills: [
        "Claude",
        "ChatGPT",
        "MCP Protocol",
        "AI Agents",
        "Prompt Engineering",
        "Python",
        "LLM Integration",
        "Gemini",
        "Perplexity",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: [
        "Jira",
        "Confluence",
        "Figma",
        "GitHub",
        "Google Analytics",
        "PowerBI",
        "SQL",
        "Lovable AI",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Product Skills",
      skills: [
        "Product Roadmap",
        "PRDs",
        "Prototyping",
        "Agile & Scrum",
        "User Research",
        "A/B Testing",
        "GTM",
        "Prioritization",
        "Product Strategy"
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: [
        "Stakeholder Management",
        "Cross-functional Leadership",
        "Data-Driven Decision-Making",
        "User Empathy",
        "Communication",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="subtitle-text text-lg max-w-2xl mx-auto">
            Skills that power end-to-end Product Management and user-focused innovation
          </p>
        </div>

        {/* Two columns per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl hero-text">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary text-xl">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted/50 text-body-text hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;