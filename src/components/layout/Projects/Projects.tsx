import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, Fragment, useState } from "react";

interface ProjectsProps {
  contents: {
    TITLE: string;
    TABS: string[];
    CONTENTS: {
      id: number;
      title: string;
      description: string;
      tags: string[];
      image: string;
      githubUrl: string | null;
      liveUrl: string;
    }[];
  };
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ contents }, ref) => {
    const { TITLE, TABS, CONTENTS } = contents;

    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects =
      activeTab === "All"
        ? CONTENTS
        : CONTENTS.filter((content) => content.tags.includes(activeTab));

    return (
      <section className="w-full flex-shrink-0 snap-start p-4 sm:p-8" ref={ref}>
        <div className="container mx-auto h-full overflow-y-auto">
          <Card className="min-h-full border-none bg-white/50 shadow-lg backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {TITLE}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap justify-center space-x-3 gap-y-2 mb-6">
                {TABS.map((tab, index) => (
                  <Fragment key={`tabs-${index}`}>
                    <Button
                      variant={activeTab === tab ? "default" : "outline"}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </Button>
                  </Fragment>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredProjects.map(
                  ({
                    id,
                    title,
                    description,
                    tags,
                    image,
                    githubUrl,
                    liveUrl,
                  }) => (
                    <Card
                      key={id}
                      className="overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                      <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="h-48 w-full object-cover"
                      />
                      <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                        <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                          {title}
                          <div className="flex space-x-4">
                            {githubUrl && (
                              <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`GitHub repository for ${title}`}
                              >
                                <Github className="h-5 w-5 hover:text-gray-200" />
                              </Link>
                            )}
                            <Link
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Live preview for ${title}`}
                            >
                              <ExternalLink className="h-5 w-5 hover:text-gray-200" />
                            </Link>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p className="mb-4 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                          {description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
);

Projects.displayName = "Projects";
