import { List, Item, Title } from './SoftSkills.styled';

const data = [
  'Creative thinking',
  'Problem solving',
  'Communication',
  'Teamwork',
];

const lenguage = [
  'Polish – intermediate',
  'English – intermediate (in progress)',
  'Ukrainian – native',
  'Russian – native',
];


const getData = (data) => {
  const result =  data.map((item) => {
    return <Item>{item}</Item>;
  })
  return result
}

export const SoftSkills = () => {
  return (
    <List>
      <Title>Soft Skills</Title>
      {getData(data)}
      <Title>Languages</Title>
      {getData(lenguage)}
    </List>
  );
};
