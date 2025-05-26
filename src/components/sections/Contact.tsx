import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            N'hésitez pas à me contacter pour toute opportunité
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className={cn(
            "p-6 rounded-lg border",
            "bg-gray-50 dark:bg-gray-900",
            "border-gray-200 dark:border-gray-700",
            "hover:shadow-lg transition-shadow duration-300"
          )}>
            <div className="flex items-center gap-4">
              <div className={cn(
                "p-3 rounded-full",
                "bg-blue-50 dark:bg-blue-900/30",
                "text-blue-600 dark:text-blue-400"
              )}>
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg border",
            "bg-gray-50 dark:bg-gray-900",
            "border-gray-200 dark:border-gray-700",
            "hover:shadow-lg transition-shadow duration-300"
          )}>
            <div className="flex items-center gap-4">
              <div className={cn(
                "p-3 rounded-full",
                "bg-purple-50 dark:bg-purple-900/30",
                "text-purple-600 dark:text-purple-400"
              )}>
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Téléphone
                </h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg border",
            "bg-gray-50 dark:bg-gray-900",
            "border-gray-200 dark:border-gray-700",
            "hover:shadow-lg transition-shadow duration-300"
          )}>
            <div className="flex items-center gap-4">
              <div className={cn(
                "p-3 rounded-full",
                "bg-green-50 dark:bg-green-900/30",
                "text-green-600 dark:text-green-400"
              )}>
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Localisation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full",
                "bg-gray-100 dark:bg-gray-700",
                "text-gray-600 dark:text-gray-400",
                "hover:bg-gray-200 dark:hover:bg-gray-600",
                "transition-colors duration-300"
              )}
            >
              {React.createElement(social.icon, { className: "w-6 h-6" })}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;