export default {
  global: {
    componenteFormativo:
      'Fundamentos de seguridad digital y análisis de riesgos',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz profundizará en los fundamentos necesarios para diagnosticar el estado actual de la ciberseguridad en una organización, adoptando métodos de análisis y valoración de riesgos, como elementos fundamentales para definir un plan de tratamiento adecuado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de redes y <i>networking</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de redes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modelo OSI',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Protocolo TCP/IP',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Protocolos IPv4 e IPv6',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Enrutamiento IP',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad y estándares: ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad y estándares: seguridad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Marco legal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Marco jurídico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tipificación de delitos informáticos en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Activos de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Características de los activos de información',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Tipos de activos de información',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Técnicas de valoración de activos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Amenazas y vulnerabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Características y tipos de amenazas y vulnerabilidades',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Vulnerabilidades del sistema',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Amenazas de ataques de denegación de servicio',
            hash: 't_8_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.4',
            titulo: 'Vulnerabilidades producidas por contraseñas',
            hash: 't_8_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.5',
            titulo: 'Vulnerabilidades producidas por usuarios',
            hash: 't_8_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.6',
            titulo: 'Otras amenazas informáticas',
            hash: 't_8_6',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Niveles de riesgo',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Características, impacto y análisis de riesgos',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: '<i>Ethical hacking</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Objetivos del <i>ethical hacking</i>',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Tipos de pruebas de penetración',
            hash: 't_10_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228124_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad y estándares de ciberseguridad: ISO (2018)',
      referencia:
        '<i>Seguridad de la información, ciberseguridad y protección de la privacidad </i>(ISO  27005).',
      tipo: 'Norma',
      link: 'https://www.iso.org/standard/75281.html',
    },
    {
      tema: 'Normatividad y estándares de ciberseguridad: ISO (2013)',
      referencia:
        '<i>Seguridad de la información, ciberseguridad y protección de la privacidad </i>(ISO  27002).',
      tipo: 'Norma',
      link: 'https://www.iso.org/standard/54533.html',
    },
    {
      tema:
        'Normatividad y estándares de seguridad de la información: ISO (2018)',
      referencia:
        '<i>Seguridad de la información, ciberseguridad y protección de la privacidad </i>(ISO  27005).',
      tipo: 'Norma',
      link: 'https://www.iso.org/standard/75281.html',
    },
    {
      tema:
        'Normatividad y estándares de seguridad de la información: ISO (2013)',
      referencia:
        '<i>Seguridad de la información, ciberseguridad y protección de la privacidad </i>(ISO  27002).',
      tipo: 'Norma',
      link: 'https://www.iso.org/standard/54533.html',
    },
    {
      tema: 'Características, impacto y análisis de riesgos: ISO (2018)',
      referencia: '<i>Gestión del riesgo. Directrices</i> (ISO 31000).',
      tipo: 'Norma',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es',
    },
  ],
  glosario: [
    {
      termino: 'Activos de información',
      significado:
        'los activos de información relacionados con la seguridad de la información, hacen referencia a cualquier información o dispositivo que tenga que ver con el tratamiento de ésta y que sea de valor para la organización.',
    },
    {
      termino: 'Auditoría',
      significado:
        'se trata de aquella acción que consiste en emitir criterios y opiniones profesionales acerca de cualquier objeto de análisis, del cual se espera que represente de manera adecuada la realidad que pretende reflejar; también sobre si cumple o no con las condiciones y funcionalidades que se han acordado en el nivel de servicio.',
    },
    {
      termino: 'Auditorías internas de SGSI',
      significado:
        'el principal objetivo de este tipo de auditoría de SGSI es investigar si existe algo que esté mal realizado, de manera objetiva. El auditor interno tiene que ser una persona capacitada, con su conocimiento debe poder descubrir si algo se hace mal dentro de la organización. Realizando un buen trabajo, correctivo y/o preventivo, entonces la auditoría interna de SGSI mejorará su seguridad.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de metodologías, medidas y controles destinados a gestionar la seguridad de la información de una organización y/o de la información en general.',
    },
    {
      termino: 'Ethical hacking',
      terminoHtml: '<em>Ethical hacking</em>',
      significado:
        'es un proceso que se da al interior de las organizaciones a través del cual se exploran las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones <i>web</i>, bases de datos, servidores, etc.',
    },
    {
      termino: 'Malware',
      terminoHtml: '<em>Malware</em>',
      significado:
        'se refiere a todos aquellos archivos que contaminan y pueden comprometer tanto la seguridad, como la utilidad y preservación del equipo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'toda posibilidad de sufrir una afectación por causa de factores externos o internos. El riesgo es un peligro latente que puede o no materializarse. En el orden informático y de ciberseguridad, los riesgos no son distintos. Contemplan las vulnerabilidades y las amenazas y pueden ser controlados, tratados, mitigados, prevenidos y, en algunos casos, eliminados.',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'es aquella rama del saber que tiene ocupación en el diseño de normas y criterios, procedimientos y métodos, técnicas y estrategias, dirigidos a lograr seguridad y confiabilidad en un sistema de información.',
    },
    {
      termino: 'Virus informático',
      significado:
        'los virus informáticos son los que se instalan en un dispositivo con el fin de proporcionar dificultades en su funcionamiento. ',
    },
  ],
  referencias: [
    {
      referencia: '<i>Cloud Education</i> (2021). Redes. IBM.',
      link:
        'https://www.ibm.com/co-es/cloud/learn/networking-a-complete-guide#toc-trminos-y--ZhqcZz4r',
    },
    {
      referencia:
        '<i>Corporation and/or its affiliates (2010). Modelo de referencia</i> OSI. ORACLE.',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas (2012). Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.',
      link:
        'https://administracionelectronica.gob.es/pae_Home/dam/jcr:fb373672-f804-4d05-8567-2d44b3020387/2012_Magerit_v3_libro1_metodo_es_NIPO_630-12-171-8.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (2017). Guía de transición IPv4 a IPv6 para Colombia.',
      link:
        'https://www.mintic.gov.co/portal/715/articles-162301_guia_transicion_ipv4_ipv6.pdf',
    },
    {
      referencia:
        'Organización de Estados Americanos (2019). Ciberseguridad marco NIST. Un abordaje integral de la ciberseguridad.',
      link:
        'https://www.oas.org/es/sms/cicte/docs/OEA-AWS-Marco-NIST-de-Ciberseguridad-ESP.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO 2013). Seguridad de la información, ciberseguridad y protección de la privacidad (ISO 27001).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Pablo Cesar Pardo Ortiz',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhana Johanna Bustillo Ardila',
          cargo: 'Revisión de estilo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jorge Enrique Haylock Calderín',
          cargo: 'Desarrollo front-end',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Melina Tatiana Quintero Rodriguez',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Guiza',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
