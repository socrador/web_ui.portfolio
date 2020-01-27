const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Jeff Bassett',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Jeff Bassett',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Jeff Bassett',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Jeff Bassett',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Jeff Bassett',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
