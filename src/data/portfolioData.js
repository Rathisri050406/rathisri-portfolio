// All content below is extracted directly from Rathisri R's resume.
// Nothing here is invented — sections with no resume data are simply left empty
// and the corresponding UI section hides itself.

export const portfolioData = {
  personal: {
    name: 'Rathisri R',
    headline: 'Computer Science Engineer | AI & ML',
    summary:
      'B.Tech CSE (Hons.) student specializing in AI & ML, GPA 9.52, with hands-on experience in Python, Django, React, and IoT/embedded systems. Published researcher (ISBN-certified) skilled in building end-to-end AI, full-stack, and IoT solutions.',
    phone: '+91 6380889148',
    email: 'rajarathisri@gmail.com',
    github: 'https://github.com/Rathisri050406',
    linkedin: 'https://linkedin.com/in/rathisri-r-528962322',
    location: 'Thanjavur, Tamil Nadu, India',
  },

  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering (Hons.) — AI & ML Specialization',
      institution: 'Periyar Maniammai Institute of Science and Technology',
      location: 'Thanjavur',
      duration: '2023 – 2027',
      specialization: 'Artificial Intelligence & Machine Learning',
      gpa: '9.52',
    },
  ],

  skills: {
    languages: ['C', 'Python', 'Java (OOP)'],
    web: ['HTML', 'CSS', 'JavaScript', 'React', 'Django (REST APIs)', 'WebSockets', 'JWT Auth'],
    iotHardware: [
      'ESP32',
      'ESP32-CAM',
      'Arduino',
      'LiDAR',
      'Ultrasonic Sensors',
      'DHT Sensors',
      'Servo Control',
    ],
    csFundamentals: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS'],
    tools: ['Git/GitHub', 'Linux', 'ThingSpeak', 'MATLAB', 'VS Code'],
  },

  projects: [
    {
      title: 'AI-Based Cotton Harvesting Machine',
      category: 'AI / IoT',
      description:
        'Engineered an ESP32-CAM AI vision system to detect and classify ripe cotton bolls, integrated with a robotic arm, vacuum suction, and LiDAR/ultrasonic obstacle avoidance.',
      technologies: ['ESP32-CAM', 'Computer Vision', 'LiDAR', 'Ultrasonic Sensors', 'Robotics'],
    },
    {
      title: 'AI Chatbot Web Application',
      category: 'Web',
      description:
        'Built a full-stack chatbot using Django and JavaScript with Gemini/OpenAI API integration, JWT authentication, an admin dashboard, and real-time chat via WebSockets.',
      technologies: ['Django', 'JavaScript', 'Gemini/OpenAI API', 'JWT', 'WebSockets'],
    },
    {
      title: 'Neuro Cardiac Arrest Monitoring System',
      category: 'AI / IoT',
      description:
        'Developed an IoT-based system tracking heart rate and neurological signals with automated real-time alerts for critical anomalies; published as an ISBN-certified paper.',
      technologies: ['IoT', 'Sensors', 'Real-time Alerts'],
    },
    {
      title: 'Smart Parking System (IoT)',
      category: 'AI / IoT',
      description:
        'Built an Arduino-based real-time parking slot detection system with servo gate control, LCD status display, and ThingSpeak cloud monitoring.',
      technologies: ['Arduino', 'Servo Control', 'LCD', 'ThingSpeak'],
    },
    {
      title: 'LFU Cache Implementation',
      category: 'Systems',
      description:
        'Implemented an LFU cache in Python using a HashMap and Doubly Linked List, achieving O(1) time complexity for get/put operations.',
      technologies: ['Python', 'Data Structures', 'Algorithms'],
    },
  ],

  // No internship / employment history is present in the resume — kept empty
  // so the Experience section and its nav link hide automatically.
  experience: [],

  certifications: [
    {
      name: 'Robotics and IoT Course',
      issuer: 'Arduino, ESP32 & embedded systems design',
    },
    {
      name: 'AI Chatbot Development',
      issuer: 'Vdart Technologies Pvt Ltd, Trichy',
    },
    {
      name: 'Web Development',
      issuer: 'Django, HTML, JS',
    },
    {
      name: 'Data Structures Using C',
      issuer: null,
    },
    {
      name: 'Typewriting (English & Tamil)',
      issuer: 'Junior & Senior — Distinction',
    },
    {
      name: 'Hindi Language',
      issuer: 'All 8 Levels Completed',
    },
  ],

  achievements: [
    {
      title: 'TANCAM Women Hackathon',
      detail: 'Selected among Top 50 teams out of 1000+ teams',
    },
  ],

  publications: [
    {
      title: 'Neuro Cardiac Arrest Monitoring System',
      detail: 'ISBN Certified Publication',
    },
  ],

  languages: [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Proficient' },
  ],

  softSkills: ['Problem-Solving', 'Analytical Thinking', 'Collaboration', 'Communication', 'Adaptability'],
};
