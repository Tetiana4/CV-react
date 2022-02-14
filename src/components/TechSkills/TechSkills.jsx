import { List, Item, Title } from './TechSkills.styled';

const data = [
  'JavaScript Es6',
  'React.js',
  'React Router',
  'Redux Toolkit',
  'Parcel/Webpack',
  'REST API',
  'NPM',
  'Git',
  'Node.js',
  'Next.js(in progress)'
];

export const TechSkills = () => {
  return (
    <List>
      <Title>Technical Skills</Title>
      {data.map(item => {
        return <Item>{item}</Item>;
      })}
    </List>
  );
};
