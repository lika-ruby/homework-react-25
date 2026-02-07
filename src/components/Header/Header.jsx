import { Container } from "../Container/Container.jsx";
import { HeaderS, Nav, List, Item, Link } from "./Header.js";

export const Header = () => {
  return (
    <HeaderS>
      <Container>
        <Nav>
          <List>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/movies">Movies</Link>
            </Item>
          </List>
        </Nav>
      </Container>
    </HeaderS>
  );
};
