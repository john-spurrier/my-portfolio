
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "JavaScript/TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "CI/CD", category: "Tools" },
  { name: "AWS", category: "Cloud" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 clip-path-slant bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm a passionate computer scientist with a focus on web development 
                and machine learning. I graduated with a degree in Computer Science from 
                University Name in 2023.
              </p>
              
              <p>
                My journey in tech started when I first learned to program in high school,
                and since then I've been fascinated by how software can solve real-world problems
                and improve people's lives.
              </p>
              
              <p>
                I enjoy working on challenging projects that push my boundaries and allow me
                to learn new technologies. When I'm not coding, you can find me hiking,
                reading sci-fi novels, or experimenting with new recipes in the kitchen.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-primary font-medium">BS in Computer Science</div>
                  <div>University Name, 2019-2023</div>
                </div>
                <div>
                  <div className="text-primary font-medium">Relevant Coursework</div>
                  <div>Algorithms, Data Structures, Machine Learning, Web Development, Database Systems</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <SkillCategory title="Languages" 
                skills={skills.filter(s => s.category === "Languages")} 
              />
              
              <SkillCategory title="Frontend" 
                skills={skills.filter(s => s.category === "Frontend")} 
              />
              
              <SkillCategory title="Backend" 
                skills={skills.filter(s => s.category === "Backend")} 
              />
              
              <SkillCategory title="Database" 
                skills={skills.filter(s => s.category === "Database")} 
              />
              
              <SkillCategory title="Tools" 
                skills={skills.filter(s => s.category === "Tools")} 
                className="col-span-2 md:col-span-1"
              />
              
              <SkillCategory title="Cloud" 
                skills={skills.filter(s => s.category === "Cloud")} 
                className="col-span-2 md:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ 
  title, 
  skills, 
  className = ""
}: { 
  title: string; 
  skills: { name: string; category: string }[]; 
  className?: string;
}) {
  return (
    <Card className={`bg-card/50 border-primary/10 ${className}`}>
      <CardContent className="p-4">
        <h4 className="text-lg font-medium mb-3 text-primary">{title}</h4>
        <ul className="space-y-1">
          {skills.map(skill => (
            <li key={skill.name} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              {skill.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
