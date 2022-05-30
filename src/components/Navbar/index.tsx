import { CaretDown, ShoppingCart, User } from 'phosphor-react';
import { useState } from 'react';
import {
  NavBrand,
  NavContainer,
  StyledNavDropdown,
  NavItem,
  NavItemContainer,
  NavItemGroup,
  NavMain,
  NavMenu,
  NavSearch,
} from './style';

function NavDropdown(props: { children: any }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave() {
    setIsOpen(false);
  }

  return (
    <StyledNavDropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </StyledNavDropdown>
  );
}

export function Navbar() {
  return (
    <>
      <NavContainer>
        <NavMain>
          <NavBrand>
            <a href='/'>E-commerce</a>
          </NavBrand>
          <NavItemContainer>
            <NavItemGroup>
              <NavSearch type='search' placeholder='O que procura?'></NavSearch>
            </NavItemGroup>
            <NavItemGroup>
              <NavItem href='/'>
                <ShoppingCart size={28} />
              </NavItem>
              <NavItem href='/'>
                <User size={28} /> Gabriel Pessoa
              </NavItem>
            </NavItemGroup>
          </NavItemContainer>
        </NavMain>
        <NavMenu>
          <NavItemContainer>
            <NavItemGroup>
              <NavDropdown>
                Teste <CaretDown size={16} />
              </NavDropdown>
              <NavDropdown>
                Teste2 <CaretDown size={16} />
              </NavDropdown>
            </NavItemGroup>
          </NavItemContainer>
        </NavMenu>
      </NavContainer>
    </>
  );
}
