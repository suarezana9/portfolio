export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      links: [
        { label: 'Enfoque',     href: '#expertise'   },
        { label: 'Ciclo',       href: '#sistemas'     },
        { label: 'Proyectos',   href: '#proyectos'    },
        { label: 'Trayectoria', href: '#experiencia'  },
        { label: 'Contacto',    href: '#contacto'     },
      ],
      cta: 'Contacto',
    },
    hero: {
      badge: 'Software Developer · Ingeniería de Sistemas',
      line1: 'Ingeniería de software',
      line2: '',
      desc: 'Recorro el <strong>ciclo completo de desarrollo</strong>: desde el relevamiento de requerimientos y el diseño de arquitectura hasta el despliegue en producción. Uso la IA para acelerar la ejecución — mi foco real está en el diseño y la calidad de la solución.',
      location: 'Disponible · Remoto',
      btnProjects: 'Ver proyectos',
      btnContact: 'Escríbeme →',
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
          desc: 'No soy solo desarrolladora de código: participo en el relevamiento de requerimientos, el diseño de la arquitectura, el desarrollo, las pruebas y el despliegue. Tengo visión integral de todas las etapas del sistema.',
          tags: ['Arquitectura', 'Relevamiento', 'Testing', 'CI/CD', 'Deploy'],
        },
        {
          num: '02',
          title: 'IA como',
          accent: 'acelerador',
          desc: 'Uso la IA como co-piloto técnico: me ayuda a iterar más rápido, explorar alternativas y mejorar la calidad del código. Pero la arquitectura, las decisiones de diseño y la evaluación del output son siempre míos.',
          tags: ['Claude', 'Cursor', 'Copilot', 'ChatGPT', 'Prompt Engineering'],
        },
        {
          num: '03',
          title: 'Criterio para',
          accent: 'dirigir la IA',
          desc: 'Mis 8 años de experiencia en todas las etapas del ciclo me dan el criterio para saber qué pedirle a la IA, cómo auditar lo que me devuelve y cómo convertirlo en código limpio, seguro y listo para escalar.',
          tags: ['Code Review', 'Refactor', 'Multi-tenant', 'Escalabilidad'],
        },
      ],
    },
    stack: {
      kicker: 'tecnologías',
      titleLine1: 'Herramientas con',
      titleLine2: 'las que trabajo.',
      groups: [
        {
          label: 'Frontend',
          items: ['Angular', 'React', 'TypeScript', 'CSS Modules'],
        },
        {
          label: 'Backend',
          items: ['Node.js', '.NET', 'REST APIs', 'Arquitectura Multi-tenant'],
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
      kicker: 'ciclo de desarrollo',
      titleLine1: 'Todas las etapas,',
      titleLine2: 'no solo el código.',
      items: [
        { label: 'Relevamiento & Arquitectura', tags: 'requerimientos · diseño de sistemas · modelos de datos' },
        { label: 'Desarrollo de Software',       tags: 'web · mobile · apis rest · componentes reutilizables' },
        { label: 'Testing & Despliegue',         tags: 'pruebas · ci/cd · cloud · monitoreo' },
        { label: 'Evolución & Mantenimiento',    tags: 'refactor · documentación · observabilidad · escalabilidad' },
      ],
    },
    proyectos: {
      kicker: 'proyectos',
      titleLine1: 'Lo que construí,',
      titleLine2: 'de punta a punta.',
      items: [
        {
          name: 'Wallit',
          desc: 'App de finanzas personales para iOS y Android. Diseño end-to-end: arquitectura, UX, desarrollo y publicación en stores.',
          tags: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
          theme: 'wallit',
        },
        {
          name: 'Plataforma Multi-tenant IoT',
          desc: 'Plataforma empresarial de gestión de dispositivos IoT. Lideré todas las etapas: arquitectura multi-tenant, desarrollo, dashboards en tiempo real y alertas configurables.',
          tags: ['Angular', 'Ionic', 'MQTT', '.NET'],
          theme: 'stock',
        },
        {
          name: 'Tempo Sushi',
          desc: 'Web de delivery gastronómico con catálogo de productos, filtros por categoría, galería y formulario de contacto. Uno de mis primeros proyectos completos end-to-end.',
          tags: ['Angular', 'Firebase', 'Vercel'],
          theme: 'sushi',
        },
      ],
    },
    stats: [
      { value: '+8',  label: 'años de experiencia' },
      { value: '+10', label: 'proyectos entregados' },
      { value: '3',   label: 'industrias: IoT, gastronomía, e-commerce' },
      { value: '100%', label: 'ciclo end-to-end' },
    ],
    proceso: {
      kicker: 'metodología',
      titleLine1: 'Cómo pienso',
      titleLine2: 'un sistema.',
      steps: [
        {
          num: '01',
          title: 'Entender el problema',
          desc: 'Antes de escribir una línea de código, entiendo el dominio: qué problema resuelve el sistema, quiénes lo usan y qué restricciones existen. El relevamiento es parte del trabajo, no un trámite previo.',
        },
        {
          num: '02',
          title: 'Diseñar la arquitectura',
          desc: 'Defino la estructura del sistema: cómo se organiza, qué tecnología usa y por qué. Las decisiones de diseño determinan si el sistema escala o se convierte en deuda técnica.',
        },
        {
          num: '03',
          title: 'Desarrollar, probar y desplegar',
          desc: 'Construyo con foco en calidad: código limpio, pruebas que validan el comportamiento real y deploys reproducibles. La IA acelera la ejecución — el criterio es siempre mío.',
        },
      ],
    },
    experiencia: {
      kicker: 'trayectoria',
      titleLine1: '+8 años',
      titleLine2: 'en el ciclo completo.',
      items: [
        {
          period: '2018 — presente',
          role: 'Software Developer · Freelance',
          company: 'Independiente · Remoto',
          desc: 'Desarrollo end-to-end de sistemas web y mobile para clientes de distintas industrias. Integración de IA en el flujo de trabajo para acelerar la ejecución sin perder calidad ni criterio técnico.',
        },
        {
          period: '2020 — 2026 · 6 años',
          role: 'Desarrolladora de Plataforma IoT',
          company: 'Plataforma Multi-tenant IoT',
          desc: 'Ciclo completo: relevamiento de requerimientos, arquitectura multi-tenant, desarrollo frontend/mobile con Angular e Ionic, backend en .NET, dashboards en tiempo real y generación de reportes.',
        },
      ],
    },
    contacto: {
      kicker: 'contacto',
      titleLine1: 'Abierta a nuevas',
      titleLine2: 'oportunidades.',
      sub: 'Estoy abierta a nuevos proyectos y oportunidades. Si tienes algo en mente o quieres conocer más sobre mi trabajo, escríbeme — respondo en menos de 24 horas.',
      placeholderName:    'Tu nombre',
      placeholderEmail:   'Email',
      placeholderMessage: 'Cuéntame sobre la oportunidad o el proyecto…',
      btn: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Mensaje enviado! Te respondo pronto.',
      error: 'Algo salió mal. Escríbeme a suarezsuarezana20@gmail.com',
    },
    footer: {
      copy: '© 2026 Ana Suárez',
      links: [
        { label: 'GitHub',   href: 'https://github.com/suarezana9' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anasuarezsuarez' },
      ],
    },
  },

  en: {
    nav: {
      links: [
        { label: 'Approach',    href: '#expertise'   },
        { label: 'Lifecycle',   href: '#sistemas'     },
        { label: 'Projects',    href: '#proyectos'    },
        { label: 'Experience',  href: '#experiencia'  },
        { label: 'Contact',     href: '#contacto'     },
      ],
      cta: 'Contact',
    },
    hero: {
      badge: 'Software Developer · Systems Engineering',
      line1: 'Software engineering',
      line2: '',
      desc: 'I cover the <strong>complete development lifecycle</strong>: from requirements gathering and architecture design to production deployment. I use AI to accelerate execution — my real focus is on solution design and quality.',
      location: 'Available · Remote',
      btnProjects: 'View projects',
      btnContact: 'Write me →',
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
          desc: "I'm not just a code writer: I participate in requirements gathering, architecture design, development, testing, and deployment. I have an integral vision of every stage of the system.",
          tags: ['Architecture', 'Requirements', 'Testing', 'CI/CD', 'Deploy'],
        },
        {
          num: '02',
          title: 'AI as an',
          accent: 'accelerator',
          desc: 'I use AI as a technical co-pilot: it helps me iterate faster, explore alternatives, and improve code quality. But architecture, design decisions, and output evaluation are always mine.',
          tags: ['Claude', 'Cursor', 'Copilot', 'ChatGPT', 'Prompt Engineering'],
        },
        {
          num: '03',
          title: 'Judgment to',
          accent: 'direct AI',
          desc: 'My 8 years across the full cycle give me the judgment to know what to prompt, how to audit AI outputs, and how to turn them into clean, secure, scalable code.',
          tags: ['Code Review', 'Refactoring', 'Multi-tenant', 'Scalability'],
        },
      ],
    },
    stack: {
      kicker: 'technologies',
      titleLine1: 'Tools I',
      titleLine2: 'work with.',
      groups: [
        {
          label: 'Frontend',
          items: ['Angular', 'React', 'TypeScript', 'CSS Modules'],
        },
        {
          label: 'Backend',
          items: ['Node.js', '.NET', 'REST APIs', 'Multi-tenant Architecture'],
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
      kicker: 'development lifecycle',
      titleLine1: 'Every stage,',
      titleLine2: 'not just the code.',
      items: [
        { label: 'Requirements & Architecture', tags: 'requirements · system design · data models' },
        { label: 'Software Development',         tags: 'web · mobile · rest apis · reusable components' },
        { label: 'Testing & Deployment',          tags: 'testing · ci/cd · cloud · monitoring' },
        { label: 'Evolution & Maintenance',       tags: 'refactoring · documentation · observability · scalability' },
      ],
    },
    proyectos: {
      kicker: 'projects',
      titleLine1: 'What I built,',
      titleLine2: 'end to end.',
      items: [
        {
          name: 'Wallit',
          desc: 'Personal finance app for iOS and Android. End-to-end: architecture, UX, development and store publishing.',
          tags: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
          theme: 'wallit',
        },
        {
          name: 'Multi-tenant IoT Platform',
          desc: 'Enterprise IoT device management platform. Led every stage: multi-tenant architecture, development, real-time dashboards and configurable alerts.',
          tags: ['Angular', 'Ionic', 'MQTT', '.NET'],
          theme: 'stock',
        },
        {
          name: 'Tempo Sushi',
          desc: 'Gastronomy delivery website with product catalog, category filters, gallery and contact form. One of my first complete end-to-end projects.',
          tags: ['Angular', 'Firebase', 'Vercel'],
          theme: 'sushi',
        },
      ],
    },
    stats: [
      { value: '+8',   label: 'years of experience' },
      { value: '+10',  label: 'projects delivered' },
      { value: '3',    label: 'industries: IoT, gastronomy, e-commerce' },
      { value: '100%', label: 'end-to-end lifecycle' },
    ],
    proceso: {
      kicker: 'methodology',
      titleLine1: 'How I think',
      titleLine2: 'a system.',
      steps: [
        {
          num: '01',
          title: 'Understand the problem',
          desc: "Before writing a single line of code, I understand the domain: what problem the system solves, who uses it, and what constraints exist. Requirements gathering is part of the work, not a formality.",
        },
        {
          num: '02',
          title: 'Design the architecture',
          desc: "I define the system's structure: how it's organized, what technology it uses and why. Design decisions determine whether the system scales or becomes technical debt.",
        },
        {
          num: '03',
          title: 'Develop, test and deploy',
          desc: 'I build with a quality focus: clean code, tests that validate real behavior, and reproducible deployments. AI accelerates execution — the judgment is always mine.',
        },
      ],
    },
    experiencia: {
      kicker: 'experience',
      titleLine1: '+8 years',
      titleLine2: 'across the full cycle.',
      items: [
        {
          period: '2018 — present',
          role: 'Software Developer · Freelance',
          company: 'Independent · Remote',
          desc: 'End-to-end development of web and mobile systems across different industries. AI integrated into the workflow to accelerate execution without losing quality or technical judgment.',
        },
        {
          period: '2020 — 2026 · 6 years',
          role: 'IoT Platform Developer',
          company: 'Multi-tenant IoT Platform',
          desc: 'Full lifecycle: requirements gathering, multi-tenant architecture, frontend/mobile with Angular & Ionic, .NET backend, real-time dashboards and reporting.',
        },
      ],
    },
    contacto: {
      kicker: 'contact',
      titleLine1: 'Open to new',
      titleLine2: 'opportunities.',
      sub: "I'm open to new projects and opportunities. If you have something in mind or want to know more about my work, write me — I reply within 24 hours.",
      placeholderName:    'Your name',
      placeholderEmail:   'Email',
      placeholderMessage: 'Tell me about the opportunity or project…',
      btn: 'Send message',
      sending: 'Sending…',
      success: 'Message sent! I\'ll get back to you soon.',
      error: 'Something went wrong. Write me at suarezsuarezana20@gmail.com',
    },
    footer: {
      copy: '© 2026 Ana Suárez',
      links: [
        { label: 'GitHub',   href: 'https://github.com/suarezana9' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anasuarezsuarez' },
      ],
    },
  },
} as const
