import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const experience = [
    {
      title: "Data Science Consultant",
      company: "Reliance Retail (Zivame)",
      period: "May 2023 – Dec 2023",
      achievements: [
        "Proposed and integrated AWS Personalize recommenders to enhance engagement and boost sales through data-driven insights",
        "Cleaned and transformed 800,000+ rows from Redshift and Amazon S3, resolving data quality issues for relevant personalization",
        "Streamlined batch pipelines with Airflow and deployed four recommenders models, increasing recommendation precision",
        "Delivered strategies to stakeholders, aligning ML outputs with business goals and influencing product roadmap decisions",
        "Conducted A/B tests to validate recommender performance, achieving statistical significance with p<0.05 across user segments"
      ]
    },
    {
      title: "Data and Planning Analyst Intern",
      company: "Reliance Retail (Zivame)",
      period: "Feb 2023 – Apr 2023",
      achievements: [
        "Designed, developed, and maintained user friendly reports and dashboards to support key decision making through actionable insights",
        "Consolidated multi-source datasets and pre-processed them into analysis-ready formats to enable faster and reliable reporting",
        "Automated recurring sales reports in R, cutting manual prep time by 65% and streamlining daily workflows for the planning team"
      ]
    },
    {
      title: "Digital Relationship Manager",
      company: "Kristal.AI",
      period: "Oct 2021 – Mar 2022",
      achievements: [
        "Fostered & maintained relationships with 20+ clients, delivering personalized support and resolving queries ensuring high NPS",
        "Proposed and implemented Macros for repetitive queries, reducing response time by 30% and streamlining client service processes",
        "Automated client communication pipelines, ensuring timely touchpoints that improved engagement and enhanced retention"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Applied Data Analytics",
      school: "Boston University, United States",
      period: "Dec 2025",
      gpa: "3.9",
      courses: [
        "Data Science with Python",
        "Foundations of Machine Learning",
        "Web mining & Graph Analytics",
        "Information structures with Python",
        "Analysis of Algorithms",
        "Foundations of Analytics & Data Visualization",
        "Data Structures & Algorithms"
      ]
    },
    {
      degree: "Bachelor of Commerce (Finance and Investments)",
      school: "Christ University, India",
      period: "May 2021",
      gpa: "3.73",
      courses: [
        "Introduction to Database Management Systems",
        "Data Analytics using R programming",
        "Business Mathematics"
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
                  Hi, I am Tanmay Harwani, a Master's student in Applied Data Analytics at Boston University. My journey into data science began with a fascination for how people interact with products and how data can drive smarter, more impactful decisions.
                </p>
                <p>
                  Previously, I worked as a Data Science Consultant at Reliance Retail, where I built recommenders, end to end analytics and machine learning solutions that streamlined reporting, enhanced decision making, and supported business growth. My projects have included interactive dashboards, customer behavior analysis, and AI powered tools, all focused on turning insights into measurable results.
                </p>
                <p>
                  I am passionate about roles at the intersection of product growth and data science, where I can combine technical skills in Python, SQL, and analytics with business strategy to help products grow, engage, and retain users.
                </p>
                <p>
                  Outside of work, I enjoy exploring new AI tools, experimenting with product analytics frameworks, and building side projects that connect technology with real world outcomes. I am also learning speed cubing, improving my typing speed (currently 88 wpm), staying active through fitness, and playing table tennis.
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