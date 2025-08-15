import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, BarChart, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "Advanced Excel (VLOOKUP, Pivot Table)"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Libraries & Frameworks",
      skills: ["Pandas", "Numpy", "scikit-learn", "TensorFlow", "LangChain", "CrewAI", "Matplotlib", "Seaborn", "Pytorch", "Xgboost", "Spacy"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Airflow", "Git", "Jupyter", "Cursor", "REST APIs"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Databases",
      skills: ["AWS (S3, Personalize)", "Snowflake", "Redshift", "MongoDB", "Athena"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data Science Skills",
      skills: ["Supervised, Unsupervised ML", "Feature Selection", "Regularization", "Prompt Engineering", "Embeddings"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Statistical Methods",
      skills: ["A/B Testing", "Hypothesis Testing", "Statistical Significance", "Experimental Design", "Causal Inference"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Visualization",
      skills: ["Tableau", "Power BI", "Google Data Studio", "Excel", "PowerPoint", "Streamlit"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Collaboration", "Adaptability", "Problem Solving"]
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
            A comprehensive toolkit for data science, machine learning, and business analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg hero-text">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
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