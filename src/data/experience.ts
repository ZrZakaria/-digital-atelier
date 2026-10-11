export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'cnesten',
    title: 'PFA Internship — LIMS Development',
    organization: 'CNESTEN',
    period: 'August – September 2026',
    type: 'Internship',
    description:
      'Contributed to the development of a Laboratory Information Management System for the Gamma Spectrometry (GSA) laboratory at CNESTEN in Kenitra. The system digitizes the complete lab workflow from demande submission through sample reception, preparation, analysis, and report generation.',
    highlights: [
      'Designed a modular full-stack architecture to digitize the LIMS cycle: requests, reception, preparation, analysis and reports.',
      'Developed REST APIs with Spring Boot, JPA/Hibernate and PostgreSQL, including business validation, state transitions, traceability and Excel file management.',
      'Implemented ISO 11929 calculation engine for activity determination with decision thresholds and detection limits.',
      'Used Git and GitHub for version control and group collaboration in a monorepo setting.',
    ],
    technologies: ['Java 25', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'PostgreSQL', 'Angular', 'TypeScript', 'Docker', 'Gradle'],
  },
  {
    id: 'abirnet',
    title: 'Introductory Internship',
    organization: 'ABIRNET',
    period: 'July 2025',
    type: 'Internship',
    description:
      'Worked on the UI/UX redesign and full-stack development of the ABIRNET company website, focusing on responsive design, security hardening, and modern interface patterns.',
    highlights: [
      'Redesigned the website UI/UX on Figma: created mockups, established a design system, and produced UML models.',
      'Developed a responsive frontend interface and a PHP/MySQL backend with protection against XSS and SQL injection.',
      'Integrated modern web animations and interactive elements to improve user engagement.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Figma', 'Particles.js', 'Swiper.js'],
  },
];
