import { ImLink } from 'react-icons/im';
import { Card, Link, Title } from './views.styled';

const projectArray = [
  {
    name: 'Phone Book',
    role: 'my own project with redux, react and Java Script',
    link: 'phonebook.netlify.app',
    href: 'https://tetiana-goit-react-hw-08-phonebook.netlify.app/',
  },
  {
    name: 'Hellen',
    role: 'section "Our program"',
    link: 'team-project',
    href: 'https://bogdanbon.github.io/team-project/',
  },
  {
    name: 'Filmoteka',
    role: 'dynamic page pagination with Java Script',
    link: 'team-project',
    href: 'https://bogdanbon.github.io/team-project-JS/',
  },

  {
    name: 'Kapu$ta',
    role: 'Modal window, Statistic section',
    link: 'team-project',
    href: 'https://project-smart-finance.netlify.app/',
  },
];

export const Experience = () => {
  return projectArray.map(item => (
    <Card>
      <Title>{item.name}</Title>
      <p>{item.role}</p>
      <Link target="_blank" href={item.href}>
        <ImLink /> {item.link}
      </Link>
    </Card>
  ));
};
