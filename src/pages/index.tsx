import { Navbar } from "@/components/layout/Navbar/Navbar";
import { useCallback, useEffect, useRef, useState } from "react";
import { Introduction } from "@/components/layout/Introduction/Introduction";
import { Skills } from "@/components/layout/Skills/Skills";
import { Projects } from "@/components/layout/Projects/Projects";
import { Experience } from "@/components/layout/Experience/Experience";
import { Education } from "@/components/layout/Education/Education";
import { Contact } from "@/components/layout/Contact/Contact";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer: HTMLDivElement | null = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollLeft;
        const sectionWidth = scrollContainer.offsetWidth;
        const currentSection = Math.round(scrollPosition / sectionWidth);
        setActiveSection(currentSection);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = useCallback((index: number) => {
    scrollContainerRef.current?.children[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  }, []);

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main
        ref={scrollContainerRef}
        className="scrollbar-hide flex flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        <Introduction contents={INTRODUCTION} />
        <Skills contents={SKILLS} />
        <Experience contents={EXPERIENCE} />
        <Projects contents={PROJECTS} />
        <Education contents={EDUCATION} />
        <Contact contents={CONTACT} />
      </main>

      <footer className="flex justify-between items-center p-4">
        <Button
          variant="outline"
          onClick={() => scrollToSection(activeSection - 1)}
          disabled={activeSection === 0}
          className="border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>

        <p className="mb-2 text-sm text-gray-600 sm:mb-0 dark:text-gray-400">
          Built with Next.js and Tailwind CSS ❤️
        </p>

        <Button
          variant="outline"
          onClick={() => scrollToSection(activeSection + 1)}
          disabled={activeSection === 5}
          className="border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </footer>
    </div>
  );
}
