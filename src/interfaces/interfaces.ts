export interface ContentTypes {
  SKILLS: {
    TITLE: string;
    CONTENTS: {
      title: string;
      contents: string[];
    }[];
  };
  CONTACT: {
    TITLE: string;
    DESCRIPTION: string;
    EMAIL: string;
    GITHUB: string;
    LINKEDIN: string;
    TWITTER: string;
    REDDIT: string;
    LOCATION: string;
  };
  PROJECTS: {
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
  EDUCATION: {
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
  EXPERIENCE: {
    TITLE: string;
    CONTENTS: {
      COMPANY_NAME: string;
      COMPANY_ROLE: string;
      COMPANY_URL: string;
      COMPANY_TIMELINE: string;
      BULLETPOINTS: string[];
    }[];
  };
  INTRODUCTION: {
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
