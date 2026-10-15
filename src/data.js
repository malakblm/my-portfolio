import autopilot from './assets/autopilot.png'
import eyee from './assets/eyee.png'
import notelink from './assets/notelink.png'

export const EMAIL = 'malakbarrahmoune703@gmail.com'

export const skills = [
  'Python', 'JavaScript', 'TypeScript', 'C#', 'C++', 'SQL', 'React', 'Node.js',
  'TensorFlow', 'PyTorch', 'Pandas', 'OpenCV', 'Git', 'Docker', 'Azure',
]

export const experience = [
  {
    company: 'All Coats',
    role: 'IT Specialist & Maintenance',
    date: 'APRIL 2026 - PRESENT',
    points: [
      'Provide first-line technical support and troubleshooting for staff software and hardware issues, helping resolve day-to-day system problems and reduce downtime.',
      'Manage administrative operations including call handling, maintenance logging, and coordination of day-to-day office and site activities.',
    ],
  },
  {
    company: 'Renewable Green',
    role: 'Data Analyst',
    date: 'SEP 2025 - APRIL 2026',
    points: [
      'Analysed transaction and customer data to uncover patterns and inconsistencies across sales activity, feeding directly into client-facing insights.',
      'Built Python-based data analysis tools using Pandas and Matplotlib. Developed metrics and examined key sales drivers to build a clearer picture of overall business performance.',
    ],
  },
  {
    company: 'DATACOM',
    role: 'AI Model Trainer',
    date: 'JAN 2025 - SEP 2025',
    points: [
      'Designed, trained and evaluated machine learning and deep learning models using Python and TensorFlow.',
      'Implemented data preprocessing pipelines and model evaluation techniques for image classification and sentiment analysis tasks.',
    ],
  },
]

// To add a project: copy one block, change the text, and add a link in `github`.
// `image` is optional - import a screenshot at the top of this file and use it here.
export const projects = [
  {
    title: 'Eyee',
    description: 'AI-powered AR glasses for the visually impaired.',
    stack: 'Python, Computer Vision, TensorFlow',
    github: '#',
    image: eyee,
  },
  {
    title: 'Note Link',
    description: 'A connected study notes platform.',
    stack: 'React, Node.js',
    github: '#',
    image: notelink,
  },
  {
    title: 'Employee Service',
    description: 'Employee management REST API with a live search web UI, designed for HPE GreenLake private cloud.',
    stack: 'Java, Spring Boot, REST APIs',
    github: 'https://github.com/malakblm/employee-service',
    image: null,
  },
  {
    title: 'Autopilot Sim',
    description: 'Self-driving car simulator in 3D: sensors, autopilot, time-travel replay and automated tests.',
    stack: 'JavaScript, Three.js, Vite',
    github: 'https://github.com/malakblm/autopilot-sim',
    demo: 'https://malakblm.github.io/autopilot-sim/',
    image: autopilot,
  },
  {
    title: 'Taskit',
    description: 'Full-stack task manager / expense tracker CRUD app.',
    stack: 'React, Node.js, REST APIs',
    github: '#',
    image: null,
  },
  {
    title: 'Husky',
    description: 'Personal knowledge assistant â€” a RAG chatbot.',
    stack: 'Python, TensorFlow/PyTorch',
    github: '#',
    image: null,
  },
  {
    title: 'Clockin (GEO App)',
    description: 'Geofenced clock in / clock out app with a shift timesheet and weekly hours summary.',
    stack: 'Next.js, Supabase, Geolocation API',
    github: 'https://github.com/malakblm/clockin',
    image: null,
  },
]


