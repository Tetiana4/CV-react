import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 5px 5px 5px grey;
  padding: 30px;
  max-width: 600px;
`;

export const Title = styled.h3`
  margin: 0;
`;
export const ListTitle = styled.p`
  justify-content: start;
  display: flex;
  margin: 0 0 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #3e4147;
  font-weight: bold;

  &:hover {
    color: grey;
  }
`;

export const Text = styled.p`
  padding: 20px 100px;
  line-height: 25px;
`;
export const List = styled.div`
  display: flex;
  justify-content: start;
  text-align: start;
`;

export const LinkName = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: inherit;
  &:hover {
    color: grey;
  }
`;
