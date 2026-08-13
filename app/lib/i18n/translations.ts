export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      links: [
        { label: 'Enfoque & IA',    href: '#expertise' },
        { label: 'Ciclo & Dominio', href: '#sistemas'  },
        { label: 'Proyectos',      href: '#proyectos' },
        { label: 'Trayectoria',    href: '#experiencia' },
        { label: 'Contacto',       href: '#contacto'   },
      ],
      cta: 'Contacto',
    },
    hero: {
      badge: 'Disponible · Software Developer',
      line1: 'Ingeniería de software',
      line2: '',
      desc: 'Software Developer con +8 años de experiencia en el <strong>ciclo completo de desarrollo</strong>. Utilizo la IA como acelerador potenciado por mi criterio técnico para construir soluciones robustas y escalables.',
      location: 'Disponible · Remoto',
      btnProjects: 'Ver proyectos',
      btnContact: 'Contactar →',
    },
    expertise: {
      kicker: 'mi enfoque',
      titleLine1: 'Criterio técnico',
      titleLine2: 'potenciado por IA.',
      cards: [
        {
          num: '01',
          title: 'Ciclo completo',
          accent: 'End-to-End',
          desc: 'Aporto visión integral en todas las etapas de un sistema: relevamiento de requerimientos, diseño de arquitectura, desarrollo, pruebas y despliegue en producción. Mi trabajo abarca mucho más que solo escribir código.',
          tags: ['TypeScript', 'React', 'Node.js', 'REST APIs'],
        },
        {
          num: '02',
          title: 'IA como',
          accent: 'Acelerador',
          desc: 'Utilizo la Inteligencia Artificial como un co-piloto e instructor técnico. Me permite acelerar la ejecución sin sacrificar la calidad, manteniendo el foco en el diseño, la escalabilidad y la arquitectura del sistema.',
          tags: ['Claude 3.7', 'ChatGPT', 'Cursor', 'Vercel AI SDK', 'Copilot', 'Prompt Eng'],
        },
        {
          num: '03',
          title: 'Experiencia que',
          accent: 'evalúa y dirige',
          desc: 'Mis +8 años de trayectoria me dan el criterio para saber exactamente qué pedirle a la IA, cómo auditar sus respuestas y cómo transformar su producción en código seguro, limpio y listo para escalar.',
          tags: ['Arquitectura', 'Multi-tenant', 'Refactor', 'Code Review', 'CI/CD', '+8 Años'],
        },
      ],
    },
    stack: {
      kicker: 'tecnologías',
      titleLine1: 'Herramientas y',
      titleLine2: 'tecnologías.',
      groups: [
        {
          label: 'Frontend',
          items: ['Angular', 'React', 'TypeScript', 'CSS Modules'],
        },
        {
          label: 'Backend',
          items: ['Node.js', 'REST APIs', 'Arquitectura Multi-tenant'],
        },
        {
          label: 'Mobile',
          items: ['Ionic', 'React Native', 'Capacitor', 'Expo'],
        },
        {
          label: 'Datos & Cloud',
          items: ['Firebase', 'Supabase', 'MQTT'],
        },
        {
          label: 'Agentes LLM',
          items: ['Claude', 'ChatGPT', 'Cursor', 'Copilot', 'Vercel AI SDK'],
        },
        {
          label: 'Herramientas & Ciclo',
          items: ['Git', 'GitHub', 'CI/CD', 'Vercel', 'Postman'],
        },
      ],
    },
    sistemas: {
      kicker: 'capacidades',
      titleLine1: 'Dominio del ciclo de',
      titleLine2: 'desarrollo de software.',
      items: [
        { label: 'Relevamiento & Arquitectura',    tags: 'diseño de sistemas · modelos de datos · escalabilidad' },
        { label: 'Desarrollo de Software',    tags: 'web · mobile · apis rest · microservicios' },
        { label: 'Mantenimiento & Evolución',    tags: 'mejora continua · documentación · observabilidad' },
        { label: 'Testing & Despliegue',            tags: 'ci/cd · pruebas · mantenimiento · cloud' },
      ],
    },
    proyectos: {
      kicker: 'proyectos destacados',
      titleLine1: 'Evidencia de mi',
      titleLine2: 'trabajo y criterio.',
      items: [
        {
          name: 'Wallit',
          desc: 'Aplicación de finanzas personales para iOS y Android. Diseño end-to-end con presupuestos, categorización avanzada y reportes dinámicos.',
          tags: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
          theme: 'wallit',
        },
        {
          name: 'Plataforma Multi-tenant IoT',
          desc: 'Plataforma empresarial de gestión de dispositivos IoT con monitoreo en tiempo real, dashboards interactivos, reporte de métricas y alertas configurables.',
          tags: ['Angular', 'Ionic', 'MQTT', 'Node.js'],
          theme: 'stock',
        },
      ],
    },
    experiencia: {
      kicker: 'trayectoria',
      titleLine1: '+8 años',
      titleLine2: 'de experiencia.',
      items: [
        {
          period: '2018 — presente',
          role: 'Software Developer · Freelance',
          company: 'Independiente · Remoto',
          desc: 'Desarrollo end-to-end de sistemas web y mobile. Integración de IA en el flujo de desarrollo para optimizar tiempos y maximizar la calidad del código.',
        },
        {
          period: '2020 — 2026 · 6 años',
          role: 'Desarrolladora de Software de Plataforma IoT',
          company: 'Plataforma Multi-tenant IoT',
          desc: 'Lideré el ciclo completo de la plataforma: desde el relevamiento de requerimientos y arquitectura multi-tenant hasta dashboards en tiempo real y generación de reportes.',
        },
      ],
    },
    stats: [
      { value: '+8',  label: 'años de experiencia' },
      { value: '+20', label: 'proyectos entregados' },
      { value: '3',   label: 'industrias: fintech, IoT, e-commerce' },
      { value: '100%', label: 'remoto y disponible' },
    ],
    proceso: {
      kicker: 'cómo trabajo',
      titleLine1: 'Del problema',
      titleLine2: 'al sistema.',
      steps: [
        {
          num: '01',
          title: 'Diagnóstico',
          desc: 'Me contás el problema o la idea. Hablo tanto con perfiles técnicos como con dueños de negocio — no hace falta que sepas de tecnología para explicarme qué necesitás.',
        },
        {
          num: '02',
          title: 'Propuesta & Arquitectura',
          desc: 'Diseño la solución: qué sistema construir, con qué tecnología y en cuánto tiempo. Te presento un plan claro con alcance definido y sin sorpresas.',
        },
        {
          num: '03',
          title: 'Desarrollo & Entrega',
          desc: 'Construyo de forma iterativa con revisiones frecuentes. Entrego código limpio, documentado y corriendo en producción — y me quedo disponible para el soporte post-lanzamiento.',
        },
      ],
    },
    contacto: {
      kicker: 'contacto',
      titleLine1: '¿Tenés un proyecto',
      titleLine2: 'o desafío técnico?',
      sub: 'Ponete en contacto para conversar sobre oportunidades de colaboración, desarrollo o consultoría.',
      placeholderName:    'Tu nombre',
      placeholderEmail:   'Email',
      placeholderMessage: 'Contame sobre el proyecto o consulta técnica…',
      btn: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Mensaje enviado! Me pondré en contacto a la brevedad.',
      error: 'Algo salió mal. Escribime directamente a ana@suarez.dev',
    },
    footer: {
      copy: '© 2026 Ana Suárez · Ingeniería de Sistemas',
      links: [
        { label: 'GitHub',   href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  },

  en: {
    nav: {
      links: [
        { label: 'Approach & AI',    href: '#expertise' },
        { label: 'Lifecycle & Domain', href: '#sistemas'  },
        { label: 'Projects',         href: '#proyectos' },
        { label: 'Experience',       href: '#experiencia' },
        { label: 'Contact',          href: '#contacto'   },
      ],
      cta: 'Contact',
    },
    hero: {
      badge: 'Available · Software Developer',
      line1: 'Software engineering',
      line2: '',
      desc: 'Software Developer with +8 years of experience across the <strong>complete development lifecycle</strong>. I leverage AI as an accelerator driven by technical judgment to build robust, scalable solutions.',
      location: 'Available · Remote',
      btnProjects: 'View projects',
      btnContact: 'Get in touch →',
    },
    expertise: {
      kicker: 'my approach',
      titleLine1: 'Technical judgment',
      titleLine2: 'powered by AI.',
      cards: [
        {
          num: '01',
          title: 'Full Lifecycle',
          accent: 'End-to-End',
          desc: 'I bring a comprehensive vision across all stages of a system: requirements gathering, architecture design, development, testing, and production deployment. My work goes far beyond writing code.',
          tags: ['TypeScript', 'React', 'Node.js', 'REST APIs'],
        },
        {
          num: '02',
          title: 'AI as an',
          accent: 'Accelerator',
          desc: 'I use Artificial Intelligence as a technical co-pilot and instructor. It enables me to accelerate execution without sacrificing quality, keeping the core focus on system design and architecture.',
          tags: ['Claude 3.7', 'ChatGPT', 'Cursor', 'Vercel AI SDK', 'Copilot', 'Prompt Eng'],
        },
        {
          num: '03',
          title: 'Experience to',
          accent: 'evaluate & lead',
          desc: 'My +8 years of experience give me the judgment to know exactly what to prompt, audit AI outputs, and turn generated code into secure, clean, production-ready solutions.',
          tags: ['Architecture', 'Multi-tenant', 'Refactoring', 'Code Review', 'CI/CD', '+8 Years'],
        },
      ],
    },
    stack: {
      kicker: 'technologies',
      titleLine1: 'Tools and',
      titleLine2: 'technologies.',
      groups: [
        {
          label: 'Frontend',
          items: ['Angular', 'React', 'TypeScript', 'CSS Modules'],
        },
        {
          label: 'Backend',
          items: ['Node.js', 'REST APIs', 'Multi-tenant Architecture'],
        },
        {
          label: 'Mobile',
          items: ['Ionic', 'React Native', 'Capacitor', 'Expo'],
        },
        {
          label: 'Data & Cloud',
          items: ['Firebase', 'Supabase', 'MQTT'],
        },
        {
          label: 'LLM Agents',
          items: ['Claude', 'ChatGPT', 'Cursor', 'Copilot', 'Vercel AI SDK'],
        },
        {
          label: 'Tools & Lifecycle',
          items: ['Git', 'GitHub', 'CI/CD', 'Vercel', 'Postman'],
        },
      ],
    },
    sistemas: {
      kicker: 'capabilities',
      titleLine1: 'Mastery of the software',
      titleLine2: 'development lifecycle.',
      items: [
        { label: 'Requirements & Architecture', tags: 'system design · data models · scalability' },
        { label: 'Software Development',         tags: 'web · mobile · rest apis · microservices' },
        { label: 'Maintenance & Evolution',      tags: 'continuous improvement · documentation · observability' },
        { label: 'Testing & Deployment',          tags: 'ci/cd · testing · maintenance · cloud' },
      ],
    },
    proyectos: {
      kicker: 'featured projects',
      titleLine1: 'Evidence of my',
      titleLine2: 'work and expertise.',
      items: [
        {
          name: 'Wallit',
          desc: 'Personal finance application for iOS and Android. End-to-end design featuring budgeting, advanced categorization, and dynamic reporting.',
          tags: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
          theme: 'wallit',
        },
        {
          name: 'Multi-tenant IoT Platform',
          desc: 'Enterprise IoT device management platform featuring real-time monitoring, interactive dashboards, metric reporting, and custom alerts.',
          tags: ['Angular', 'Ionic', 'MQTT', 'Node.js'],
          theme: 'stock',
        },
      ],
    },
    experiencia: {
      kicker: 'experience',
      titleLine1: '+8 years',
      titleLine2: 'building.',
      items: [
        {
          period: '2018 — present',
          role: 'Software Developer · Freelance',
          company: 'Independent · Remote',
          desc: 'End-to-end development of web and mobile systems. AI integration into the workflow to streamline delivery and elevate code quality.',
        },
        {
          period: '2020 — 2026 · 6 years',
          role: 'IoT Platform Software Developer',
          company: 'Multi-tenant IoT Platform',
          desc: 'Led the complete lifecycle: from requirements gathering and multi-tenant architecture to real-time dashboards and analytics reporting.',
        },
      ],
    },
    stats: [
      { value: '+8',   label: 'years of experience' },
      { value: '+20',  label: 'projects delivered' },
      { value: '3',    label: 'industries: fintech, IoT, e-commerce' },
      { value: '100%', label: 'remote & available' },
    ],
    proceso: {
      kicker: 'how I work',
      titleLine1: 'From problem',
      titleLine2: 'to system.',
      steps: [
        {
          num: '01',
          title: 'Discovery',
          desc: "Tell me about the problem or idea. I work with both technical profiles and business owners — you don't need to know technology to explain what you need.",
        },
        {
          num: '02',
          title: 'Proposal & Architecture',
          desc: 'I design the solution: what system to build, which technology to use, and how long it will take. You get a clear plan with a defined scope and no surprises.',
        },
        {
          num: '03',
          title: 'Development & Delivery',
          desc: 'I build iteratively with frequent check-ins. I deliver clean, documented code running in production — and stay available for post-launch support.',
        },
      ],
    },
    contacto: {
      kicker: 'contact',
      titleLine1: 'Have a project or',
      titleLine2: 'technical challenge?',
      sub: 'Get in touch to discuss collaboration, engineering, or technical advisory opportunities.',
      placeholderName:    'Your name',
      placeholderEmail:   'Email',
      placeholderMessage: 'Tell me about your project or technical inquiry…',
      btn: 'Send message',
      sending: 'Sending…',
      success: 'Message sent! I will get back to you shortly.',
      error: 'Something went wrong. Write me directly at ana@suarez.dev',
    },
    footer: {
      copy: '© 2026 Ana Suárez · Systems Engineering',
      links: [
        { label: 'GitHub',   href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  },
} as const

