import { CaretDown, CaretRight, ShoppingCart, User } from 'phosphor-react';
import {
  NavBrand,
  NavContainer,
  NavItem,
  NavItemContainer,
  NavItemGroup,
  NavMain,
  NavMenu,
  NavSearch,
  // StyledAnchor,
  // StyledMenu,
  // StyledMenuButton,
  // StyledMenuItems,
  // StyledSubMenuButton,
} from './style';
import { Menu } from '@headlessui/react';
import { Dropdown, DropdownMenu } from '../Dropdown';

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
              <Dropdown text='Menu'>
                <DropdownMenu>Teste 1</DropdownMenu>
                <DropdownMenu href='https://facebook.com'>Teste 2</DropdownMenu>
              </Dropdown>
              {/* <StyledMenu forwardedAs='div'>
                <StyledMenuButton>
                  Teste <CaretDown size={16} />
                </StyledMenuButton>
                <StyledMenuItems>
                  <Menu.Item>
                    {({ active }: any) => (
                      <StyledAnchor active={active} href='teste'>
                        Teste
                      </StyledAnchor>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }: any) => (
                      <StyledAnchor active={active} href='teste'>
                        Teste
                      </StyledAnchor>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }: any) => (
                      <StyledAnchor active={active} href='teste'>
                        Teste
                      </StyledAnchor>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <StyledMenu forwardedAs='div'>
                      <StyledSubMenuButton>
                        Submenu <CaretRight size={16} />
                      </StyledSubMenuButton>
                      <StyledMenuItems>
                        <Menu.Item>
                          {({ active }: any) => (
                            <StyledAnchor active={active} href='teste'>
                              Teste
                            </StyledAnchor>
                          )}
                        </Menu.Item>
                      </StyledMenuItems>
                    </StyledMenu>
                  </Menu.Item>
                </StyledMenuItems>
              </StyledMenu> */}
            </NavItemGroup>
          </NavItemContainer>
        </NavMenu>
      </NavContainer>
    </>
  );
}
