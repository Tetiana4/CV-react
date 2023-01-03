import {
  ImLinkedin,
  ImGithub,
  ImMail4,
  ImLocation,
  ImMobile,
  ImSkype,
} from 'react-icons/im';
import { ContactBox, Link, Title, Item } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactBox>
      <Title>Contacts</Title>
      <Item>
        <ImLocation /> Warsaw 
      </Item>
      <Link href="tel:+48697339400">
        <ImMobile />
        +48 697-33-94-00 (WhatsApp, Telegram)
      </Link>
      <Link href="tel:+380992263879">
        <ImMobile />
        +38 099 226-38-79 (Viber)
      </Link>
      <Link target="_blank" href="mailto:shevchuktetiana4@gmail.com">
        <ImMail4 /> shevchuktetiana4@gmail.com
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/tetiana-shevchuk-3b31a720b/"
      >
        <ImLinkedin /> LinkedIn
      </Link>
      <Link target="_blank" href="https://github.com/Tetiana4">
        <ImGithub /> GitHub
      </Link>
      <Link target="_blank" href="https://join.skype.com/invite/DIoRVMW30XcA">
        <ImSkype /> Skype
      </Link>
    </ContactBox>
  );
};
