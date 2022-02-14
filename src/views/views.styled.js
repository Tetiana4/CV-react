import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin: 20px auto;
  box-shadow: 5px 5px 5px grey;
  text-align: center;
  padding: 30px;
  max-width: 600px;
  //   color: white;
  //   background-color: black;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #3e4147;
  &:hover {
    color: black;
  }
`;

export const Text = styled.p`
  padding: 20px 100px;
  line-height: 25px;
`;
export const List = styled.div`
  display: flex;
  justify-content: start;
`;
