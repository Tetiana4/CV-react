import {ContactBox,  Anchor, Title, Location, Telefon} from './Contacts.styled'
import { ImLinkedin, ImGithub, ImMail4, ImLocation, ImMobile } from "react-icons/im";

export const Contacts = () => {
  return (
    <ContactBox>
      <Title>Contacts</Title>
      <Telefon><ImMobile/>+48 697-33-94-00</Telefon>
      <Telefon><ImMobile/>+38 099 226-38-79</Telefon>
      <Location><ImLocation/> Warsaw (ready to move)</Location>
      <Anchor href="mailto:shevchuktetiana4@gmail.com"><ImMail4/> MyMail@gmail.com</Anchor>
      <Anchor href="https://www.linkedin.com/in/tetiana-shevchuk-3b31a720b/"><ImLinkedin/> LinkedIn</Anchor>
      <Anchor href="https://github.com/Tetiana4"><ImGithub/> CitHub</Anchor>
    </ContactBox>
  );
};
