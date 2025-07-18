import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '619'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7df'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e20'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pitch',
                component: ComponentCreator('/docs/pitch', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema de amistad/Analisis del sistema',
                component: ComponentCreator('/docs/Sistema de amistad/Analisis del sistema', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema de amistad/Propuesta UX-UI',
                component: ComponentCreator('/docs/Sistema de amistad/Propuesta UX-UI', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema de amistad/Sistema - Amistad',
                component: ComponentCreator('/docs/Sistema de amistad/Sistema - Amistad', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema de desbloqueo de pefil/propuesta',
                component: ComponentCreator('/docs/Sistema de desbloqueo de pefil/propuesta', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema de ecos simbolicos/Propuesta UX-UI',
                component: ComponentCreator('/docs/Sistema de ecos simbolicos/Propuesta UX-UI', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema de ecos simbolicos/Sistema - Ecos Simbolicos',
                component: ComponentCreator('/docs/Sistema de ecos simbolicos/Sistema - Ecos Simbolicos', '137'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema global/ecos y amistad',
                component: ComponentCreator('/docs/Sistema global/ecos y amistad', 'a28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema global/ecos y amistad en profundidad',
                component: ComponentCreator('/docs/Sistema global/ecos y amistad en profundidad', '6d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sistema global/Sistema global - los 3 sistemas juntos',
                component: ComponentCreator('/docs/Sistema global/Sistema global - los 3 sistemas juntos', '33e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
