interface Technology {
  title: string;
  logo: string; // filename within "public/tech/" folder
}

export const technologies: Readonly<Record<string, Technology>> = {
  html: { title: "HTML", logo: "html.svg" },
  css: { title: "CSS", logo: "css.svg" },
  astro: { title: "Astro", logo: "astro.svg" },
  js: { title: "JavaScript", logo: "js.svg" },
  ts: { title: "TypeScript", logo: "ts.svg" },
  react: { title: "ReactJs", logo: "react.svg" },
  reactQuery: { title: "React Query", logo: "react-query.svg" },
  redux: { title: "Redux", logo: "redux.svg" },
  nodejs: { title: "NodeJs", logo: "nodejs.svg" },
  flutter: { title: "Flutter", logo: "flutter.svg" },
  dart: { title: "Dart", logo: "dart.svg" },
  nextjs: { title: "NextJs", logo: "nextjs.svg" },
  mongodb: { title: "MongoDB", logo: "mongodb.svg" },
  mongoose: { title: "Mongoose", logo: "mongoose.svg" },
  postgres: { title: "PostgreSQL", logo: "postgres.svg" },
  prisma: { title: "Prisma", logo: "prisma.svg" },
  nextAuth: { title: "NextAuth", logo: "nextauth.svg" },
  supabase: { title: "Supabase", logo: "supabase.svg" },
  firebase: { title: "Firebase", logo: "firebase.svg" },
  tailwind: { title: "Tailwind-CSS", logo: "tailwind.svg" },
  styledComponents: {
    title: "Styled Components",
    logo: "styled-components.svg",
  },
  bootstrap: { title: "Bootstrap", logo: "bootstrap.svg" },
  cpp: { title: "C++", logo: "cpp.svg" },
  python: { title: "Python", logo: "python.svg" },
  java: { title: "Java", logo: "java.svg" },
  bash: { title: "Bash", logo: "bash.svg" },
  md: { title: "Markdown", logo: "markdown.svg" },
  git: { title: "Git", logo: "git.svg" },
  github: { title: "GitHub", logo: "github.svg" },
  vercel: { title: "Vercel", logo: "vercel.svg" },
  netlify: { title: "Netlify", logo: "netlify.svg" },
  jira: { title: "Jira", logo: "jira.svg" },
  socketio: { title: "Socket.IO", logo: "socketio.svg" },
};
