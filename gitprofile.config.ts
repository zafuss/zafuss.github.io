// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'zafuss', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/zafus/zafus.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/zafus/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'zafuss/BadmintonManagement',
            'zafuss/BadmintonBookingApp',
          ], // These projects will not be displayed. example: ['zafus/my-project1', 'zafus/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['zafus/my-project1', 'zafus/my-project2']
      },
    },
    external: {
      header: 'My Published Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MathQuiz Application',
          description:
            'A math quiz practice app for students. Users can register/login, take quizzes, review past results, and join classes. Admins can manage users, quizzes, and classes. Built with ASP.Net Core for the backend and Flutter for the frontend.',
          imageUrl:
            'https://play-lh.googleusercontent.com/jzk4udprxbRqywvNTWbzNttgoQdPFGSlm8KymplGpZD5_ojLz6JOwoLKjj2GtHpUZIE=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.zafus.mathquiz',
        },
        {
          title: 'RubikBMT Website',
          description:
            'Official website for RubikBMT Academy. Users can enroll in courses, read and comment on news, and track live competition results. Admins can manage students, posts, and competitions. Developed using Java Spring Boot for the backend and HTML, CSS, Bootstrap, Thymeleaf for the frontend.',
          imageUrl: 'https://www.rubikbmt.vn/images/AvatarRubikBmt.png',
          link: 'https://rubikbmt.vn',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Dang Hoang Gia Phu',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'zafuss',
    phone: '0823216213',
    email: 'zafus.coding@gmail.com',
  },

  dateOfBirth: {
    dateOfBirth: '21/03/2001 | Viet Nam 🇻🇳', // Empty fileUrl will hide the `Download Resume` button.
  },

  description: {
    description:
      'I am a passionate software developer specializing in building modern mobile applications and websites using Flutter, Java Spring Boot and ReactJS. I enjoy solving complex problems and continuously learning new technologies.',
  },

  skills: [
    'Dart (Flutter)',
    'Java (SpringBoot)',
    'ReactJS',
    'NodeJS',
    'C/C++/C#',
    'MySQL',
    'SQLServer',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  certifications: [
    {
      name: 'TOEIC',
      body: '780/990',
      year: 'November 2023',
    },
  ],
  educations: [
    {
      institution: 'Ho Chi Minh City University of Technology (HUTECH)',
      degree: 'Current GPA: 3.67/4.0',
      from: '2021',
      to: 'Present',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'zafus', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/zafus/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
