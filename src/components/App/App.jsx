import { Route, Routes } from 'react-router-dom';
import  Summary    from '../../views/Summary/Summary';
import { TechSkills } from '../TechSkills';
import Experience from '../../views/Experience'
import { SoftSkills } from '../SoftSkills';
import { Name } from '../Name';
import { Navigation } from '../Navigation';
import { Contacts } from '../Contacts';
import photo from '../../images/picture.jpg';
import { Header, MainInfo, MainContainer, Container, Picture } from './App.styled';

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
      <Navigation />
      <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="experience" element={<Summary />} />
        </Routes>
    </MainContainer>
  );
};
