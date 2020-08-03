const theme = require('prism-react-renderer/themes/github');
const darkTheme = require('prism-react-renderer/themes/vsDark');

module.exports = {
  title: 'Gearbox',
  tagline: 'A web framework written in Go with a focus on high performance',
  url: 'https://gogearbox.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'gogearbox',
  projectName: 'website',
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      theme,
      darkTheme,
      defaultLanguage: 'go',
      additionalLanguages: ['powershell'],
    },
    navbar: {
      title: 'Gearbox',
      logo: {
        alt: 'gearbox logo',
        src: 'img/gearbox.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/gogearbox/gearbox',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.com/invite/CT8my4R',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Gearbox Contributors`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gogearbox/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
