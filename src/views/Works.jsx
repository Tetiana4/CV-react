import { 
  ImLocation,  
} from 'react-icons/im';
import { Card, Title, List, ListTitle } from './views.styled';

const data = [
  {
    place: 'LUNA SHOP',
    position: 'Shop Manager',
    period: '2019-2021 ',
    info: [
        'Motivating employees to reach sales goals and provide excellent customer service',
        'Managing and accounting for all money-handling procedures',
        'Ordering, recording, and managing inventory',
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
        <List key={info.index}>{el}</List>
    ))
}

export const Works = () => {
  return data.map(item => (
    <Card>
      <Title>{item.place}</Title>
      <p><ImLocation/>Warsaw</p>
      <p>{item.position}</p>
          <p>{item.period}</p>
          <ListTitle>Responsibilities: </ListTitle>{getResponsibility(item.info)}
    </Card>
  ));
};
