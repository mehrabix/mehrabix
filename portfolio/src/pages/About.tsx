import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <div className="mt-6 text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              I'm a Full-stack Software Engineer with 3+ years of experience working with technologies
              such as Java, Spring Boot, Node.js, React, Next.js, Angular, and others. I have
              experience in developing and integrating frontend and backend systems and designing
              scalable architectures.
            </p>
            <p>
              I'm also skilled in building and managing CI/CD pipelines, and I'm familiar with
              managing Linux servers and services. My passion for technology drives me to stay
              up-to-date with the latest developments in the industry and continuously improve my
              skills.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: 'Frontend Development',
                skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
              },
              {
                category: 'Backend Development',
                skills: ['Node.js', 'Java', 'Spring Boot', 'Express.js', 'NestJS'],
              },
              {
                category: 'DevOps & Tools',
                skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
              },
              {
                category: 'Databases',
                skills: ['MongoDB', 'PostgreSQL', 'Oracle', 'Redis'],
              },
              {
                category: 'Testing',
                skills: ['Jest', 'Playwright', 'JUnit', 'TestNG'],
              },
              {
                category: 'Soft Skills',
                skills: ['Team Leadership', 'Problem Solving', 'Communication', 'Agile'],
              },
            ].map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 