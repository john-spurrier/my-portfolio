import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Ruby", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Angular", category: "Frameworks" },
  { name: "NumPy", category: "Frameworks" },
  { name: "Scikit-Learn", category: "Frameworks" },
  { name: "Git", category: "Developer Tools" },
  { name: "VS Code", category: "Developer Tools" },
  { name: "Visual Studio", category: "Developer Tools" },
  { name: "IntelliJ", category: "Developer Tools" },
  { name: "Unity", category: "Developer Tools" },
  { name: "Figma", category: "Design Tools" },
  { name: "Adobe Photoshop", category: "Design Tools" },
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
                I'm a Computer Science graduate from the University of Florida, currently pursuing my Master's degree in Computer Science. 
                With a strong foundation in both technical and creative fields, I combine my Computer Science expertise with a minor in 
                Digital Arts and Sciences to create innovative solutions.
              </p>
              
              <p>
                Currently working as a Software Engineer at AI Powered Athletics, I focus on developing data processing pipelines and 
                building scalable systems. My experience at Amazon as a Software Development Engineer Intern has given me valuable 
                insights into large-scale system architecture and efficient development practices.
              </p>
              
              <p>
                I'm passionate about creating impactful software solutions that solve real-world problems. My projects range from 
                web applications like WordLadder.co to AI-driven systems like Evacugator, demonstrating my versatility across 
                different domains and technologies.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-primary font-medium">MS in Computer Science</div>
                  <div>University of Florida, 2025-2027</div>
                </div>
                <div>
                  <div className="text-primary font-medium">BS in Computer Science, Minor in Digital Arts and Sciences</div>
                  <div>University of Florida, 2021-2025</div>
                </div>
                <div>
                  <div className="text-primary font-medium">Relevant Coursework</div>
                  <div>Intro to Machine Learning, Data Structures and Algorithms, Operating Systems, Human Computer Interaction, Network Fundamentals, Algorithm Abstraction, Information and Databases</div>
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
              
              <SkillCategory title="Frameworks" 
                skills={skills.filter(s => s.category === "Frameworks")} 
              />
              
              <SkillCategory title="Developer Tools" 
                skills={skills.filter(s => s.category === "Developer Tools")} 
                className="col-span-2 md:col-span-1"
              />
              
              <SkillCategory title="Design Tools" 
                skills={skills.filter(s => s.category === "Design Tools")} 
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
