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
                I'm a Computer Science graduate and current Master's student at the University of Florida. My journey in tech began 
                with a love for problem-solving, leading me to explore software development, machine learning, HCI, and data science.
              </p>
              
              <p>
                I'm currently a Software Engineer at AI-Powered Athletics, where I build a scalable and secure databank for UF athlete data. 
                Previously, I interned at Amazon, contributing to API development for dynamic allow/denylist updates.
              </p>
              
              <p>
                I'm passionate about creating impactful software. My proudest project, the Student Athlete Databank, earned me a paid role 
                to continue its development. Other projects include AI tools like Evacugator, finance tools like a Monte Carlo Option 
                Pricing Dashboard, and several word game web apps. Outside of tech, I enjoy building daily-use tools and performing 
                stand-up and improv comedy.
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
