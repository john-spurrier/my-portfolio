
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#top" className="text-lg font-semibold text-gradient">
              Portfolio
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} John Spurrier. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
