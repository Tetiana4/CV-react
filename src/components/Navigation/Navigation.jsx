import { NavLinkStyles, Container, ContainerMobile, NavLinkStylesMob } from './Navigation.styled';
import { useMediaQuery } from 'react-responsive';

export const Navigation = () => {
  const isDesktop = useMediaQuery({ minWidth: 1160 });
  //   const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1159 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 1159 });

  return (
    <>
      {isDesktop && (
        <Container>
          <NavLinkStyles to="/">Summary</NavLinkStyles>
          <NavLinkStyles to="/projects">Project Experience</NavLinkStyles>
          <NavLinkStyles exact to="/education">
            Education
          </NavLinkStyles>
          <NavLinkStyles exact to="/experience">
            Work Experience
          </NavLinkStyles>
        </Container>
      )}

      {isMobile && (
        <ContainerMobile>
          <NavLinkStylesMob to="/">Summary</NavLinkStylesMob>
          <NavLinkStylesMob to="/projects">Project Experience</NavLinkStylesMob>
          <NavLinkStylesMob exact to="/education">
            Education
          </NavLinkStylesMob>
          <NavLinkStylesMob exact to="/experience">
            Work Experience
          </NavLinkStylesMob>
        </ContainerMobile>
      )}
    </>
  );
};
