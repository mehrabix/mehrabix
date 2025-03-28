import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Demis Holding',
    period: 'December 2021 - Present',
    location: 'Isfahan, Iran',
    description: 'Frontend Software Engineer at a leading technology company, focusing on micro-frontend architecture, automation, and team leadership.',
    technologies: ['React', 'TypeScript', 'Micro Frontends', 'Webpack', 'Kubernetes', 'GitLab CI'],
    link: 'https://demisco.com/en/'
  },
  {
    title: 'Easymed',
    period: '2021 - 2022',
    location: 'Remote',
    description: 'Developed a comprehensive SaaS platform for electronic healthcare services, including EHR, e-prescribing, and health monitoring systems.',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
    link: 'https://easymed.ir/'
  },
  {
    title: 'Darmanmobile',
    period: '2020 - 2021',
    location: 'Remote',
    description: 'Led development for Iran Insurance Company\'s mobile platform, handling major national projects across various sectors.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Node.js'],
    link: 'https://darmanmobile.iraninsurance.ir/'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Experience & Projects
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            A collection of my professional experience and notable projects
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                  {project.period} | {project.location}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80"
              >
                Visit Website
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 