import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "WordLadder.co",
    description: "A daily word game with real-time validation and social sharing features. Features an intuitive UI with dynamic letter highlighting and animations.",
    technologies: ["Javascript", "HTML", "CSS", "Netlify", "Supabase"],
    image: "./public/wordladder.png",
    demoUrl: "https://wordladder.co",
  },
  {
    title: "WordSpin",
    description: "A word game revolved around rotating blocks of letters to make words that fit the theme. Features an intuitive UI with dynamic letter highlighting and animations.",
    technologies: ["Javascript", "HTML", "CSS", "React", "Vite"],
    image: "./public/WordSpin.png",
    demoUrl: "https://word-spin.vercel.app/",
    githubUrl: "https://github.com/john-spurrier/WordSpin"
  },
  {
    title: "Evacugator",
    description: "An AI-driven Angular application providing real-time hurricane evacuation advice. Integrates multiple APIs for shelter and evacuation zone data analysis.",
    technologies: ["Python", "Angular", "ArcGIS API", "OverPass API", "FEMA API", "IBM WatsonX"],
    image: "./public/evacugator.png",
    demoUrl: "https://devpost.com/software/evacugator",
    githubUrl: "https://github.com"
  },
  {
    title: "Monte Carlo Option Pricing Dashboard",
    description: "A web application for visualizing Monte Carlo simulations of option pricing. Features interactive charts and real-time data updates.",
    technologies: ["Python", "C++"],
    image: "./public/montecarlo.png",
    githubUrl: "https://github.com/john-spurrier/MonteCarloOptionPricing"
  },
  {
    title: "Football Score Notifier",
    description: "A Python application that fetches live football scores via API and sends instant notifications to users. Optimized for low-latency score tracking.",
    technologies: ["Python", "TelegramAPI"],
    image: "./public/football.png",
    githubUrl: "https://github.com/john-spurrier/FootballWebScrapingAndTelegramBot"
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-20"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
        
        {project.demoUrl && (
          <Button size="sm" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
