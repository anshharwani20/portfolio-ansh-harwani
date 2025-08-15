import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chore Assistant",
      description: "Engineered an AI assistant using LangChain and Gemini to process chore schedules from PDFs and answer user queries via RAG. Deployed a Streamlit Cloud app with date-based task querying and dynamic schedule responses. Integrated contextual date prompts to improve response relevance and user experience. Upgrading to a Crew AI based multi agent system with autonomous agents for task assignment, conflict resolution, and reminders.",
      technologies: ["LangChain", "Gemini", "RAG", "CrewAI", "Streamlit"],
      highlights: ["PDF processing", "Dynamic schedules", "Multi-agent system", "Task automation"],
      liveDemo: "https://ai-chore-assistant.streamlit.app/"
    },
    {
      title: "Genre Prediction from Lyrics",
      description: "Built a genre classification model using TF-IDF and Naive Bayes, achieving 78% accuracy across 10 music genres. Applied NLP techniques including lemmatization and stopword removal to improve prediction performance. Deployed a real time Streamlit app to showcase genre predictions based on input lyrics.",
      technologies: ["NLP", "Naive Bayes", "Streamlit"],
      highlights: ["78% accuracy", "Real-time predictions", "NLP preprocessing", "Interactive app"],
      liveDemo: "https://genre-prediction-smart-tool.streamlit.app/"
    },
    {
      title: "Crypto News Mood Predictor",
      description: "Created a sentiment analysis tool using FinBERT, classifying 1000+ crypto news articles into bullish/neutral/bearish. Built real time ingestion via various News APIs and deployed an interactive Streamlit dashboard for sentiment visualization. Tuned model pipeline to improve prediction performance and reduce latency, enabling a smoother user experience.",
      technologies: ["Transformers", "Sentiment Analysis", "Streamlit"],
      highlights: ["1000+ articles", "Real-time analysis", "Sentiment visualization", "Performance optimization"],
      liveDemo: "https://crypto-news-sentiment-analysis-tool.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            Academic Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="subtitle-text text-lg max-w-2xl mx-auto">
            Showcasing data science and machine learning projects with real-world applications
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
                    onClick={() => {
                      const githubLinks = {
                        "AI Chore Assistant": "https://github.com/Tanmay-Harwani/AI-Chore-Assistant",
                        "Genre Prediction from Lyrics": "https://github.com/Tanmay-Harwani/Genre-Prediction-Smart-Tool",
                        "Crypto News Mood Predictor": "https://github.com/Tanmay-Harwani/Crypto-News-Sentiment-Analysis-Tool"
                      };
                      window.open(githubLinks[project.title], '_blank');
                    }}
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
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