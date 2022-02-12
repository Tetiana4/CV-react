import {ContactBox, Item, Anchor, Title, Location} from './Contacts.styled'
import { ImLinkedin, ImGithub, ImMail4, ImLocation } from "react-icons/im";
const data = [
  '+48 697-33-94-00',
  '+38 099 226-38-79',
];

export const Contacts = () => {
  return (
    <ContactBox>
      <Title>Contacts</Title>
      {data.map(item => {
        return <Item>{item}</Item>;
      })}
      <Location><ImLocation/> Warsaw (ready to move)</Location>
      <Anchor href="mailto:shevchuktetiana4@gmail.com"><ImMail4/> MyMail@gmail.com</Anchor>
      <Anchor href="https://www.linkedin.com/in/tetiana-shevchuk-3b31a720b/"><ImLinkedin/> LinkedIn</Anchor>
      <Anchor href="https://github.com/Tetiana4"><ImGithub/> CitHub</Anchor>
    </ContactBox>
  );
};
