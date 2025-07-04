// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.vsLight;
const darkTheme = themes.oceanicNext;

const IDT_SHORT = "IDT";
const IDT_TITLE = "IDT Lab";
const IDT_DESCRIPTION = `
At Innovative Data Technologies (IDT) Lab, we conduct research in all aspects of data management for science, including storage and I/O, file systems, metadata management, data quality assessment and improvement, performance analysis, performance tuning, data security, and energy-efficiency. Our emphasis is on developing systems and tools that make managing scientific data efficient and easy for scientists using high-performance computing (HPC), cloud, and edge computing systems.`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: IDT_TITLE,
  tagline: IDT_DESCRIPTION,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://idtlab.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "idtlab", // Usually your GitHub org/user name.
  projectName: "idtlab.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./docusaurus.sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      metadata: [
        {
          name: "description",
          content:
            "At Innovative Data Technologies (IDT) Lab, we conduct research in all aspects of data management for science, including storage and I/O, file systems, metadata management, data quality assessment and improvement, performance analysis, performance tuning, data security, and energy-efficiency. Our emphasis is on developing systems and tools that make managing scientific data efficient and easy for scientists using high-performance computing (HPC), cloud, and edge computing systems.",
        },
        {
          name: "keywords",
          content: [
            "high-performance computing (hpc)",
            "memory and storage systems",
            "scalable software systems",
            "data management",
            "data-centric systems",
            "research center",
            "scalable system software",
            "technology research",
            "computational research",
            "innovative technology",
            "scientific research",
            "data readiness for ai",
            "security in data management",
            "metadata management",
            "data quality assessment",
            "performance analysis",
            "performance tuning",
            "data security",
            "energy efficiency",
            "data management for science",
            "data management for high-performance computing",
            "data management for cloud computing",

          ].join(", "),
        },
      ],
      navbar: {
        style: "primary",
        title: IDT_TITLE,
        logo: {
          alt: IDT_TITLE,
          src: "img/logo.png",
        },
        items: [
          {
            label: "IDT",
            position: "left",
            items: [
              {
                to: "/about",
                label: "About",
              },
              {
                to: "/members",
                label: "Members",
              },
              {
                to: "/network",
                label: "Network",
              },
              {
                to: "/contact",
                label: "Contact",
              },
            ],
          },
          {
            label: "Research",
            position: "left",
            items: [
              {
                to: "/research/projects",
                label: "Projects",
              },
              {
                to: "/research/patents",
                label: "Patents",
              },
              // {
              //   to: "/resources/hardware-overview",
              //   label: "Hardware Overview",
              // },
            ],
          },
          {
            to: "/news",
            label: "News",
            position: "left",
          },
          {
            to: "/publications",
            label: "Publications",
            position: "left",
          },
          {
            to: "/opportunities",
            label: "Opportunities",
            position: "left",
          },
          // {
          //   to: "/blog",
          //   label: "Blog",
          //   position: "right",
          // },
          // {
          //   type: "docSidebar",
          //   label: "Tutorials",
          //   sidebarId: "tutorialSidebar",
          //   position: "right",
          // },
          
          
          {
            label: "Software",
            position: "right",
            items: [
              {
                label: "PDC",
                href: "https://github.com/hpc-io/pdc",
              },
              {
                label: "h5bench",
                href: "https://github.com/hpc-io/h5bench",
              },
              {
                label: "Drishti",
                href: "https://github.com/hpc-io/drishti",
              },
            ]
            
          },
          {
            label: "GitHub",
            position: "right",
            items: [
              {
                label: "IDT GitHub",
                href: "https://github.com/idtlab",
                
              },
              {
                label: "HPC-IO GitHub",
                href: "https://github.com/hpc-io",
                
              },
            ],
          },

          
        ],
      },
      footer: {
        style: "dark", // Uncomment if using a dark theme
        links: [
          {
            title: "Contact",
            items: [
              {
                html: `
                  <p>
                    <strong>Dreese Laboratory</strong><br />
                    2015 Neil Ave.<br />
                    Columbus, OH 43201<br />
                  </p>
                `,
              },
              {
                html: `
                  <p>
                    Email: <a href="mailto:byna.1@osu.edu" target="_blank" rel="noopener noreferrer">byna.1@osu.edu</a>
                  </p>
                `,
              },
            ],
          },
          {
            title: "University Links",
            items: [
              {
                label: "Ohio State University",
                href: "https://www.osu.edu/",
              },
              {
                label: "CSE Department",
                href: "https://cse.osu.edu/",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "IDT GitHub",
                href: "https://github.com/idtlab",
              },
              {
                label: "HPC-IO GitHub",
                href: "https://github.com/hpc-io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${IDT_TITLE}`,
      },
      
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "newsletter",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "newsletter",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./newsletter",
      },
    ],
  ],
};

module.exports = config;
