import { ImLink } from 'react-icons/im';
import { Card, Link, LinkName } from './views.styled';

const projectArray = [
  {
    name: 'Phone Book',
    role: 'react, redax, redax toolkhit and java script',
    link: 'phonebook.netlify.app',
    page: 'https://tetiana-goit-react-hw-08-phonebook.netlify.app/',
    href: 'https://github.com/Tetiana4/goit-react-hw-08-phonebook',
  },
  {
    name: 'Kapu$ta',
    role: 'react, redux in  modal window, section "Statistic"',
    link: 'team-project',
    page: 'https://project-smart-finance.netlify.app/',
    href: 'https://github.com/vmorgunov/project-smart-finance-frontend',
  },
  {
    name: 'Filmoteka',
    role: 'dynamic page pagination with java script',
    link: 'team-project',
    page: 'https://bogdanbon.github.io/team-project-JS/',
    href: 'https://github.com/BogdanBon/team-project-JS',
  },
  {
    name: 'Hellen',
    role: 'html5, css4 in section "Our program"',
    link: 'team-project',
    page: 'https://bogdanbon.github.io/team-project/',
    href: 'https://github.com/BogdanBon/team-project',
  },
];

export const Experience = () => {
  return projectArray.map(item => (
    <Card>
      <LinkName target="_blank" href={item.page}>
        <ImLink /> {item.name}
      </LinkName>
      <p>Technologies: {item.role}</p>
      <Link target="_blank" href={item.href}>
        <ImLink /> {item.link}
      </Link>
    </Card>
  ));
};
