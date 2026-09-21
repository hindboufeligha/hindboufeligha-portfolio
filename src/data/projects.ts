import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'msc-thesis',
    title: 'Temporal Behaviour of Compute Resource Usage',
    category: 'Research',
    description:
      'Analysing the temporal behaviour of CPU utilisation in large-scale computing systems using statistical, nonlinear, and complexity-based methods.',
    technologies: [
      'Python',
      'Time-Series Analysis',
      'Statistical Analysis',
      'Nonlinear Dynamics',
    ],
  },
  {
    id: 'personalized-education',
    title: 'Machine Learning for Personalized Education',
    category: 'Machine Learning',
    description:
      'Developed models for Task 1 of the NeurIPS 2020 Educational Challenge to predict students’ correctness on mathematics questions using historical performance and question features, implementing a logistic regression baseline and a feed-forward neural network.',
    technologies: ['Python', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy'],
  },

  {
    id: 'smart-hospital',
    title: 'Smart Hospital: Hospital Management System',
    category: 'Software Engineering',
    description:
      'Designed and developed a hospital management system comprising three Android applications for patients, doctors, and staff, integrated with a web platform and real-time backend services for appointments, medical records, and notifications.',
    technologies: [
      'Java',
      'Android Studio',
      'Firebase',
      'SQLite',
      'REST APIs',
      'Google Maps API',
    ],
  },

  {
    id: 'e-food',
    title: 'E-Food: Food Ordering Android Application',
    category: 'Software Engineering',
    description:
      'Developed an Android food ordering application with real-time order management and updates using Firebase services.',
    technologies: [
      'Java',
      'Android',
      'Firebase Realtime Database',
      'Firebase Storage',
      'Firebase Notifications',
    ],
  },
  {
    id: 'my-manager',
    title: 'My Manager: Task Management Android Application',
    category: 'Software Engineering',
    description:
      'Developed an Android application for students to create, track, and manage tasks, with persistent data storage using Firebase Firestore.',
    technologies: ['Java', 'Android', 'Firebase Firestore'],
  },
]
