import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment } from "react";

interface SkillsProps {
  contents: {
    TITLE: string;
    CONTENTS: {
      title: string;
      contents: string[];
    }[];
  };
}
export function Skills({ contents }: SkillsProps) {
  const { TITLE, CONTENTS } = contents;

  const matchColor = [
    "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-700",
    "bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100 dark:hover:bg-teal-700",
    "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-700",
  ];

  return (
    <section className="w-full flex-shrink-0 snap-start p-4 sm:p-8">
      <div className="container mx-auto h-full">
        <Card className="min-h-full border-none bg-white/50 shadow-lg backdrop-blur-sm dark:bg-gray-800/50">
          <CardHeader>
            <CardTitle className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              {TITLE}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CONTENTS.map(({ title, contents }, cIndex) => (
              <div key={title}>
                <h3 className="mb-4 text-lg font-semibold text-gray-700 sm:text-xl dark:text-gray-200">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {contents.map((content, index) => (
                    <Fragment key={`skill-content-${index}`}>
                      <Badge className={matchColor[cIndex]}>{content}</Badge>
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
