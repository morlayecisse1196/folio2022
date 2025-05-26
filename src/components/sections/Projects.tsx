import React from 'react';
import { Code2, ExternalLink, Github, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectsProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Mes réalisations et projets personnels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative p-6 rounded-lg border",
                "bg-white dark:bg-gray-800",
                "border-gray-200 dark:border-gray-700",
                "hover:shadow-lg transition-all duration-300"
              )}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "p-3 rounded-full",
                      "bg-blue-50 dark:bg-blue-900/30",
                      "text-blue-600 dark:text-blue-400"
                    )}
                  >
                    <Code2 className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        "bg-gray-100 dark:bg-gray-700",
                        "text-gray-700 dark:text-gray-300"
                      )}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </motion.div>
                  <div className="flex gap-2">
                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "p-2 rounded-full",
                          "bg-gray-100 dark:bg-gray-700",
                          "text-gray-600 dark:text-gray-400",
                          "hover:bg-gray-200 dark:hover:bg-gray-600",
                          "transition-colors duration-300"
                        )}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "p-2 rounded-full",
                          "bg-gray-100 dark:bg-gray-700",
                          "text-gray-600 dark:text-gray-400",
                          "hover:bg-gray-200 dark:hover:bg-gray-600",
                          "transition-colors duration-300"
                        )}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;