export type ContactKey = 'github' | 'kaggle' | 'telegram' | 'email'

export type Project = {
  id: string
  title: string
  type: string
  status: string
  description: string
  result?: string
  overview?: string
  methodology?: string
  architecture?: string
  metric?: string
  repositoryUrl?: string
  competitionUrl?: string
  competitionSlug?: string
}

export type EducationEntry = {
  institution: string
  program: string
  location?: string
  dates: string
  detail?: string
}

export type Achievement = {
  title: string
  detail: string
  medal?: boolean
}

export const person = {
  name: 'Boris Bezmenov',
  location: 'Bonn, Germany',
  role: 'mathematics student interested in machine learning',
  headline: {
    lead: 'Exploring mathematics,',
    emphasis: 'machine learning',
    ending: 'and software engineering.',
  },
} as const

export const contacts: Record<ContactKey, string> = {
  github: 'https://github.com/yugavka',
  kaggle: 'https://www.kaggle.com/borisbezmenov',
  telegram: 'https://t.me/yugavka',
  email: 'boris18092007@gmail.com',
}

// This file is copied from the CV supplied by Boris and placed in public/cv.pdf.
export const cvPath: string = '/cv.pdf'

export const kaggleProjects: Project[] = [
  {
    id: 'enveda',
    title: 'Enveda CASMI 2026',
    type: 'Kaggle · machine learning',
    status: 'Competition',
    description: 'Predicting molecular structures from mass spectra.',
    overview: 'The challenge is to identify small molecules from LC-MS/MS spectra by predicting candidate 2D structures.',
    competitionSlug: 'enveda-CASMI26-molecule-id-mass-spectra',
    competitionUrl: 'https://www.kaggle.com/competitions/enveda-CASMI26-molecule-id-mass-spectra',
  },
  {
    id: 'name-that-llm',
    title: 'Name That LLM',
    type: 'Kaggle · language models',
    status: 'Competition',
    description: 'Identifying which language model generated a text passage.',
    overview: 'A classification challenge involving short passages from 18 frontier language models.',
    competitionSlug: 'name-that-llm',
    competitionUrl: 'https://www.kaggle.com/competitions/name-that-llm',
  },
  {
    id: 'squares-in-squares',
    title: 'Squares in Squares',
    type: 'Kaggle · optimization',
    status: 'Competition',
    description: 'Finding compact ways to pack unit squares inside a larger square.',
    overview: 'A geometric optimization challenge to minimize the enclosing square for collections of unit squares.',
    competitionSlug: 'squares-in-squares',
    competitionUrl: 'https://www.kaggle.com/competitions/squares-in-squares',
  },
  {
    id: 'biohub',
    title: 'Biohub — Cell Tracking During Development',
    type: 'Kaggle · computer vision',
    status: 'Completed',
    description: 'Detecting and tracking zebrafish cells through 3D space and time.',
    overview: 'A research competition focused on tracking cells in developing zebrafish.',
    result: 'Bronze medal',
    competitionSlug: 'biohub-cell-tracking-during-development',
    competitionUrl: 'https://www.kaggle.com/competitions/biohub-cell-tracking-during-development',
  },
]

export const projects: Project[] = [
  {
    id: 'turkey-demand',
    title: 'Turkey Search Demand Map',
    type: 'Machine learning / data science',
    status: 'Project',
    description: 'A spatio-temporal machine learning pipeline for analyzing and forecasting search demand across 81 Turkish provinces.',
    overview: 'Analyzed and forecasted search demand across 81 Turkish provinces.',
    methodology: 'Used temporal, spatial, and historical demand features for short-term forecasting, including recursive multi-step prediction. Applied BGE embeddings for semantic classification of search entities.',
    repositoryUrl: 'https://github.com/d1amp0/turkey-search-demand-map',
  },
  {
    id: 'java-coursework',
    title: 'Java Core Coursework',
    type: 'Student project',
    status: 'Coursework',
    description: 'An expression parser, a configurable MNK game engine, and text-processing utilities built with Java generics.',
    overview: 'Implemented a generic expression parser supporting multiple numeric types with configurable arithmetic and overflow handling.',
    methodology: 'Built a configurable MNK game engine and additional text-processing utilities using object-oriented and generic programming techniques.',
    repositoryUrl: 'https://github.com/yugavka/ITMO_AI360_Prog_Intro',
  },
  {
    id: 'gpu-market',
    title: 'GPU Market',
    type: 'P2P GPU rental concept',
    status: 'Deprecated',
    description: 'A P2P marketplace concept for GPU rentals: owners could list spare hardware, while developers could find compute for machine learning experiments. The idea was retired before launch.',
  },
]

export const skillGroups = [
  { title: 'Programming languages', skills: ['Python', 'Java', 'C', 'C++', 'SQL'] },
  { title: 'Machine learning & data', skills: ['pandas', 'NumPy', 'scikit-learn', 'CatBoost', 'Matplotlib', 'Seaborn', 'PyTorch', 'GeoPandas'] },
  { title: 'Development tools', skills: ['Git', 'Docker', 'Linux', 'Bash'] },
  { title: 'Mathematics', skills: ['Linear Algebra', 'Calculus', 'Probability Theory', 'Statistics'] },
] as const

export const education: EducationEntry[] = [
  { institution: 'University of Bonn', program: 'B.Sc. in Mathematics with a minor in Computer Science', location: 'Bonn, Germany', dates: '2026–2029' },
  { institution: 'ITMO University', program: 'B.Sc. studies in Applied Mathematics and Computer Science', location: 'Saint Petersburg, Russia', dates: '2025–2026', detail: 'Specialization: Artificial Intelligence' },
  { institution: 'Presidential Physics and Mathematics Lyceum No. 239', program: 'Secondary education, Physics and Mathematics track', location: 'Saint Petersburg, Russia', dates: '2021–2025' },
  { institution: 'Yandex Lyceum', program: 'Python Development Program', location: 'Russia', dates: '2023–2024' },
]

export const research = {
  title: 'Faculty Internship, Saint Petersburg State University',
  role: 'Research Intern',
  year: '2024',
  detail: 'Participated in academic practice at the Faculty of Mathematics and Computer Science, studying advanced topics including algebra and topology.',
} as const

export const achievements: Achievement[] = [
  { title: 'Biohub — Cell Tracking During Development', detail: 'Kaggle · 2026', medal: true },
  { title: 'Phystech Olympiad in Mathematics', detail: 'Winner · 2024' },
  { title: 'Regional Stage of the All-Russian Olympiad in Economics', detail: 'Winner · 2024' },
  { title: 'Rosatom Physics and Mathematics Olympiad', detail: 'Prize-winner · 2024, 2025' },
  { title: 'I. Ya. Verchenko Interregional Olympiad in Mathematics', detail: 'Prize-winner · 2025' },
  { title: 'United Interuniversity Olympiad in Mathematics', detail: 'Prize-winner · 2025' },
  { title: 'Regional Stage of the All-Russian Olympiad in Economics', detail: 'Prize-winner · 2025' },
] as const

export const courses = [
  'Machine Learning — HSE Course, 2026',
  'AI — Claude Academy, 2026',
  'AI Agents — Google 5-Day Intensive, 2025',
  'Data Analysis — Online Data Analysis Internship, 2025',
  'Data Science: Python for Data Science, AI & Development — IBM, 2024',
  'Data Science Tools — IBM, 2024',
  'Olympiad Mathematics — Lyceum 239, 2021–2025',
] as const

export const humanLanguages = ['English (C1)', 'German (C1)', 'Russian (native)'] as const
