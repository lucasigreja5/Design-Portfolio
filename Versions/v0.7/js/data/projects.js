/* ==========================================================================
   Lucas Igreja Portfolio — Structured Content, Copy & 9 Behance Projects
   Browser-safe global object so index.html works via HTTP and file://
   ========================================================================== */

(function attachPortfolioData(global) {
  const PORTFOLIO_DATA = {
    profile: {
      name: 'LUCAS IGREJA',
      email: 'lucas.igreja@gmail.com',
      phone: '+55 61 98133-5098',
      whatsappUrl: 'https://wa.me/5561981335098',
      behanceUrl: 'https://www.behance.net/lucasigreja',
      linkedinUrl: 'https://www.linkedin.com/in/lucasigreja/',
      location: 'BRASÍLIA, BR'
    },

    copy: {
      en: {
        nav: {
          about: 'ABOUT',
          projects: 'PROJECTS',
          career: 'CAREER',
          contact: 'CONTACT'
        },
        hero: {
          eyebrowLeft: 'UI/UX & GRAPHIC DESIGN',
          eyebrowStatus: 'OPEN FOR WORK',
          eyebrowExp: '12+ YEARS',
          titleLine1: 'GRAPHIC CRAFT',
          titleLine2: 'MEETS DIGITAL UX',
          scrollCue: 'SCROLL TO EXPLORE ↓'
        },
        about: {
          heading: 'ABOUT',
          statement:
            'Graphic designer and art director since 2013, now expanding 12+ years of brand identity, editorial, and print craft into interactive UI/UX and motion-driven digital products — based in Brasília, Brazil.',
          ctaEvolution: 'CAREER EVOLUTION',
          ctaBehance: 'BEHANCE ARCHIVE ↗'
        },
        projects: {
          heading: 'PROJECTS',
          filters: {
            all: 'ALL (09)',
            uiux: 'UI/UX (02)',
            branding: 'BRANDING (04)',
            editorial: 'EDITORIAL & OOH (03)'
          },
          viewCase: 'VIEW CASE',
          scrollHint: 'ACTIVE INDEX',
          prevProject: 'Previous project',
          nextProject: 'Next project'
        },
        disciplines: {
          eyebrow: '// DISCIPLINES //'
        },
        career: {
          heading: 'CAREER',
          experienceHeading: 'PROFESSIONAL EXPERIENCE',
          educationHeading: 'SPECIALIZATIONS & DEGREES'
        },
        cta: {
          heading: "HAVE A PROJECT IN MIND? LET'S DESIGN SOMETHING SHARP TOGETHER.",
          primaryBtn: "LET'S WORK TOGETHER",
          copyEmail: 'COPY EMAIL · lucas.igreja@gmail.com'
        },
        footer: {
          bio: 'Graphic designer, art director & UI/UX designer based in Brasília, Brazil. Building visual identities and digital interfaces with clarity and motion.',
          colMain: 'MAIN',
          colProjects: 'PROJECTS',
          colContact: 'CONTACT ME',
          links: {
            home: 'HOME',
            about: 'ABOUT',
            projects: 'PROJECTS',
            career: 'CAREER',
            contact: 'CONTACT',
            email: 'EMAIL',
            behance: 'BEHANCE',
            linkedin: 'LINKEDIN'
          },
          backToTop: 'BACK TO TOP ↑',
          rights: '© 2026 LUCAS IGREJA. ALL RIGHTS RESERVED.'
        },
        modal: {
          role: 'ROLE',
          year: 'YEAR',
          era: 'ERA',
          tools: 'TOOLS',
          overview: '01 / OVERVIEW',
          toolsHeading: '02 / TOOLS',
          context: '01 / CONTEXT',
          approach: '02 / DESIGN APPROACH',
          outcome: '03 / OUTCOME & CRAFT',
          behanceBtn: 'VIEW FULL GALLERY ON BEHANCE ↗',
          prevBtn: '← PREV PROJECT',
          nextBtn: 'NEXT PROJECT →',
          closeBtn: 'CLOSE [ESC]',
          evolutionTitle: 'CAREER EVOLUTION · 2013–2026',
          evolutionSubtitle: '12+ years evolving from advertising & institutional art direction into modern UI/UX and motion design.',
          experienceHeading: 'PROFESSIONAL EXPERIENCE',
          educationHeading: 'SPECIALIZATIONS & DEGREES',
          languagesLabel: 'LANGUAGES: PORTUGUESE (NATIVE) · ENGLISH (FLUENT) · SPANISH (CONVERSATIONAL)'
        },
        toasts: {
          copiedEmail: 'Copied lucas.igreja@gmail.com',
          langSwitched: 'Language: English'
        }
      },

      pt: {
        nav: {
          about: 'SOBRE',
          projects: 'PROJETOS',
          career: 'CARREIRA',
          contact: 'CONTATO'
        },
        hero: {
          eyebrowLeft: 'UI/UX & DESIGN GRÁFICO',
          eyebrowStatus: 'DISPONÍVEL',
          eyebrowExp: '12+ ANOS',
          titleLine1: 'DESIGN GRÁFICO',
          titleLine2: '& PRODUTO DIGITAL',
          scrollCue: 'ROLE PARA EXPLORAR ↓'
        },
        about: {
          heading: 'SOBRE',
          statement:
            'Designer gráfico e diretor de arte desde 2013, expandindo mais de 12 anos em identidade visual, editorial e campanhas impressas para interfaces UI/UX e produtos digitais com movimento — baseado em Brasília, Brasil.',
          ctaEvolution: 'EVOLUÇÃO PROFISSIONAL',
          ctaBehance: 'ARQUIVO BEHANCE ↗'
        },
        projects: {
          heading: 'PROJETOS',
          filters: {
            all: 'TODOS (09)',
            uiux: 'UI/UX (02)',
            branding: 'MARCAS (04)',
            editorial: 'EDITORIAL & OOH (03)'
          },
          viewCase: 'VER CASE',
          scrollHint: 'ÍNDICE ATIVO',
          prevProject: 'Projeto anterior',
          nextProject: 'Próximo projeto'
        },
        disciplines: {
          eyebrow: '// DISCIPLINAS //'
        },
        career: {
          heading: 'CARREIRA',
          experienceHeading: 'EXPERIÊNCIA PROFISSIONAL',
          educationHeading: 'ESPECIALIZAÇÕES & FORMAÇÃO'
        },
        cta: {
          heading: 'TEM UM PROJETO EM MENTE? VAMOS CRIAR ALGO MARCANTE JUNTOS.',
          primaryBtn: 'VAMOS CONVERSAR',
          copyEmail: 'COPIAR E-MAIL · lucas.igreja@gmail.com'
        },
        footer: {
          bio: 'Designer gráfico, diretor de arte e UI/UX designer baseado em Brasília, Brasil. Construindo identidades visuais e interfaces digitais com clareza e movimento.',
          colMain: 'PRINCIPAL',
          colProjects: 'PROJETOS',
          colContact: 'CONTATO',
          links: {
            home: 'INÍCIO',
            about: 'SOBRE',
            projects: 'PROJETOS',
            career: 'CARREIRA',
            contact: 'CONTATO',
            email: 'E-MAIL',
            behance: 'BEHANCE',
            linkedin: 'LINKEDIN'
          },
          backToTop: 'VOLTAR AO TOPO ↑',
          rights: '© 2026 LUCAS IGREJA. TODOS OS DIREITOS RESERVADOS.'
        },
        modal: {
          role: 'ATUAÇÃO',
          year: 'ANO',
          era: 'FASE',
          tools: 'FERRAMENTAS',
          overview: '01 / VISÃO GERAL',
          toolsHeading: '02 / FERRAMENTAS',
          context: '01 / CONTEXTO',
          approach: '02 / ABORDAGEM DE DESIGN',
          outcome: '03 / RESULTADO & OFÍCIO',
          behanceBtn: 'VER PROJETO NO BEHANCE ↗',
          prevBtn: '← PROJETO ANTERIOR',
          nextBtn: 'PRÓXIMO PROJETO →',
          closeBtn: 'FECHAR [ESC]',
          evolutionTitle: 'EVOLUÇÃO PROFISSIONAL · 2013–2026',
          evolutionSubtitle: 'Mais de 12 anos evoluindo da publicidade e direção de arte institucional para UI/UX e motion design.',
          experienceHeading: 'EXPERIÊNCIA PROFISSIONAL',
          educationHeading: 'ESPECIALIZAÇÕES & FORMAÇÃO',
          languagesLabel: 'IDIOMAS: PORTUGUÊS (NATIVO) · INGLÊS (FLUENTE) · ESPANHOL (CONVERSAÇÃO)'
        },
        toasts: {
          copiedEmail: 'E-mail lucas.igreja@gmail.com copiado',
          langSwitched: 'Idioma: Português (PT-BR)'
        }
      }
    },

    /* All 9 Real Behance Projects (Newest -> Oldest) */
    projects: [
      {
        id: 'sonar-bsb',
        index: '01',
        category: 'uiux',
        year: '2026',
        behanceUrl: 'https://www.behance.net/gallery/253500979/UIUX-Design-Sonar-BSB',
        // Drop exported PNG/WebP inside assets/projects/ and set path below when ready:
        image: '',
        coverStyle: 'sonar-bsb',
        tools: ['Figma', 'Motion Prototyping', 'Gemini AI'],
        en: {
          title: 'SONAR BSB',
          subtitle: 'Techno Music Events Mobile App',
          categoryLabel: 'UI/UX & MOTION',
          era: '2026 · DIGITAL PRODUCT',
          role: 'Product & UI/UX Designer',
          context:
            'Built for an intermediate-to-advanced Figma UI/UX specialization, Sonar BSB solves underground electronic event discovery with clear hierarchy, rapid filtering, and energetic nightlife branding.',
          approach:
            'Paired a high-contrast indigo-to-neon-lime visual identity ("Frequency Found") with a clean, scannable light-mode event feed, custom shark-fin/soundwave iconography, and AI-assisted event copy.',
          outcome:
            'Delivered an end-to-end high-fidelity mobile prototype featuring interactive screen transitions, card micro-interactions, and cohesive product branding.'
        },
        pt: {
          title: 'SONAR BSB',
          subtitle: 'App Mobile de Eventos de Música Eletrônica',
          categoryLabel: 'UI/UX & MOTION',
          era: '2026 · PRODUTO DIGITAL',
          role: 'Designer de Produto & UI/UX',
          context:
            'Desenvolvido para uma especialização avançada em UI/UX no Figma, o Sonar BSB resolve a descoberta de eventos de música eletrônica com hierarquia clara, filtros rápidos e identidade marcante.',
          approach:
            'Combinou uma estética de alto contraste em índigo e verde-lima neon ("Frequency Found") com um feed claro e legível, ícone próprio de onda sonora e textos de eventos gerados com apoio de IA.',
          outcome:
            'Entregou um protótipo mobile completo em alta fidelidade com transições interativas, micro-interações e branding de produto coeso.'
        }
      },
      {
        id: 'olivias-coffee',
        index: '02',
        category: 'uiux',
        year: '2026',
        behanceUrl: 'https://www.behance.net/gallery/249639151/UIUX-Design-Olivias-Coffee-Beans',
        image: '',
        coverStyle: 'olivias-coffee',
        tools: ['Figma', 'Wireframing', 'Mobile & Desktop UI', 'Gemini AI'],
        en: {
          title: "OLIVIA'S COFFEE BEANS",
          subtitle: 'Eco-First Specialty Coffee E-Commerce',
          categoryLabel: 'UI/UX & WEB DESIGN',
          era: '2026 · DIGITAL PRODUCT',
          role: 'UI/UX Designer',
          context:
            'Cross-device digital commerce experience created for a specialty coffee roastery focused on sustainable sourcing ("Eco-First Espresso").',
          approach:
            'Progressed systematically from low-fidelity structural wireframes into synchronized mobile and desktop prototypes, pairing deep forest-green tones with warm cream typography and a geometric cat-ear coffee emblem.',
          outcome:
            'Established responsive component parity across smartphone and desktop storefronts with intuitive bean origin filtering and streamlined checkout.'
        },
        pt: {
          title: "OLIVIA'S COFFEE BEANS",
          subtitle: 'E-Commerce Mobile & Desktop de Café Especial',
          categoryLabel: 'UI/UX & WEB DESIGN',
          era: '2026 · PRODUTO DIGITAL',
          role: 'UI/UX Designer',
          context:
            'Experiência de comércio digital multiplataforma criada para uma torrefação de cafés especiais com foco em sustentabilidade ("Eco-First Espresso").',
          approach:
            'Evoluiu sistematicamente de wireframes estruturais para protótipos sincronizados de mobile e desktop, unindo verde-floresta profundo, tipografia creme e símbolo geométrico autoral.',
          outcome:
            'Garantiu consistência de componentes entre telas desktop e mobile com navegação intuitiva por origem de grãos e fluxo de compra simplificado.'
        }
      },
      {
        id: 'gdf-undf',
        index: '03',
        category: 'branding',
        year: '2021',
        behanceUrl: 'https://www.behance.net/gallery/126763223/GDF-Logomarca-Universidade-do-Distrito-Federal-UnDF',
        image: '',
        coverStyle: 'gdf-undf',
        tools: ['Adobe Illustrator', 'Brand Strategy', 'Typography'],
        en: {
          title: 'GDF — UNDF',
          subtitle: 'Universidade do Distrito Federal Visual Identity',
          categoryLabel: 'BRAND IDENTITY',
          era: '2019–2022 · BRAND SYSTEMS',
          role: 'Art Director (GDF / SECOM)',
          context:
            'Creation of the founding brand mark for the newly established public university of the Federal District (UnDF / FUNAB), requiring civic gravitas and academic forward-thinking.',
          approach:
            'Constructed three forward-pointing geometric chevron/diamond modules graduating from deep navy to sky blue—symbolizing progression, knowledge, and public pillars—paired with authoritative sans-serif lettering.',
          outcome:
            'Adopted as an enduring institutional identity built for digital portals, campus signage, and academic publications.'
        },
        pt: {
          title: 'GDF — UNDF',
          subtitle: 'Identidade Visual da Universidade do Distrito Federal',
          categoryLabel: 'IDENTIDADE VISUAL',
          era: '2019–2022 · SISTEMAS DE MARCA',
          role: 'Diretor de Arte (GDF / SECOM)',
          context:
            'Criação da marca fundadora para a Universidade do Distrito Federal (UnDF / FUNAB), exigindo solidez institucional e visão acadêmica contemporânea.',
          approach:
            'Estruturada com três módulos geométricos em chevron apontando à frente — do azul-marinho ao azul-celeste — simbolizando avanço, ensino e pilares públicos junto a tipografia sem serifa.',
          outcome:
            'Consolidada como identidade oficial preparada para portais digitais, sinalização de campus e materiais acadêmicos.'
        }
      },
      {
        id: 'gdf-economia',
        index: '04',
        category: 'branding',
        year: '2021',
        behanceUrl: 'https://www.behance.net/gallery/116386429/GDF-Marca-Secretaria-de-Economia',
        image: '',
        coverStyle: 'gdf-economia',
        tools: ['Adobe Illustrator', 'Institutional Branding'],
        en: {
          title: 'GDF — SECRETARIA DE ECONOMIA',
          subtitle: 'Secretariat of Economy Brand Emblem',
          categoryLabel: 'BRAND IDENTITY',
          era: '2019–2022 · BRAND SYSTEMS',
          role: 'Art Director (GDF / SECOM)',
          context:
            'Unifying the public visual identity for the Federal District Secretariat of Economy across fiscal transparency portals and citizen services.',
          approach:
            'Embedded the distinctive crossed arrows of the regional flag inside a bold cobalt-blue spherical emblem, balancing civic heritage with clean modern corporate geometry.',
          outcome:
            'Delivered a clear, high-contrast emblem engineered to remain legible from micro-favicons to large institutional press backdrops.'
        },
        pt: {
          title: 'GDF — SECRETARIA DE ECONOMIA',
          subtitle: 'Marca Institucional da Secretaria de Economia',
          categoryLabel: 'IDENTIDADE VISUAL',
          era: '2019–2022 · SISTEMAS DE MARCA',
          role: 'Diretor de Arte (GDF / SECOM)',
          context:
            'Unificação da identidade visual pública para a Secretaria de Economia do DF em portais de transparência fiscal e serviços ao cidadão.',
          approach:
            'Integrou a cruz de Brasília em verde e amarelo dentro de um emblema esférico azul-cobalto, equilibrando simbolismo cívico e geometria institucional limpa.',
          outcome:
            'Entregou um símbolo de alto contraste projetado para máxima legibilidade de favicons digitais a painéis institucionais.'
        }
      },
      {
        id: 'gdf-clube',
        index: '05',
        category: 'branding',
        year: '2020',
        behanceUrl: 'https://www.behance.net/gallery/116385123/GDF-Clube-de-Desconto-do-Servidor',
        image: '',
        coverStyle: 'gdf-clube',
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Social Media'],
        en: {
          title: 'GDF — CLUBE DE DESCONTO',
          subtitle: 'Civil Servant Discount Program Identity & Campaign',
          categoryLabel: 'BRAND & CAMPAIGN',
          era: '2019–2022 · BRAND SYSTEMS',
          role: 'Art Director (GDF / SECOM)',
          context:
            'Launched in 2020 by the Secretariat of Economy, this benefits program needed an approachable, recognizable brand and social media communication kit.',
          approach:
            'Combined overlapping shopping-bag silhouettes in warm orange and dual blues that form a subtle friendly smile, paired with friendly geometric typography.',
          outcome:
            'Rolled out across partner retail badges and public social campaigns with immediate visual clarity.'
        },
        pt: {
          title: 'GDF — CLUBE DE DESCONTO',
          subtitle: 'Identidade e Comunicação do Clube do Servidor',
          categoryLabel: 'MARCA & CAMPANHA',
          era: '2019–2022 · SISTEMAS DE MARCA',
          role: 'Diretor de Arte (GDF / SECOM)',
          context:
            'Lançado em 2020 pela Secretaria de Economia, o programa de benefícios precisava de uma marca acessível e peças de comunicação para redes sociais.',
          approach:
            'Uniu sacolas sobrepostas em laranja e dois tons de azul que formam um sorriso sutil, acompanhadas de tipografia limpa e acolhedora.',
          outcome:
            'Aplicado em selos de estabelecimentos parceiros e campanhas digitais com reconhecimento imediato.'
        }
      },
      {
        id: 'gdf-fabrica',
        index: '06',
        category: 'branding',
        year: '2020',
        behanceUrl: 'https://www.behance.net/gallery/116382357/GDF-Nova-Marca-para-a-Fabrica-Social',
        image: '',
        coverStyle: 'gdf-fabrica',
        tools: ['Adobe Illustrator', 'Rebranding'],
        en: {
          title: 'GDF — FÁBRICA SOCIAL',
          subtitle: 'Vocational Training Center Rebranding',
          categoryLabel: 'REBRANDING',
          era: '2019–2022 · BRAND SYSTEMS',
          role: 'Art Director (GDF / SECOM)',
          context:
            'Commissioned via SECOM for the 2019–2022 administration to modernize the visual identity of Fábrica Social, a public vocational training program.',
          approach:
            'Transformed industrial gear geometry into an uplifting factory silhouette with interlocking cobalt gears and a warm amber smokestack symbolizing collective effort and craftsmanship.',
          outcome:
            'Refreshed signage, certificates, and public communications with an optimistic, human-centered mark.'
        },
        pt: {
          title: 'GDF — FÁBRICA SOCIAL',
          subtitle: 'Redesign da Marca do Centro de Capacitação',
          categoryLabel: 'REBRANDING',
          era: '2019–2022 · SISTEMAS DE MARCA',
          role: 'Diretor de Arte (GDF / SECOM)',
          context:
            'Solicitado via SECOM para a gestão 2019–2022 com o objetivo de modernizar a identidade do programa de capacitação profissional Fábrica Social.',
          approach:
            'Transformou engrenagens industriais em uma silhueta de fábrica com chaminé em degradê âmbar, simbolizando trabalho coletivo e qualificação.',
          outcome:
            'Renovou certificados, fachadas e comunicação institucional com uma marca humana e contemporânea.'
        }
      },
      {
        id: 'volvo-xc60',
        index: '07',
        category: 'editorial',
        year: '2018',
        behanceUrl: 'https://www.behance.net/gallery/116386015/Champion-Volvo-Novo-XC60',
        image: '',
        coverStyle: 'volvo-xc60',
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'OOH Print'],
        en: {
          title: 'CHAMPION VOLVO — NOVO XC60',
          subtitle: 'Launch Campaign & Monumental Building Banner',
          categoryLabel: 'OOH & ADVERTISING',
          era: '2015–2018 · CAMPAIGNS & PRINT',
          role: 'Art Director (G3 Comunicação)',
          context:
            '2018 regional launch campaign for the next-generation Volvo XC60, spanning dealership collateral and a monumental outdoor building banner (empena) at Park Shopping.',
          approach:
            'Balanced moody slate-gray automotive photography along winding mountain roads with bold condensed headline lockups ("O carro que dirige com você") adhering strictly to Volvo global brand guidelines.',
          outcome:
            'High-impact urban OOH visibility capturing Volvo safety innovation and Scandinavian restraint.'
        },
        pt: {
          title: 'CHAMPION VOLVO — NOVO XC60',
          subtitle: 'Campanha de Lançamento & Empena Monumental',
          categoryLabel: 'OOH & PUBLICIDADE',
          era: '2015–2018 · CAMPANHAS & IMPRESSO',
          role: 'Diretor de Arte (G3 Comunicação)',
          context:
            'Campanha de lançamento regional 2018 para a nova geração do Volvo XC60, incluindo peças de concessionária e grande empena no Park Shopping.',
          approach:
            'Equilibrou fotografia automotiva em tons de ardósia com tipografia condensada de impacto ("O carro que dirige com você"), seguindo rigorosamente o guia global da Volvo.',
          outcome:
            'Forte presença urbana em mídia exterior destacando inovação em segurança e sofisticação escandinava.'
        }
      },
      {
        id: 'volvo-selekt',
        index: '08',
        category: 'editorial',
        year: '2018',
        behanceUrl: 'https://www.behance.net/gallery/116384255/Champion-Volvo-Brasilia-Design',
        image: '',
        coverStyle: 'volvo-selekt',
        tools: ['Adobe Photoshop', 'Adobe InDesign', 'Print Flyer'],
        en: {
          title: 'CHAMPION VOLVO — BRASÍLIA DESIGN',
          subtitle: 'Volvo Selekt Print Campaign & Architectural Framing',
          categoryLabel: 'PRINT & ART DIRECTION',
          era: '2015–2018 · CAMPAIGNS & PRINT',
          role: 'Art Director (G3 Comunicação)',
          context:
            'Print advertising piece for Champion Volvo Selekt pre-owned vehicles connecting Scandinavian automotive engineering with UNESCO Creative City of Design landmarks.',
          approach:
            'Staged an obsidian Volvo SUV in front of the sculptural white National Museum dome under clean daylight skies, framing the vehicle with minimal typography and clean grid spacing.',
          outcome:
            'Created a signature editorial print flyer that elevated certified pre-owned offerings into luxury brand storytelling.'
        },
        pt: {
          title: 'CHAMPION VOLVO — BRASÍLIA DESIGN',
          subtitle: 'Campanha Impressa Volvo Selekt & Arquitetura',
          categoryLabel: 'IMPRESSO & DIREÇÃO DE ARTE',
          era: '2015–2018 · CAMPANHAS & IMPRESSO',
          role: 'Diretor de Arte (G3 Comunicação)',
          context:
            'Peça publicitária impressa para seminovos Champion Volvo Selekt conectando o design escandinavo ao título de Cidade Criativa do Design da UNESCO.',
          approach:
            'Enquadrou o SUV preto diante da cúpula branca do Museu Nacional sob céu aberto, mantendo tipografia minimalista e grade editorial limpa.',
          outcome:
            'Elevou a comunicação de seminovos certificados ao padrão editorial de marca premium.'
        }
      },
      {
        id: 'caubr-editorial',
        index: '09',
        category: 'editorial',
        year: '2015',
        behanceUrl: 'https://www.behance.net/gallery/28966701/Informes-Publicitarios-CAUBR',
        image: '',
        coverStyle: 'caubr-editorial',
        tools: ['Adobe InDesign', 'Editorial Layout'],
        en: {
          title: 'CAU/BR — INFORMES PUBLICITÁRIOS',
          subtitle: 'Magazine Advertising Reports & Grid Layout',
          categoryLabel: 'EDITORIAL DESIGN',
          era: '2015–2018 · CAMPAIGNS & PRINT',
          role: 'Junior Graphic Designer (Agência Comunica)',
          context:
            'Series of informative print magazine spreads and election announcements for the Brazilian Council of Architecture and Urbanism (CAU/BR).',
          approach:
            'Layered architectural cityscapes under cool cyan overlays, establishing crisp typographic contrast between headline alerts and structured multi-column white editorial copy boxes.',
          outcome:
            'Delivered clear, readable institutional print layouts built for nationwide magazine distribution.'
        },
        pt: {
          title: 'CAU/BR — INFORMES PUBLICITÁRIOS',
          subtitle: 'Diagramação Editorial & Anúncios em Revista',
          categoryLabel: 'DESIGN EDITORIAL',
          era: '2015–2018 · CAMPANHAS & IMPRESSO',
          role: 'Designer Gráfico Júnior (Agência Comunica)',
          context:
            'Série de informes publicitários e comunicados eleitorais impressos para o Conselho de Arquitetura e Urbanismo do Brasil (CAU/BR).',
          approach:
            'Aplicou vistas urbanas sob filtro azul-celeste com títulos diretos e caixas de texto editorial em múltiplas colunas de alta legibilidade.',
          outcome:
            'Entregou layouts institucionais claros e organizados para veiculação em revistas nacionais.'
        }
      }
    ],

    /* 3 Oversized Discipline Switcher Rows (matching Figma 10:148, 10:155, 10:156) */
    disciplines: [
      {
        id: 'uiux',
        index: '01',
        en: {
          primary: 'UI/UX',
          secondary: 'DESIGN',
          description:
            'Translating complex flows into clean, high-contrast digital interfaces. From structural wireframes and design tokens to interactive Figma mobile & desktop prototypes engineered with motion.',
          deliverables: 'FIGMA SYSTEMS · PROTOTYPING · RESPONSIVE UI · MOTION'
        },
        pt: {
          primary: 'UI/UX',
          secondary: 'DESIGN',
          description:
            'Traduzindo fluxos complexos em interfaces digitais claras e de alto contraste. De wireframes estruturais e tokens de design a protótipos interativos mobile e desktop no Figma.',
          deliverables: 'SISTEMAS NO FIGMA · PROTÓTIPOS · UI RESPONSIVO · MOTION'
        }
      },
      {
        id: 'branding',
        index: '02',
        en: {
          primary: 'BRAND',
          secondary: 'IDENTITY',
          description:
            'Building institutional and commercial visual systems anchored in memorable geometric marks, disciplined typography, and scalable guidelines across public portals, signage, and campaigns.',
          deliverables: 'LOGOTYPES · BRAND GUIDELINES · VISUAL SYSTEMS · ICONOGRAPHY'
        },
        pt: {
          primary: 'BRAND',
          secondary: 'IDENTITY',
          description:
            'Construindo sistemas de identidade visual institucionais e comerciais com símbolos geométricos memoráveis, tipografia rigorosa e aplicação consistente em portais e campanhas.',
          deliverables: 'LOGOTIPOS · MANUAIS DE MARCA · SISTEMAS VISUAIS · ICONOGRAFIA'
        }
      },
      {
        id: 'direction',
        index: '03',
        en: {
          primary: 'ART',
          secondary: 'DIRECTION',
          description:
            'Over a decade directing advertising campaigns, automotive launches, editorial publications, and large-format out-of-home pieces where visual storytelling meets exacting print craft.',
          deliverables: 'CAMPAIGNS · OOH & EMPENAS · EDITORIAL LAYOUT · PHOTO DIRECTION'
        },
        pt: {
          primary: 'DIREÇÃO',
          secondary: 'DE ARTE',
          description:
            'Mais de uma década dirigindo campanhas publicitárias, lançamentos automotivos, peças editoriais e mídia exterior de grande formato unindo narrativa visual e rigor técnico.',
          deliverables: 'CAMPANHAS · MÍDIA OOH · DIAGRAMAÇÃO EDITORIAL · DIREÇÃO VISUAL'
        }
      }
    ],

    toolsList: ['FIGMA', 'ADOBE ILLUSTRATOR', 'ADOBE INDESIGN', 'ADOBE PHOTOSHOP', 'MOTION PROTOTYPING'],

    evolution: [
      {
        category: 'education',
        period: '2026',
        en: {
          role: 'UI/UX & Digital Product Craft',
          org: 'Figma Specializations & Independent Practice',
          detail: 'Mastered end-to-end mobile/desktop prototyping, component systems, motion choreography, and AI-assisted UX workflows (Sonar BSB, Olivia’s Coffee Beans).'
        },
        pt: {
          role: 'Especialização em UI/UX & Produto Digital',
          org: 'Especializações Figma & Prática Independente',
          detail: 'Aprofundamento em prototipação mobile/desktop ponta a ponta, componentização, motion e fluxos assistidos por IA (Sonar BSB, Olivia’s Coffee Beans).'
        }
      },
      {
        category: 'experience',
        period: '2019 — PRESENT',
        en: {
          role: 'Art Director',
          org: 'Governo do Distrito Federal — SECOM',
          detail: 'Leading public-sector brand identities (UnDF, Secretaria de Economia, Clube de Desconto, Fábrica Social) and cross-channel government communication.'
        },
        pt: {
          role: 'Diretor de Arte',
          org: 'Governo do Distrito Federal — SECOM',
          detail: 'Liderança na criação de identidades institucionais (UnDF, Secretaria de Economia, Clube de Desconto, Fábrica Social) e comunicação multicanal.'
        }
      },
      {
        category: 'experience',
        period: '2017 — 2019',
        en: {
          role: 'Art Director',
          org: 'G3 Comunicação',
          detail: 'Directed automotive and retail advertising campaigns including Champion Volvo Novo XC60 OOH launches and Volvo Selekt print systems.'
        },
        pt: {
          role: 'Diretor de Arte',
          org: 'G3 Comunicação',
          detail: 'Direção de arte para campanhas automotivas e varejo, incluindo o lançamento OOH do Volvo Novo XC60 e peças impressas Volvo Selekt.'
        }
      },
      {
        category: 'experience',
        period: '2016 — 2017',
        en: {
          role: 'Graphic Designer',
          org: 'Grupo Voetur',
          detail: 'Visual communication, corporate collateral, and multi-brand design across logistics and tourism business units.'
        },
        pt: {
          role: 'Designer Gráfico',
          org: 'Grupo Voetur',
          detail: 'Comunicação visual, materiais corporativos e peças institucionais para as unidades de logística e turismo do grupo.'
        }
      },
      {
        category: 'experience',
        period: '2014 — 2016',
        en: {
          role: 'Junior Graphic Designer',
          org: 'Agência Comunica',
          detail: 'Editorial layouts, print production, and advertising reports for institutional accounts such as CAU/BR.'
        },
        pt: {
          role: 'Designer Gráfico Júnior',
          org: 'Agência Comunica',
          detail: 'Diagramação editorial, produção gráfica e informes publicitários para contas institucionais como o CAU/BR.'
        }
      },
      {
        category: 'education',
        period: '2010 — 2013',
        en: {
          role: 'B.A. in Advertising & Propaganda',
          org: 'UniCEUB (Centro Universitário de Brasília)',
          detail: 'Graduated in 2013 with earlier trainee experience at Cáritas Brasileira, Escola Superior da DPU, and Hangar 20.'
        },
        pt: {
          role: 'Bacharelado em Publicidade e Propaganda',
          org: 'UniCEUB (Centro Universitário de Brasília)',
          detail: 'Formado em 2013, após estágios iniciais na Cáritas Brasileira, Escola Superior da DPU e Hangar 20.'
        }
      }
    ]
  };

  global.PORTFOLIO_DATA = PORTFOLIO_DATA;
})(window);
