import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ContactForm } from "./ContactForm/ContactForm";
import { forwardRef } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTwitter,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

interface ContactProps {
  contents: {
    TITLE: string;
    DESCRIPTION: string;
    EMAIL: string;
    GITHUB: string;
    LINKEDIN: string;
    TWITTER: string;
    REDDIT: string;
    LOCATION: string;
  };
}

export const Contact = forwardRef<HTMLElement, ContactProps>(
  ({ contents }, ref) => {
    const {
      TITLE,
      DESCRIPTION,
      EMAIL,
      GITHUB,
      LINKEDIN,
      TWITTER,
      REDDIT,
      LOCATION,
    } = contents;

    return (
      <section className="w-full flex-shrink-0 snap-start p-4 sm:p-8" ref={ref}>
        <div className="container mx-auto h-full overflow-y-auto">
          <Card className="min-h-full border-none bg-white/50 shadow-lg backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {TITLE}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-gray-600 dark:text-gray-300">
                  {DESCRIPTION}
                </p>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <IconMail size={20} className="text-blue-500" />
                  <Link
                    href={`mailto:${EMAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {EMAIL}
                  </Link>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <IconBrandGithub size={20} className="text-blue-500" />
                  <Link
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {GITHUB.split("//")[1]}
                  </Link>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <IconBrandLinkedin size={20} className="text-blue-500" />
                  <Link
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {LINKEDIN.split("//")[1]}
                  </Link>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <IconBrandTwitter size={20} className="text-blue-500" />
                  <Link
                    href={TWITTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {TWITTER.split("//")[1]}
                  </Link>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <IconBrandReddit size={20} className="text-blue-500" />
                  <Link
                    href={REDDIT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {REDDIT.split("//")[1]}
                  </Link>
                </div>

                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <IconMapPin size={20} className="text-blue-500" />
                  <span>{LOCATION}</span>
                </div>
              </div>

              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
);

Contact.displayName = "Contact";
