import {List, Item, Title} from './TechSkills.styled'
const data = [
  'HTML5/CSS3',
  'JavaScript Es6',
  'React.js',
  'React router',
  'redux',
  'Parcel/Webpack',
  'REST API',
  'NPM',
  'Node.js',
];

export const TechSkills = () => {
  return (
    <List>
      <Title>TechSkills</Title>
      {data.map(item => {
        return <Item>{item}</Item>;
      })}
    </List>
  );
};
