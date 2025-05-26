import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  category: string;
  date: string;
  demo?: string;
}

export interface Category {
  title: string;
  icon: LucideIcon;
  skills: string[];
  description: string;
}

export interface Education {
  id?: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  date?: string;
  title?: string;
  location?: string;
}

export interface Experience {
  id?: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  date?: string;
  location?: string;
  role?: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  date: string;
  link: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface Reference {
  id: string;
  name: string;
  title: string;
  email: string;
  linkedin: string;
  phone: string;
}