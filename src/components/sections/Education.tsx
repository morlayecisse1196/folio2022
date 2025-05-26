import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Education as EducationType } from '@/types';
import { cn } from '@/lib/utils';

interface EducationProps {
  items: EducationType[];
}

const EducationSection: React.FC<EducationProps> = ({ items }) => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Formation
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Mon parcours académique et mes certifications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 rounded-lg border",
                "bg-white dark:bg-gray-800",
                "border-gray-200 dark:border-gray-700",
                "hover:shadow-lg transition-shadow duration-300"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-full",
                  "bg-blue-50 dark:bg-blue-900/30",
                  "text-blue-600 dark:text-blue-400"
                )}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                    {item.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
