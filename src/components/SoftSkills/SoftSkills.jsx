import {List, Item, Title} from './SoftSkills.styled'

const data = [
  'Conflict resolution',
  'Creative Thinking',
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Passion'
];

export const SoftSkills = () => {
  return (
    <List>
      <Title>SoftSkills</Title>
      {data.map(item => {
        return <Item>{item}</Item>;
      })}
    </List>
  );
};
