
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactItem icon={<Mail className="text-primary" />} label="Email">
                  <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </ContactItem>
                
                <ContactItem icon={<Phone className="text-primary" />} label="Phone">
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </ContactItem>
                
                <ContactItem icon={<Globe className="text-primary" />} label="Website">
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    yourwebsite.com
                  </a>
                </ContactItem>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Send A Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-secondary/50"
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ 
  icon, 
  label, 
  children 
}: { 
  icon: React.ReactNode; 
  label: string; 
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-1">{label}</h4>
      <div className="flex items-center gap-2">
        {icon}
        {children}
      </div>
    </div>
  );
}
