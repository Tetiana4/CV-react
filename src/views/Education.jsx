import { ImLink } from 'react-icons/im';
import { Card, Title, Link } from './views.styled';

const data = [
  {
    place: 'IT School GoIT',
    position: 'Full Stack Developer',
    period: '2021 - 2022',
    href:'https://goit.ua/?lang=uk'
  },
  {
    place: 'Rivne State University for the Humanities',
    position: 'Information and communication technologies',
    period: '2005-2010',
    href:'https://dir.rshu.edu.ua/'

  },
];

export const Education = () => {
  return (
    <>
      {data.map((item, index) => (
        <Card key={index}>
          <Title>{item.position}</Title>
          <p>{item.period}</p>
          <Link target="_blank" href={item.href}><ImLink/> {item.place}</Link>
        </Card>
      ))}
    </>
  );
};
