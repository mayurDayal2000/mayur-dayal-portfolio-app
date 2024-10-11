import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Mail } from "lucide-react";
import { forwardRef } from "react";

interface IntroductionProps {
  contents: {
    YOUR_NAME: string;
    WHO_ARE_YOU: string;
    WHAT_YOU_DO: string;
    EMAIL: {
      TITLE: string;
      LINK: string;
    };
    GITHUB: {
      TITLE: string;
      LINK: string;
    };
  };
}

export const Introduction = forwardRef<HTMLElement, IntroductionProps>(
  ({ contents }, ref) => {
    const { YOUR_NAME, WHO_ARE_YOU, WHAT_YOU_DO, EMAIL, GITHUB } = contents;
    return (
      <section className="w-full flex-shrink-0 snap-start p-4 sm:p-8" ref={ref}>
        <div className="container mx-auto h-full overflow-y-auto">
          <Card className="flex min-h-full flex-col items-center justify-center border-none bg-white/50 text-center shadow-lg backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                {YOUR_NAME}
              </CardTitle>
              <CardDescription className="mb-8 text-lg text-gray-600 max-w-4xl sm:text-xl md:text-2xl dark:text-gray-300">
                {WHO_ARE_YOU}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-600 sm:text-base dark:text-gray-300">
                {WHAT_YOU_DO}
              </p>

              <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white sm:w-auto">
                  <a
                    href={`mailto:${EMAIL.LINK}`}
                    className="flex items-center"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {EMAIL.TITLE}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white sm:w-auto"
                >
                  <a
                    href={GITHUB.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {GITHUB.TITLE}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
);

Introduction.displayName = "Introduction";
