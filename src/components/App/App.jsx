import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import { Summary, Experience, Education, Works } from '../../views';
import { TechSkills } from '../TechSkills';
import { SoftSkills } from '../SoftSkills';
import { Name } from '../Name';
import { Navigation } from '../Navigation';
import { Contacts } from '../Contacts';
import photo from '../../images/picture.jpg';
import './App.css';
import {
  Header,
  // MainContainer,
  Container,
  Picture,
  SkillsStyle,
  ContainerMobile,
  Box,
} from './App.styled';

import { createContext } from 'react';

export const ThemeContext = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };
  const isDesktop = useMediaQuery({ minWidth: 1160 });
  const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1159 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 769 });

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="main" id={theme}>
        <div className="switch">
          <label className="label">
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            onColor="#000"
            onHandleColor="#555"
            offHandleColor="#fff"
            activeBoxShadow="0 0 5px 5px #202142"
          />
        </div>
        {isMobile && (
          <>
            <ContainerMobile>
              <Picture src={photo} alt="my photo" />
              <Name />
              <Contacts />
              <TechSkills />
              <SoftSkills />
            </ContainerMobile>
          </>
        )}
        {isTablet && (
          <>
            <Container>
              <Picture src={photo} alt="my photo" />
              <Box>
                <Name />
                <Contacts />
              </Box>
            </Container>
            <SkillsStyle>
              <TechSkills />
              <SoftSkills />
            </SkillsStyle>
          </>
        )}

        {isDesktop && (
          <>
            <Container>
              <Picture src={photo} alt="my photo" />
              <Box>
                <Name />
                <Header>
                  <Contacts />
                  <TechSkills />
                  <SoftSkills />
                </Header>
              </Box>
            </Container>
          </>
        )}
        <Navigation />
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="projects" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Works />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};
