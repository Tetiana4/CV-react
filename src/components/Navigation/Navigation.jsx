import {NavLinkStyles, Container} from './Navigation.styled'
export const Navigation = () => {
    return (
        <Container>
            <NavLinkStyles to="/">Summary</NavLinkStyles>
            <NavLinkStyles to="/experience">Experience</NavLinkStyles>
            <NavLinkStyles exact to="/education">Education</NavLinkStyles>           
        </Container>
    )
}