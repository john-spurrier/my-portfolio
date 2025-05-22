
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
    title: "Project One",
    description: "A full-stack web application that helps users track their daily expenses and visualize spending patterns through interactive charts.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Project Two",
    description: "A machine learning model to predict stock market trends based on historical data and sentiment analysis from news articles.",
    technologies: ["Python", "TensorFlow", "NLP", "Flask"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Project Three",
    description: "An e-commerce platform with integrated payment processing, inventory management, and analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com"
  },
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
