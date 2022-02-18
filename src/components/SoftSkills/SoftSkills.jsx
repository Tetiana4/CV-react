import { List, Title } from './SoftSkills.styled';

const data = [
  'Creative Thinking',
  'Problem Solving',
  'Communication',
  'Teamwork',
];

const lenguage = [
  'Polish – intermediate',
  'English – intermediate (in progress)',
  'Ukrainian – native',
  'Russian – native',
];

export const SoftSkills = () => {
  return (
    <div>
      <Title>Soft Skills</Title>
      {data.map((item, index) => (
        <List key={index}>
          <li>{item}</li>
        </List>
      ))}
      <Title>Languages</Title>
      {lenguage.map((item, index) => (
        <List key={index}>
          <li>{item}</li>
        </List>
      ))}
    </div>
  );
};
