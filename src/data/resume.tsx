import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdallah Atef",
  initials: "Af",
  url: "https://github.com/oxshaghp",
  location: "Egypt 🇪🇬",
  description:
    "Full Stack Dev creating smooth experiences & smart solutions — building with passion, delivering with precision. Very active on Linked In.",
summary:
"I’m Abdullah, a passionate Full Stack Web Developer who loves turning ideas into functional, visually engaging, and high-performance web applications.On the front-end, I work with HTML, CSS, JavaScript, Tailwind CSS, React, TypeScript, Next.js, SASS, GSAP, and Framer Motion to craft seamless user interfaces with smooth animations.On the back-end, I build robust APIs and scalable systems using Node.js, Express, and MongoDB.My goal is to create digital experiences that are not only efficient and responsive but also leave a lasting impression on users.",

avatarUrl: "/itsmy.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB", 
    "Firebase", 
    "Python",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bdallhalbnt@gmail.com",
    tel: "+201157713042",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/oxshaghp",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdullah-atef-b2061a324/",
        icon: Icons.linkedin,

        navbar: true,
      },
      whatsapp: {
        name: "whatsapp",
        url: "https://wtsi.me/201157713042",
        icon: Icons.whatsapp,

        navbar: true,
      },
      instagram: {
        name: "instagram",
        url: "https://www.instagram.com/oxshaghp/?next=%2F",
        icon: Icons.instagram,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ela3goz_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@shaghp",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: " Bank (CIB)",
      href: "https://www.cibeg.com/ar",
      badges: [],
      location: "Remote",
      title: "Full Stack Development Intern",
      logoUrl: "/logo.svg",
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Participated in building and optimizing internal tools using modern web technologies.Collaborated with a cross-functional team to design user-friendly interfaces and maintain backend services.Gained hands-on experience in delivering secure and efficient web solutions aligned with industry standards.",
    },
    {
      company: "Full Stack Web Developer – Freelance ",
      badges: [],
      href: "https://nafezly.com/",
      location: "Remote",
      title: "Full Stack Web",
      logoUrl: "/nafthly.png",
      start: "January 2023",
      end: "Present",
      description:
        "Built back-end APIs with Node.js, Express, and MongoDB to support scalable, real-world applications.Implemented smooth animations and engaging UI experiences using GSAP and Framer Motion.Delivered custom solutions for clients, ensuring performance optimization and mobile responsiveness.",
    },
  ],
  education: [
    {
      school: "Thebes Academy",
      href: "https://thebes.edu.eg/",
      degree: "CS bachelors",
      logoUrl: "/thebes.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [

    {
      title: "FreshHeat",
      href: "https://fresh-heat.vercel.app/",
      dates: "june 2025 - june 2025",
      active: true,
      description:
        "first real Full-Stack Web App The project is a fully functional online food ordering platform, built from scratch with love and attention to every detail. Google login & user authentication Password reset via email Personal profile with order history & Visa card saving Email confirmations & auto discounts Clean, fast, and user-friendly UIThis is just the beginning of our journey, Insha’Allah!",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://fresh-heat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/oxshaghp/FreshHeat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FreshHeat .png",
    },
    {
      title: "Task Manager",
      href: "https://task-mangment-delta.vercel.app/",
      dates: "jan 2025 - jan 2025",
      active: true,
      description:
        "Alhamdulillah, I built a clean and functional Task Management Web App from scratch Users can create, edit, and organize their tasks easily — with login, Google auth, deadlines, and status tracking.Simple UI, smooth UX, and built to boost your productivity !",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://task-mangment-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/oxshaghp/Task-Mangment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/taskmanger.png",
    },
    {
      title: "رحلاتي",
      href: "https://rhlaty.vercel.app/",
      dates: "june 2025 - june 2025",
      active: true,
      description:
        "I designed and developed a smooth and engaging Travel Website Landing Page from scratch  Aimed at inspiring travelers, the page highlights destinations, travel plans, and special offers — with a clean design, persuasive content, and responsive layout. Simple, elegant, and built to convert visitors into explorers ",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://rhlaty.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/oxshaghp/Rahlay",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rehlaty.png",
    },
    {
      title: "Jenny’s Portfolio",
      href: "https://portfolio-clint.vercel.app/",
      dates: "Aug 2025 - Aug 2025",
      active: true,
      description:
        "Through a blend of creative design and seamless functionality, this UI/UX designer turns ideas into results. With over a decade of experience and expertise in Figma, Adobe XD, and Sketch, JCREA delivers user-centric digital products that are visually appealing and strategically effective. Dive into projects, browse testimonials, and explore services crafted to elevate your digital presence.",
      technologies: [
        "Next.js",,
        "TailwindCSS",
        "Shadcn UI",
        "Lenis Scroll",
        "Famer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://portfolio-clint.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/oxshaghp/Portfolio-clint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Port.png",
    },
  ],
} as const;
