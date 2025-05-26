import React from 'react';
import { Layout, Server, Database, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/GlowingCard';
import { Section } from '../ui/Section';
import { skillCategories } from '@/data';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Compétences
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Mes compétences techniques et professionnelles
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 rounded-lg border",
                "bg-white dark:bg-gray-800",
                "border-gray-200 dark:border-gray-700",
                "hover:shadow-lg transition-shadow duration-300"
              )}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className={cn(
                  "p-3 rounded-full mb-4",
                  "bg-blue-50 dark:bg-blue-900/30",
                  "text-blue-600 dark:text-blue-400"
                )}>
                  {React.createElement(category.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm",
                      "bg-gray-100 dark:bg-gray-700",
                      "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;