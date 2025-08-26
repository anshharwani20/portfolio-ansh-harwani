import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, BarChart, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    // {
    //   icon: <Code className="w-6 h-6" />,
    //   title: "Programming Languages",
    //   skills: ["SQL", "Python", "C/C++"]
    // },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Product Skills",
      skills: [
        "Metrics & Prioritization",
        "Prototyping",
        "Roadmapping",
        "Agile & Scrum",
        "User Research",
        "Wireframing",
        "User Experience (UX)",
        "A/B Testing",
        "Product Teardowns",
        "PRD Writing",
        "Market Research Analysis",
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools and Platforms",
      skills: [
        "Jira",
        "Figma",
        "Canva",
        "Google Analytics",
        "Microsoft Excel",
        "PowerBI",
        "Amazon QuickSight",
        "Lovable AI",
        "Notion",
        "SQL",
        "Slack",
        "Confluence",
        "Python",
        "Mixpanel"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: [
        "Stakeholder Management",
        "Data-Driven Decision Making",
        "User Empathy",
        "Problem Solving",
        "Leadership",
        "Cross-Functional Collaboration",
        "Critical Thinking",
        "Strategic Thinking",
        "Conflict Resolution"
      ]
    }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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