import { List, Title } from './TechSkills.styled';

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
  'Next.js(in progress)',
];

export const TechSkills = () => {
  return (
    <div>
      <Title>Technical Skills</Title>
      {data.map((item, index)=> (
        <List key={index}>
          <li>{item}</li>
        </List>
      ))}
    </div>
  );
};
