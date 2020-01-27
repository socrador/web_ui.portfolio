
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

/*
JSON, YAML, React.js, HTML,
CSS, Java, Javascript, Typescript,
VBA, Powershell

Tools
Atlassian Toolset (JIRA, Bitbucket, Bamboo, Confluence, Fisheye),
Wireshark, Eclipse IDE, Visual Studio, Jenkins,
Cmake, Code Collaborator,

Version Control Systems
Git, Mercurial, ClearCase, CVS


General
Windows, Linux, Cygwin, MS Office Suite, MS Visio, MS Project,
MS Outlook, MS Teams, Lotus Notes, Sketchup, Mentor Graphics PADS

HARDWARE
•	Oscilloscopes
•	DMM
•	Logic Analyzers
•	Spectrum Analyzers
•	Hardware Signal Sources
•	In-Circuit Emulators
•	Hardware Circuit Diagrams

*/
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

  /* Software tools */
  {
    title: 'Mercurial',
    compentency: 3,
    category: ['Tools'],
  },
  {
    title: 'Git',
    compentency: 3,
    category: ['Tools'],
  },
  {
    title: 'Matlab',
    compentency: 2,
    category: ['Data Science', 'Machine Learning', 'Languages'],
  },

  /* Major web and higher level  */
  {
    title: 'Javascript',
    compentency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    compentency: 5,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'React',
    compentency: 4,
    category: ['Web Development', 'Frameworks', 'Javascript'],
  },
  {
    title: 'Typescript',
    compentency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML',
    compentency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'CSS',
    compentency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SASS/SCSS',
    compentency: 3,
    category: ['Web Development', 'Languages'],
  },

  

  /* General Skills */
  {
    title: 'Photoshop',
    compentency: 3,
    category: ['Design'],
  },
  {
    title: 'Product Development',
    compentency: 3,
    category: ['Other'],
  },
];
