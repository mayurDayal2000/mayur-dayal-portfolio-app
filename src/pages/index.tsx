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
import { selectData } from "@/lib/supabase";
import { ContentTypes } from "@/interfaces/interfaces";
import { Loading } from "@/components/layout/Loading/Loading";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [contents, setContents] = useState<ContentTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading && scrollContainerRef.current) {
      const currentSection = sectionRefs.current;
      const currentScrollContainer = scrollContainerRef.current;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = currentSection.findIndex(
                (ref) => ref === entry.target
              );
              if (index !== -1) {
                setActiveSection(index);
              }
            }
          });
        },
        {
          root: currentScrollContainer,
          rootMargin: "0px",
          threshold: 0.8, // section is active when 80% is visible
        }
      );

      currentSection.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      return () => {
        currentSection.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    }
  }, [isLoading]);

  useEffect(() => {
    async function fetchContent() {
      const data = await selectData();
      setContents(data as ContentTypes);
      setIsLoading(false);
    }

    fetchContent();
  }, []);

  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index <= 5) {
      setActiveSection(index);
      scrollContainerRef.current?.children[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, []);

  if (isLoading || !contents) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main
        ref={scrollContainerRef}
        className="scrollbar-hide flex flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        <Introduction
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          contents={contents.INTRODUCTION}
        />
        <Skills
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          contents={contents.SKILLS}
        />
        <Experience
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          contents={contents.EXPERIENCE}
        />
        <Projects
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          contents={contents.PROJECTS}
        />
        <Education
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          contents={contents.EDUCATION}
        />
        <Contact
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
          contents={contents.CONTACT}
        />
      </main>

      <footer className="flex items-center justify-between gap-x-2 p-4">
        <Button
          variant="outline"
          onClick={() => scrollToSection(Math.max(0, activeSection - 1))}
          disabled={activeSection === 0}
          className="border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:block">Previous</span>
        </Button>

        <p className="mb-2 text-center text-xs text-gray-600 sm:mb-0 sm:text-sm dark:text-gray-400">
          Built with Next.js and Tailwind CSS ❤️
        </p>

        <Button
          variant="outline"
          onClick={() => scrollToSection(Math.min(5, activeSection + 1))}
          disabled={activeSection === 5}
          className="border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          <span className="hidden sm:block">Next</span>
          <ChevronRight className="h-4 w-4 sm:ml-2" />
        </Button>
      </footer>
    </div>
  );
}
