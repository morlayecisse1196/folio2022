// src/data/index.ts
import {
    NavItem,
    Project,
    Category,
    SocialLink,
    Education,
    Experience,
    Certification,
    Contact
  } from '@/types';
  import {
    GithubIcon,
    LinkedinIcon,
    Mail,
    Layout,
    Server,
    Database,
    Code,

  } from 'lucide-react';
  
  export const navItems: NavItem[] = [
    { label: 'Accueil', href: '#home' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Formation', href: '#education' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];
  
  export const projectList: Project[] = [
    {
      id: 'wave-senegal-flutter',
      title: 'Application mobile Wave Sénégal',
      description: 'Application mobile de transfert d\'argent et paiements développée avec Flutter, offrant une expérience utilisateur native et des fonctionnalités avancées.',
      tech: ['Flutter', 'Dart', 'GetX', 'MongoDB', 'Firebase', 'PostgreSQL'],
      link: 'https://github.com/morlayecisse1196',
      category: 'Mobile App',
      image: 'images/projects/wave.png',
      date: 'Octobre 2024',
      demo: ''
    },
    {
      id: 'api-reseau-social',
      title: 'API de réseau social',
      description: 'Développement d\'une API RESTful pour une application de réseau social avec authentification et gestion des utilisateurs.',
      tech: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Docker', 'Render'],
      link: 'https://github.com/morlayecisse1196',
      category: 'Backend',
      image: 'images/projects/social.png',
      date: 'Août 2024',
      demo: ''
    },
    {
      id: 'api-gestion-apprenants',
      title: 'API de gestion des apprenants',
      description: 'Système complet de gestion des apprenants avec authentification et gestion des présences.',
      tech: ['Laravel', 'Spring Boot', 'Docker', 'Swagger', 'Firebase', 'PostgreSQL', 'Neon', 'Render'],
      link: 'https://github.com/morlayecisse1196',
      category: 'Backend',
      image: 'images/projects/education.png',
      date: 'Juillet 2024',
      demo: ''
    },
    {
      id: 'frontend-reseau-social',
      title: 'Frontend réseau social',
      description: 'Interface utilisateur moderne pour une application de réseau social avec des fonctionnalités de partage et d\'interaction.',
      tech: ['React.js', 'Axios', 'MongoDB', 'Docker', 'Render'],
      link: 'https://github.com/morlayecisse1196',
      category: 'Frontend',
      image: 'images/projects/social-front.png',
      date: 'Octobre 2024',
      demo: ''
    },
    {
      id: 'gestion-cargaison',
      title: 'Application de gestion de cargaisons',
      description: 'Système complet de gestion des cargaisons import/export avec suivi en temps réel.',
      tech: ['HTML', 'Tailwind CSS', 'TypeScript', 'PHP', 'PostgreSQL'],
      link: 'https://github.com/morlayecisse1196',
      category: 'Full Stack',
      image: 'images/projects/cargo.png',
      date: 'Avril 2024',
      demo: ''
    },
    {
      id: 'react-Ecommerce',
    title: 'Ecommerce Web Appl',
      description: 'Cette version web offre aux utilisateurs la possibilité d explorer une boutique en ligne et d effectuer leurs achats facilement depuis n\'importe quel appareil connecté à Internet.',
      tech: ['React', 'Framotion', 'Tailwind'],
      link: 'https://github.com/Cheikhydiop/E-commerce',
      category: 'Web App',
      image: 'images/projects/ecommerce.png',
      date: 'Octobre 2024',
      demo:"https://cheikhdiop.netlify.app/"
    },
    {
      id: 'wave-senegal-refonte',
      title: 'Refonte Wave Sénégal',
      description: 'Amélioration de la plateforme Wave Sénégal avec de nouvelles fonctionnalités innovantes incluant un système d\'envoi programmé et périodique automatique pour optimiser les transactions des utilisateurs.',
      tech: ['Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'Swagger'],
      link: 'https://github.comoney_transfert_angular',
      category: 'Full Stack',
      image: 'images/projects/wave1.png',
      date: 'Novembre 2024'
    },
    {
      id: 'gestion-tailleurs-react',
      title: 'Gestion des Tailleurs',
      description: 'Application web de gestion des tailleurs avec React JS. En tant que Chef de projet, direction de l\'équipe de développement et implémentation des meilleures pratiques pour une expérience utilisateur optimale.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'GitHub'],
      link: 'https://github.com/Cheikhydiop/front-react_social',
      category: 'Frontend',
      image: 'images/projects/tailor.png',
      date: 'Octobre 2024',
      demo: 'https://tailor-hazt.onrender.com/api-docs/'
    },
    {
      id: 'gestion-dettes',
      title: 'Gestion des Dettes Boutique',
      description: 'Système de gestion des dettes avec authentification sécurisée, gestion des produits et utilisateurs. Application des principes SOLID et mise en place d\'une architecture robuste.',
      tech: ['Java', 'Docker', 'Swagger', 'PostgreSQL', 'GitHub', 'Neon'],
      link: 'https://github.com/Cheikhydiop/spring-jpa',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Septembre 2024'
    },
    {
      id: 'gestion-apprenants-spring',
      title: 'Gestion des Apprenants',
      description: 'Système de gestion de presence des apprenants et des evenements de ODC. Application des principes SOLID et mise en place d\'une architecture robuste.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'Docker', 'Render', 'Swagger', 'PostgreSQL', 'GitHub', 'Neon'],
      link: 'https://github.com/Cheikhydiop/Gstudent',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Septembre 2024',
      demo:"https://diop-cheikhr.onrender.com/swagger/index.html#/"
    },
    {
      id: 'gestion-apprenants-avril',
      title: 'Gestion des Apprenants',
      description: 'Application de gestion des apprenants des emplois du temps et de leurs presences. développée en tant que Développeur FullStack',
      tech: ['JavaScript', 'PHP', 'Tailwind CSS', 'MongoDB', 'CSV', 'Figma'],
      link: 'https://github.comf/avatarodc/E221',
      category: 'Web App',
      image: 'images/projects/odc.png',
      date: 'Avril 2024'
    },
    {
      id: 'gestion-dettes-boutique',
      title: 'Gestion des Dettes Boutique',
      description: 'Application backend de gestion des dettes d\'une boutique avec notifications SMS',
      tech: ['Laravel', 'Firebase', 'MongoDB', 'PostgreSQL', 'Infobip/Twilio', 'Swagger', 'Docker', 'Render', 'Figma'],
      link: '',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Août 2024'
    },
    {
      id: 'gestion-apprenants-odc',
      title: 'Gestion des Apprenants React',
      description: 'Application fullstack de gestion des apprenants avec stack moderne',
      tech: ['React.js', 'Node.js', 'Firebase', 'PostgreSQL', 'Swagger', 'Docker', 'Render'],
      link: '',
      category: 'Full Stack',
      image: 'images/projects/odc.png',
      date: 'Octobre 2024'
    },
    {
      id: 'transfert-argent',
      title: 'Application de Transfert d\'Argent',
      description: 'Clone de Wave - Application de transfert d\'argent',
      tech: ['Angular.js', 'MongoDB', 'Swagger', 'Docker', 'Render'],
      link: 'https://github.com/fmoney_transfert_angular',
      category: 'Full Stack',
      image: 'images/projects/Finance.png',
      date: 'Octobre 2024'
    },
    {
      id: 'gestion-apprenants-backend',
      title: 'Backend Gestion Apprenants',
      description: 'Application backend robuste pour la gestion des apprenants',
      tech: ['Laravel', 'Firebase', 'PostgreSQL', 'Swagger', 'Docker', 'Render'],
      link: 'https://github.com/Cheikhydiop/G-scolaire',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Septembre 2024'

    }
  ];
  
  export const skillCategories: Category[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Développement d'interfaces utilisateur modernes et réactives",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "React.js",
        "Angular",
        "Flutter",
        "Dart"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Développement de serveurs et APIs robustes",
      skills: [
        "Node.js",
        "Express.js",
        "Laravel",
        "Java",
        "Spring Boot",
        "Spring Security",
        "PHP"
      ]
    },
    {
      title: "Bases de données",
      icon: Database,
      description: "Gestion et optimisation des données",
      skills: [
        "Firebase",
        "PostgreSQL",
        "MongoDB",
        "MySQL"
      ]
    },
    {
      title: "UI/UX & Outils",
      icon: Code,
      description: "Outils de design et développement",
      skills: [
        "Figma",
        "Wireframe",
        "Maquettage",
        "Prototypage",
        "Docker",
        "Render",
        "Vercel",
        "Cloudinary",
        "AWS"
      ]
    },
    {
      title: "DevOps & Architecture",
      icon: Code,
      description: "Outils et méthodologies de développement",
      skills: [
        "Git & GitHub",
        
        "Docker & Docker Hub",
        "Architecture MVC",
        "Architecture distribuée",
        "Architecture monolithique",
        "Méthodologie Agile",
        "API REST",
        
      ]
    },
      {
      title: "Outils de Test et Marketing",
      icon: Code,
      description: "Outils pour tester les API et gérer des projets de marketing.",
      skills: [
      
        "Postmane",
        "Thunder Client",
        "Swagger",
         "figma"
        
      ]
    },
    {
      title: "Outils de Gestion de Projet",
      icon: Code,
      description: "Outils essentiels pour la gestion de projets Agile et Scrum.",
      "skills": [
        "Trello",
        "Jira"
      ]
    }
    
  ];
  
  export const educationList: Education[] = [
    {
      degree: 'Formation Développement Web/Mobile',
      institution: 'École du code Sonatel Academy',
      period: '2023-2024',
      description: 'Formation intensive en développement web et mobile, pratiques agiles, et architecture logicielle.',
      location: 'Dakar, Sénégal'
    },
    {
      degree: 'Licence en Développement Web/Mobile',
      institution: 'Ecole 221',
      period: '2023-2024',
      description: 'Formation approfondie en uix, algorithmes et structures de données.',
      location: 'Dakar, Sénégal'
    },
    {
      degree: 'Licence en Développement Web',
      institution: 'Universite Alioune Diop (UADB)',
      period: '2021-2023',
      description: 'Formation approfondie en algorithmes, structures de données et gestion de projet.',
      location: 'Dakar, Sénégal'
    }
  ];
  
  export const experienceList: Experience[] = [
    {
      title: 'Stage développeur fullstack',
      company: 'Orange Digital Center',
      period: 'Février 2024 - Décembre 2024',
      location: 'Dakar, Sénégal',
      description: [
        'Développement d\'applications web modernes',
        'Travail en équipe avec méthodologie Agile/Scrum',
        'Participation à des projets innovants dans le domaine digital'
      ]
    }
  ];
  
  export const certificationList: Certification[] = [

  ];
  
  export const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/morlayecisse1196',
      icon: GithubIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/morlaye-cisse-754462228',
      icon: LinkedinIcon
    },
    {
      name: 'Email',
      url: 'mailto:morlaye.cisse@uadb.edu.sn',
      icon: Mail
    }
  ];
  
  export const contactInfo: Contact = {
    email: 'morlaye.cisse@uadb.edu.sn',
    phone: '+221 78 208 69 29',
    location: 'Tambacounda, Sénégal'
  };

  export const education: Education[] = [
    {
      degree: 'Master 2 Systèmes d\'Information',
      institution: 'Université Alioune Diop de Bambey (UADB)',
      period: '2024 - Présent',
      description: 'Formation approfondie en systèmes d\'information et développement logiciel'
    },
    {
      degree: 'Baccalauréat S2',
      institution: 'Lycée Mame Cheikh MBaye',
      period: '2020',
      description: 'Formation scientifique'
    }
  ];

  export const experience: Experience[] = [
    {
      title: 'Développeur Full-Stack',
      company: 'ORANGE DIGITAL CENTER (UADB)',
      period: 'Février 2024 - Décembre 2024',
      description: [
        'Conception d\'applications web innovantes',
        'Développement de projets dans le digital : réseaux sociaux, éducation, gestion'
      ]
    },
    {
      title: 'Analyste Concepteur',
      company: 'TEQLAB',
      period: 'Juillet 2023',
      description: [
        'Analyse des besoins',
        'Rédaction de spécifications fonctionnelles',
        'Modélisation UML et création de diagrammes'
      ]
    }
  ];