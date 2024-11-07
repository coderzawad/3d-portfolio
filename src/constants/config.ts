type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Zawad - Fullstack Developer Portfolio",
    fullName: "Abdullah Al Zawad",
    email: "zawad@devsnest.llc",
  },
  hero: {
    name: "Zawad",
    p: [
      "I'm a fullstack web developer",
      "I build dynamic, scalable web applications",
    ],
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a seasoned software developer with expertise in TypeScript, JavaScript, 
      and frameworks like React, Node.js, and Three.js. I'm passionate about building 
      efficient and scalable web solutions that bring ideas to life.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
      content: `3 years of real-world development experience, including work at Ecom Propeller, where I honed my 
      skills in web development and project management.`,
    },
    feedbacks: {
      p: "Client Feedback",
      h2: "What Clients Say.",
      content: `“Working with Zawad was a game-changer. His ability to understand complex requirements 
      and translate them into efficient solutions was outstanding. His commitment to delivering high-quality work is unparalleled.”`,
    },
    works: {
      p: "My Projects",
      h2: "Showcase.",
      content: `This project is a testament to my skills in integrating LLMs into practical applications. 
      I collaborated closely with the client (you!) to create a chat UI using the LLaMA model, seamlessly hosted on a cloud service.`,
    },
  },
};
 
