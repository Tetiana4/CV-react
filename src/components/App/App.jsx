import { Summary } from '../Summary';
import { TechSkills } from '../TechSkills';
import { SoftSkills } from '../SoftSkills';
import { Education } from '../Education';
import { Experience } from '../Experience';
import { Container, Picture, Footer } from './App.styled';
import photo from '../../images/picture.jpg';
import { Contacts } from '../Contacts';
import { Header, MainInfo, MainContainer } from './App.styled';
import { Name } from '../Name';

export const App = () => {
  return (
    <MainContainer>
      <Container>
        <Picture src={photo} alt="my photo" />
        <MainInfo>
          <Name/>
          <Header>
            <Contacts />
            <TechSkills />
            <SoftSkills />
          </Header>
        </MainInfo>
      </Container>
      <Footer>
        <Summary />
        <Experience />
        <Education />
      </Footer>
    </MainContainer>
  );
};
