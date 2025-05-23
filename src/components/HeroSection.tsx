import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="min-h-screen relative flex flex-col justify-center pb-20 pt-32">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-sm sm:text-base font-medium text-primary mb-3 opacity-90">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">John Spurrier</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-muted-foreground">
            Software Engineer & Computer Science Graduate
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            I'm a Computer Science graduate from the University of Florida, currently pursuing my Master's degree. 
            I specialize in back-end development, AI integration, and building scalable software solutions. 
            Currently working at AI-Powered Athletics and previously interned at Amazon.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 -z-10 w-3/4 h-3/4">
        <div className="absolute right-10 bottom-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-40 bottom-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
    </section>
  );
}
