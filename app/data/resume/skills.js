
// TODO - Add sorting method for skills and categories
export const categories = [
  {
    name: 'Languages',
    color: '#e47272',
  }, {
    name: 'Embedded',
    color: '#e4ab72',
  }, {
    name: 'Scripting',
    color: '#e4e472',
  }, {
    name: 'Web',
    color: '#c7e472',
  }, {
    name: 'Python',
    color: '#72e472',
  }, {
    name: 'Tools',
    color: '#72c7e4',
  }, {
    name: 'Software',
    color: '#8e72e4',
  }, {
    name: 'Hardware',
    color: '#ab72e4',
  }, {
    name: 'Other',
    color: '#e472ab',
  }, {
    name: 'Skills',
    color: '#e47272',
  },
];

export const skills = [
  /* Major languages */
  {
    title: 'C',
    compentency: 9,
    category: ['Languages', 'Embedded'],
  },
  {
    title: 'C++',
    compentency: 7,
    category: ['Languages', 'Embedded'],
  },
  {
    title: 'C#',
    compentency: 5,
    category: ['Languages', 'Web'],
  },


  /* Scripting and stuff */
  {
    title: 'Python',
    compentency: 8,
    category: ['Python', 'Languages', 'Scripting'],
  },
  {
    title: 'Matplotib',
    compentency: 6,
    category: ['Python', 'Languages', 'Scripting'],
  },
  {
    title: 'Pylint',
    compentency: 7,
    category: ['Python', 'Tools', 'Scripting'],
  },
  {
    title: 'Numpy',
    compentency: 6,
    category: ['Python', 'Scripting'],
  },
  {
    title: 'pyserial',
    compentency: 8,
    category: ['Python', 'Embedded', 'Scripting'],
  },
  {
    title: 'Bash',
    compentency: 7,
    category: ['Software', 'Scripting', 'Tools'],
  },
  {
    title: 'Cygwin',
    compentency: 7,
    category: ['Software', 'Tools'],
  },
  {
    title: 'JSON',
    compentency: 7,
    category: ['Software', 'Web', 'Scripting'],
  },
  {
    title: 'YAML',
    compentency: 7,
    category: ['Software', 'Web', 'Scripting'],
  },

  /* Software tools */
  {
    title: 'Mercurial',
    compentency: 6,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Git',
    compentency: 8,
    category: ['Software', 'Tools'],
  },
  {
    title: 'ClearCase',
    compentency: 4,
    category: ['Software', 'Tools'],
  },
  {
    title: 'CVS',
    compentency: 4,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Matlab',
    compentency: 3,
    category: ['Tools', 'Software', 'Languages'],
  },
  {
    title: 'JIRA',
    compentency: 10,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Bitbucket',
    compentency: 8,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Bamboo',
    compentency: 6,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Confluence',
    compentency: 8,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Wireshark',
    compentency: 6,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Eclipse',
    compentency: 7,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Windows',
    compentency: 10,
    category: ['Other'],
  },
  {
    title: 'Linux',
    compentency: 7,
    category: ['Other'],
  },
  {
    title: 'Visual Studio',
    compentency: 8,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Jenkins',
    compentency: 6,
    category: ['Software', 'Tools'],
  },
  {
    title: 'Cmake',
    compentency: 5,
    category: ['Software', 'Tools', 'Languages'],
  },
  {
    title: 'Code Collaborator',
    compentency: 3,
    category: ['Software', 'Tools'],
  },
  {
    title: 'MS Office',
    compentency: 9,
    category: ['Other', 'Software'],
  },
  {
    title: 'Sketchup',
    compentency: 6,
    category: ['Tools', 'Software', 'Other'],
  },
  {
    title: 'Mentor Graphics PADS',
    compentency: 5,
    category: ['Tools', 'Software', 'Hardware', 'Other'],
  },

  /* Major web and higher level  */
  {
    title: 'Javascript',
    compentency: 5,
    category: ['Web', 'Languages'],
  },
  {
    title: 'Node.JS',
    compentency: 5,
    category: ['Web'],
  },
  {
    title: 'React',
    compentency: 4,
    category: ['Web'],
  },
  {
    title: 'Typescript',
    compentency: 4,
    category: ['Web', 'Languages'],
  },
  {
    title: 'HTML',
    compentency: 5,
    category: ['Web', 'Languages'],
  },
  {
    title: 'CSS',
    compentency: 5,
    category: ['Web', 'Languages'],
  },
  {
    title: 'SASS/SCSS',
    compentency: 4,
    category: ['Web', 'Languages'],
  },

  /* Hardware */
  {
    title: 'Hardware Schematics',
    compentency: 7,
    category: ['Hardware', 'Skills'],
  },
  {
    title: 'Oscilloscope',
    compentency: 7,
    category: ['Hardware', 'Tools', 'Skills'],
  },
  {
    title: 'Digital Multimeter',
    compentency: 9,
    category: ['Hardware', 'Tools', 'Skills'],
  },
  {
    title: 'Logic Analyzer',
    compentency: 7,
    category: ['Hardware', 'Tools', 'Skills'],
  },
  {
    title: 'Hardware Signal Sources',
    compentency: 6,
    category: ['Hardware', 'Tools', 'Skills'],
  },
  {
    title: 'In Circuit Emulators',
    compentency: 8,
    category: ['Hardware', 'Tools', 'Embedded', 'Skills'],
  },
  {
    title: 'Spectrum Analyzers',
    compentency: 7,
    category: ['Hardware', 'Tools', 'Skills'],
  },

  /* General Skills */
  {
    title: 'Photoshop',
    compentency: 6,
    category: ['Software', 'Skills'],
  },
  {
    title: 'Product Development',
    compentency: 9,
    category: ['Other', 'Skills'],
  },
];
