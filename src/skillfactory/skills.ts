import createSkillFactory from './create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/
export const deans = createSkillFactory({
  name: "Dean's List",
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: 'Fall 2023, Winter 2024, Fall 2024.',
});

export const gpa = createSkillFactory({
  name: '4.30 GPA',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: 'Sept 2023-Fall 2024',
});

export const stat = createSkillFactory({
  name: 'Probability and Statistics',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: '(STAT 2000',
});

export const linearAlgebra = createSkillFactory({
  name: 'Linear Algebra',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: 'MATH 2120.',
});

export const diffQ = createSkillFactory({
  name: 'Differential Equations',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: 'Solving ordinary and partial differential equations (MATH 3160 & MATH 2240.)',
});
export const calc = createSkillFactory({
  name: 'Calculus',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: 'Differential, integral, and multivariable calculus (MATH 2110 & MATH 1240 & MATH 1140)',
});

export const discrete = createSkillFactory({
  name: 'Discrete Mathematics',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: '(MATH 1700)',
});

export const macroEcon = createSkillFactory({
  name: 'Macro Economics',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: '(ECON 1950)',
});

export const microEcon = createSkillFactory({
  name: 'Micro Economics',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: '(ECON 1900)',
});

export const AI = createSkillFactory({
  name: 'Applied AI',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: 'Applied artificial intelligence (COMP 3710).',
});

export const dataStruct = createSkillFactory({
  name: 'Data Structures & Algorithms',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: '(COMP 2230)',
});

export const obj = createSkillFactory({
  name: 'Object Oriented Programming',
  //icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  description: '(COMP 3140)',
});

export const SQL = createSkillFactory({
  name: 'SQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
