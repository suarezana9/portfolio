export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      links: [
        { label: 'Soluciones', href: '#expertise'  },
        { label: 'Proyectos',  href: '#proyectos'  },
        { label: 'Contacto',   href: '#contacto'   },
      ],
      cta: 'Hablemos',
    },
    hero: {
      badge: 'disponible para nuevos proyectos',
      line1: 'Ingeniería de sistemas',
      line2: 'para tu negocio.',
      desc: 'Diseño y desarrollo sistemas digitales que <strong>automatizan, ordenan y hacen crecer</strong> empresas reales — sin importar si entendés de tecnología o no.',
      location: 'Disponible · Remoto',
      btnProjects: 'Ver proyectos',
      btnContact: 'Hablemos →',
    },
    expertise: {
      kicker: 'soluciones',
      titleLine1: '¿Qué problema',
      titleLine2: 'te resuelvo?',
      cards: [
        {
          num: '01',
          title: 'Automatizá',
          accent: 'tu operación',
          desc: '¿Tu equipo pierde tiempo en planillas, llamados y procesos manuales? Desarrollo sistemas que gestionan facturación, stock, turnos y flujos internos — para que trabajen menos en lo repetitivo y más en lo que importa.',
          tags: [],
        },
        {
          num: '02',
          title: 'Vendé más',
          accent: 'en digital',
          desc: '¿Tus clientes no te encuentran o tu presencia online no convierte? Creo sitios web y plataformas que atraen clientes, muestran tu servicio con claridad y generan consultas reales.',
          tags: [],
        },
        {
          num: '03',
          title: 'Llevá tu negocio',
          accent: 'al celular',
          desc: '¿Querés que tus clientes puedan gestionar turnos, compras o cuentas desde el teléfono? Desarrollo apps móviles para iOS y Android que mejoran la experiencia y fidelizan clientes.',
          tags: [],
        },
      ],
    },
    stack: {
      kicker: 'tecnologías',
      titleLine1: 'El stack con el',
      titleLine2: 'que trabajo.',
      groups: [
        {
          label: 'Frontend',
          items: ['Angular', 'React', 'Next.js', 'TypeScript', 'CSS Modules'],
        },
        {
          label: 'Backend',
          items: ['Node.js', 'REST APIs', 'Express'],
        },
        {
          label: 'Mobile',
          items: ['Ionic', 'React Native', 'Capacitor', 'Expo'],
        },
        {
          label: 'Datos & Cloud',
          items: ['Firebase', 'Supabase', 'PostgreSQL'],
        },
        {
          label: 'Inteligencia Artificial',
          items: ['ChatGPT', 'Claude', 'Cursor', 'Copilot', 'Vercel AI SDK'],
        },
        {
          label: 'Herramientas',
          items: ['Git', 'GitHub', 'Vercel', 'Figma', 'Postman'],
        },
      ],
    },
    sistemas: {
      kicker: 'qué construyo',
      titleLine1: 'Sistemas para',
      titleLine2: 'negocios reales.',
      items: [
        { label: 'Sistemas de gestión interna',            tags: 'facturación · stock · turnos'   },
        { label: 'Aplicaciones mobile a medida',           tags: 'iOS · Android · híbrido'         },
        { label: 'Plataformas multi-local / multi-tenant', tags: 'sucursales · franquicias'        },
        { label: 'Dashboards y reportes en tiempo real',   tags: 'sensores · métricas · alertas'   },
      ],
    },
    proyectos: {
      kicker: 'proyectos',
      titleLine1: 'Sistemas que',
      titleLine2: 'ya están corriendo.',
      items: [
        {
          name: 'Wallit',
          desc: 'App de finanzas personales para iOS y Android. Presupuestos, categorías y reportes.',
          tags: ['React Native', 'Expo', 'Supabase'],
          theme: 'wallit',
        },
        {
          name: 'Stock multi-local',
          desc: 'Plataforma IoT para gestión de stock en tiempo real entre sucursales con alertas automáticas.',
          tags: ['Angular', 'Ionic', 'MQTT'],
          theme: 'stock',
        },
      ],
    },
    experiencia: {
      kicker: 'experiencia',
      titleLine1: '8 años',
      titleLine2: 'construyendo.',
      items: [
        {
          period: '2022 — presente',
          role: 'Desarrolladora de Sistemas · Freelance',
          company: 'Independiente · Remoto',
          desc: 'Sistemas a medida para clientes de Argentina y España. Proyectos de finanzas, gestión interna e IoT.',
        },
        {
          period: '2018 — 2022 · 4 años',
          role: 'Desarrolladora de plataforma IoT',
          company: 'Industria tecnológica',
          desc: 'Plataforma multi-tenant para monitoreo de sensores en tiempo real. Angular + Ionic + MQTT.',
        },
        {
          period: '2016 — 2018 · 2 años',
          role: 'Desarrolladora Frontend',
          company: 'Agencia digital',
          desc: 'Primeros proyectos con Angular y apps híbridas con Ionic para clientes de e-commerce.',
        },
      ],
    },
    contacto: {
      kicker: 'contacto',
      titleLine1: '¿Tenés un proyecto?',
      titleLine2: 'Hablemos.',
      sub: 'Contame qué necesita tu negocio. Te respondo en menos de 24hs.',
      placeholderName:    'Tu nombre',
      placeholderEmail:   'Email',
      placeholderMessage: '¿Qué necesitás?',
      btn: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Mensaje enviado! Te respondo pronto.',
      error: 'Algo salió mal. Escribime directamente a ana@suarez.dev',
    },
    footer: {
      copy: '© 2025 Ana Suárez · Ingeniería de Sistemas',
      links: [
        { label: 'GitHub',   href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  },

  en: {
    nav: {
      links: [
        { label: 'Solutions',  href: '#expertise'  },
        { label: 'Projects',   href: '#proyectos'  },
        { label: 'Contact',    href: '#contacto'   },
      ],
      cta: "Let's talk",
    },
    hero: {
      badge: 'available for new projects',
      line1: 'Systems engineering',
      line2: 'for your business.',
      desc: 'I design and develop digital systems that <strong>automate, organize, and grow</strong> real businesses — whether you understand tech or not.',
      location: 'Available · Remote',
      btnProjects: 'See projects',
      btnContact: "Let's talk →",
    },
    expertise: {
      kicker: 'solutions',
      titleLine1: 'What problem',
      titleLine2: 'can I solve for you?',
      cards: [
        {
          num: '01',
          title: 'Automate',
          accent: 'your operations',
          desc: 'Is your team wasting time on spreadsheets, calls, and manual processes? I build systems that handle invoicing, stock, scheduling, and internal workflows — so they focus on what matters.',
          tags: [],
        },
        {
          num: '02',
          title: 'Sell more',
          accent: 'online',
          desc: "Can't customers find you, or is your online presence not converting? I create websites and platforms that attract clients, showcase your service clearly, and generate real inquiries.",
          tags: [],
        },
        {
          num: '03',
          title: 'Bring your business',
          accent: 'to mobile',
          desc: 'Want your customers to manage appointments, purchases, or accounts from their phone? I develop mobile apps for iOS and Android that improve the experience and build loyalty.',
          tags: [],
        },
      ],
    },
    stack: {
      kicker: 'technologies',
      titleLine1: 'The stack I',
      titleLine2: 'work with.',
      groups: [
        {
          label: 'Frontend',
          items: ['Angular', 'React', 'Next.js', 'TypeScript', 'CSS Modules'],
        },
        {
          label: 'Backend',
          items: ['Node.js', 'REST APIs', 'Express'],
        },
        {
          label: 'Mobile',
          items: ['Ionic', 'React Native', 'Capacitor', 'Expo'],
        },
        {
          label: 'Data & Cloud',
          items: ['Firebase', 'Supabase', 'PostgreSQL'],
        },
        {
          label: 'Artificial Intelligence',
          items: ['ChatGPT', 'Claude', 'Cursor', 'Copilot', 'Vercel AI SDK'],
        },
        {
          label: 'Tools',
          items: ['Git', 'GitHub', 'Vercel', 'Figma', 'Postman'],
        },
      ],
    },
    sistemas: {
      kicker: 'what I build',
      titleLine1: 'Systems for',
      titleLine2: 'real businesses.',
      items: [
        { label: 'Internal management systems',            tags: 'invoicing · stock · scheduling' },
        { label: 'Custom mobile applications',             tags: 'iOS · Android · hybrid'         },
        { label: 'Multi-location / multi-tenant platforms', tags: 'branches · franchises'         },
        { label: 'Real-time dashboards & reports',         tags: 'sensors · metrics · alerts'     },
      ],
    },
    proyectos: {
      kicker: 'projects',
      titleLine1: 'Systems that are',
      titleLine2: 'already running.',
      items: [
        {
          name: 'Wallit',
          desc: 'Personal finance app for iOS and Android. Budgets, categories, and reports.',
          tags: ['React Native', 'Expo', 'Supabase'],
          theme: 'wallit',
        },
        {
          name: 'Multi-location stock',
          desc: 'IoT platform for real-time stock management across branches with automatic alerts.',
          tags: ['Angular', 'Ionic', 'MQTT'],
          theme: 'stock',
        },
      ],
    },
    experiencia: {
      kicker: 'experience',
      titleLine1: '8 years',
      titleLine2: 'building.',
      items: [
        {
          period: '2022 — present',
          role: 'Systems Developer · Freelance',
          company: 'Independent · Remote',
          desc: 'Custom systems for clients in Argentina and Spain. Finance, internal management, and IoT projects.',
        },
        {
          period: '2018 — 2022 · 4 years',
          role: 'IoT Platform Developer',
          company: 'Tech industry',
          desc: 'Multi-tenant platform for real-time sensor monitoring. Angular + Ionic + MQTT.',
        },
        {
          period: '2016 — 2018 · 2 years',
          role: 'Frontend Developer',
          company: 'Digital agency',
          desc: 'First projects with Angular and hybrid apps with Ionic for e-commerce clients.',
        },
      ],
    },
    contacto: {
      kicker: 'contact',
      titleLine1: 'Have a project?',
      titleLine2: "Let's talk.",
      sub: "Tell me what your business needs. I'll reply within 24 hours.",
      placeholderName:    'Your name',
      placeholderEmail:   'Email',
      placeholderMessage: 'What do you need?',
      btn: 'Send message',
      sending: 'Sending…',
      success: "Message sent! I'll reply soon.",
      error: 'Something went wrong. Write me directly at ana@suarez.dev',
    },
    footer: {
      copy: '© 2025 Ana Suárez · Systems Engineering',
      links: [
        { label: 'GitHub',   href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
      ],
    },
  },
} as const
