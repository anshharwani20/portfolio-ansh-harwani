import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-10 relative z-10 mt-40">
      <div className="container mx-auto px-6">
        {/* About Me */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light hero-text mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <Card className="bg-card/50 backdrop-blur-sm border-border card-shadow">
            <CardContent className="p-8">
              <div className="body-text leading-relaxed space-y-4 text-justify">
                <p>
                  I am Ansh Harwani, a Product enthusiast pursuing an Integrated
                  BTech in Information Technology and MBA at IIITM Gwalior. My
                  journey in Product Management began with a curiosity for how
                  technology, design, and business come together to solve
                  real-world problems. To sharpen my product sense, I explored
                  product teardowns, built side projects, and wrote PRDs, which
                  gave me a strong foundation before entering the professional
                  space.
                </p>
                <p>
                  This foundation gave me the confidence to step into
                  professional roles. I have Product Management internship
                  experience at OneAssist and Nani's Bilona Ghee, where I
                  contributed to innovative digital products in dynamic,
                  fast-paced environments. Working within complete Agile
                  systems, I gained hands-on exposure to end-to-end product
                  development, from discovery and research to prototyping,
                  roadmapping, and iteration.
                </p>
                <p>
                  Over time, I've developed a strong focus at the intersection
                  of Product, strategy, and data. I enjoy applying user empathy,
                  market research, and prioritization frameworks to design
                  scalable solutions that deliver outcomes while keeping user
                  needs at the center.
                </p>
                <p>
                  Beyond work, I stay active through basketball and fitness, and
                  I enjoy exploring emerging tools, frameworks, and AI-driven
                  solutions that connect technology with everyday life.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
