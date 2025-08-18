import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const experience = [
    {
      title: "Product Management Intern",
      company: "OneAssist Consumer Solutions | Certificate",
      period: "May 2025 - July 2025",
      achievements: [
        "Analyzed 5+ months of chatbot data across various categories to identify manual transfer causes",
        "Enhanced overall CSAT by 10% and successfully reduced manual transfer rate by 5% within 10 weeks",
        "Proposed scalable GenAI solutions expected to resolve 75% of current chatbot failure and escalation triggers",
        "Evaluated competitor chatbots using the BUC analysis framework to explore advanced strategies for revenue generation"
      ]
    },
    {
      title: "Product Management Intern",
      company: "Nani's Bilona Ghee | Certificate",
      period: "Dec 2024 - Mar 2025",
      achievements: [
        "Authored PRDs for chatbot features, ensuring smooth developer handoffs, reducing implementation time by 45%",
        "Conducted research with 200+ customers, optimizing chatbot user completion by 25%",
        "Analyzed purchase patterns, launched a personalized subscription model, improving user engagement and increasing retention by 25%",
        "Performed competitive analysis on 10+ brands, identifying key differentiators to enhance product positioning"
      ]
    }
  ];

  const education = [
    {
      degree: "Integrated B.Tech in Information Technology and MBA",
      school: "Indian Institute of Information Technology and Management, Gwalior",
      period: "May 2026",
      gpa: "Madhya Pradesh, India",
      courses: [
        "Product Management",
        "Business Strategy", 
        "Information Technology",
        "Data Analytics",
        "Agile Methodologies",
        "Market Research"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* About Me */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card/50 backdrop-blur-sm border-border card-shadow">
            <CardContent className="p-8">
              <div className="body-text leading-relaxed space-y-4 text-justify">
                <p>
                  I am Ansh Harwani, a Product enthusiast pursuing an Integrated BTech in Information Technology and MBA at IIITM Gwalior. My journey in Product Management began with a curiosity for how technology, design, and business come together to solve real-world problems. To sharpen my product sense, I explored product teardowns, built side projects, and wrote PRDs, which gave me a strong foundation before entering the professional space.
                </p>
                <p>
                  This foundation gave me the confidence to step into professional roles. I have Product Management internship experience at OneAssist and Nani's Bilona Ghee, where I contributed to digital products in dynamic, fast-paced environments. Working within complete Agile systems, I gained exposure to end-to-end product development, from discovery and research to prototyping, roadmapping, and iteration.
                </p>
                <p>
                  Over time, I've developed a strong focus at the intersection of Product, strategy, and data. I enjoy applying user empathy, market research, and prioritization frameworks to design scalable solutions that deliver business outcomes while keeping user needs at the center.
                </p>
                <p>
                  Beyond work, I stay active through basketball and fitness, and I enjoy exploring emerging tools, frameworks, and AI-driven solutions that connect technology with everyday life.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

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
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold hero-text">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary w-fit mt-2 lg:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="body-text flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold hero-text">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <div className="flex justify-between items-center mt-1">
                    <Badge variant="outline" className="text-primary border-primary">
                      {edu.period}
                    </Badge>
                    <span className="body-text">GPA: <span className="text-primary font-semibold">{edu.gpa}</span></span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="subtitle-text font-medium mb-3">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;