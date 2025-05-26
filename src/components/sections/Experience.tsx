import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '@/types';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  items: ExperienceType[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Expérience Professionnelle
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Mon parcours professionnel et mes réalisations
          </p>
        </div>

        <div className="grid gap-8">
          {items.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 rounded-lg border",
                "bg-gray-50 dark:bg-gray-900",
                "border-gray-200 dark:border-gray-700",
                "hover:shadow-lg transition-shadow duration-300"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-full",
                  "bg-purple-50 dark:bg-purple-900/30",
                  "text-purple-600 dark:text-purple-400"
                )}>
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    {exp.period}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
