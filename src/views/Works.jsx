import { Card, Title, List } from './views.styled';

const data = [
  {
    place: 'LUNA SHOP',
    position: 'Shop Manager',
    period: '2019-2021 ',
    info: [
        'Managing and accounting for all money-handling procedures',
        'Ordering, recording, and managing inventory',
      'Motivating employees to reach sales goals and provide excellent customer service',
    ],
  },
  {
    place: 'Lesław A.Paga Foundation',
    position: 'Project assistant',
    period: '2018-2019',
      info: [
      'Acting as stand-in for the project manager',
      'Management of the project office',
      'Support with the preparation of project plans',
    ],
  },
];


function getResponsibility(info) {
    return info.map((el) => (
        <List>{el}</List>
    ))
}

export const Works = () => {
  return data.map(item => (
    <Card>
      <Title>{item.place}</Title>
      <p>{item.position}</p>
          <p>{item.period}</p>
          {getResponsibility(item.info)}
    </Card>
  ));
};
