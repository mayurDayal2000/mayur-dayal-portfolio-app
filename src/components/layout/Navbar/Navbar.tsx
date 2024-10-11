import { Button } from "@/components/ui/button";

interface SectionType {
  id: string;
  title: string;
}

interface NavbarProps {
  activeSection: number;
  scrollToSection: (index: number) => void;
}

export function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const sections: SectionType[] = [
    { id: "intro", title: "Introduction" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="bg-white p-4 shadow-md dark:bg-gray-800 hidden sm:block">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row overflow-y-auto">
        <h1 className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent lg:mb-0">
          Mayur Dayal
        </h1>

        <ul className="flex flex-wrap justify-center space-x-2 gap-y-2 sm:justify-end sm:gap-y-0">
          {sections.map((section, index) => (
            <li key={section.id}>
              <Button
                variant={activeSection === index ? "default" : "outline"}
                onClick={() => scrollToSection(index)}
                className="text-xs transition-all duration-300 ease-in-out sm:text-sm md:text-base"
              >
                {section.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
