import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Fragment } from "react";

interface ExperienceProps {
  contents: {
    TITLE: string;
    CONTENTS: {
      COMPANY_NAME: string;
      COMPANY_ROLE: string;
      COMPANY_URL: string;
      COMPANY_TIMELINE: string;
      BULLETPOINTS: string[];
    }[];
  };
}

export function Experience({ contents }: ExperienceProps) {
  const { TITLE, CONTENTS } = contents;

  const colors: {
    border: string;
    text: string;
  }[] = [
    {
      border: "border-blue-500",
      text: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
    },
    {
      border: "border-teal-500",
      text: "text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300",
    },
  ];
  return (
    <section className="w-full flex-shrink-0 snap-start p-4 sm:p-8">
      <div className="container mx-auto h-full overflow-y-auto">
        <Card className="min-h-full border-none bg-white/50 shadow-lg backdrop-blur-sm dark:bg-gray-800/50">
          <CardHeader>
            <CardTitle className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              {TITLE}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {CONTENTS.map(
              (
                {
                  COMPANY_NAME,
                  COMPANY_ROLE,
                  COMPANY_URL,
                  COMPANY_TIMELINE,
                  BULLETPOINTS,
                },
                index
              ) => (
                <Fragment key={`work-exp-${index}`}>
                  <div className={`border-l-4 ${colors[index].border} pl-4`}>
                    <h3 className="text-lg font-semibold text-gray-800 sm:text-xl dark:text-gray-100">
                      {COMPANY_ROLE} -{" "}
                      <Link
                        href={COMPANY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors[index].text} transition-colors`}
                      >
                        {COMPANY_NAME}
                      </Link>
                    </h3>

                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      {COMPANY_TIMELINE}
                    </p>

                    <ul className="list-inside list-disc space-y-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                      {BULLETPOINTS.map((items, indexx) => (
                        <Fragment key={`bulletpoint-${index}-${indexx}`}>
                          <li>{items}</li>
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                </Fragment>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
