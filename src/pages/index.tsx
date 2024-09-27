import { Navbar } from "@/components/layout/Navbar/Navbar";
import { useCallback, useEffect, useRef, useState } from "react";

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
    </div>
  );
}
