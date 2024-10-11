import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

interface EducationProps {
  contents: {
    TITLE: string;
    COLLEGE: {
      DEGREE: string;
      DEPT: string;
      NAME: string;
      SCORE: string;
      TIMELINE: string;
      EXTRA: string;
    };
    CERTIFICATIONS: {
      CTITLE: string;
      CONTENTS: {
        TITLE: string;
        REDIRECT: string;
      }[];
    };
  };
}

export const Education = forwardRef<HTMLElement, EducationProps>(
  ({ contents }, ref) => {
    const { TITLE, COLLEGE, CERTIFICATIONS } = contents;
    const { CTITLE, CONTENTS } = CERTIFICATIONS;

    return (
      <section className="w-full flex-shrink-0 snap-start p-4 sm:p-8" ref={ref}>
        <div className="container mx-auto h-full overflow-y-auto">
          <Card className="min-h-full border-none bg-white/50 shadow-lg backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {TITLE}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 sm:text-xl dark:text-gray-100">
                  {COLLEGE.DEGREE} in {COLLEGE.DEPT}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {COLLEGE.NAME} <br /> {COLLEGE.TIMELINE}
                </p>

                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {COLLEGE.SCORE}
                </p>

                <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                  {COLLEGE.EXTRA}
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 sm:text-xl dark:text-gray-100">
                  {CTITLE}
                </h3>

                <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-gray-600 sm:text-base dark:text-gray-300">
                  {CONTENTS.map(({ TITLE, REDIRECT }, index) => (
                    <li key={`content-${index}`}>
                      <Link
                        href={REDIRECT}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`view credentials for ${TITLE}`}
                        className="inline-flex items-center gap-x-2 hover:text-blue-500"
                      >
                        {TITLE}

                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
);

Education.displayName = "Education";
