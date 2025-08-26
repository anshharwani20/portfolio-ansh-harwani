import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Education = () => {
    const education = [
    {
      degree: "Integrated B.Tech in Information Technology and MBA",
      school: "Indian Institute of Information Technology and Management, Gwalior",
      period: "May 2026",
      gpa: "7.60",
      courses: [
        "Product Management",
        "Business Analytics", 
        "Artificial Intelligence",
        "DBMS",
        "Market Research",
        "Cloud Computing",
        "Project Management ",
        "Business Communication"
      ]
    }
  ];
  const education1 = [
    {
      degree: "Class XII - CBSE",
      school: "Gyan Ganga International Academy, Bhopal",
      period: "March 2020",
      gpa: "91%",
      degree1: "Class X - CBSE",
      school1: "Sagar Public School, Bhopal",
      period1: "March 2018",
      gpa1: "92%",
    }
  ];

  return (
    <section id="about" className="py-10 relative z-10">
      <div className="container mx-auto px-6">
        {/* Education */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold hero-text">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <div className="flex justify-between items-center mt-5">
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
          {education1.map((edu, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border card-shadow hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-10">
                  <h3 className="text-xl font-semibold hero-text">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <div className="flex justify-between items-center mt-5">
                    <Badge variant="outline" className="text-primary border-primary">
                      {edu.period}
                    </Badge>
                    <span className="body-text">Per: <span className="text-primary font-semibold">{edu.gpa}</span></span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold hero-text">{edu.degree1}</h3>
                  <p className="text-primary font-medium">{edu.school1}</p>
                  <div className="flex justify-between items-center mt-5">
                    <Badge variant="outline" className="text-primary border-primary">
                      {edu.period1}
                    </Badge>
                    <span className="body-text">Per: <span className="text-primary font-semibold">{edu.gpa1}</span></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;