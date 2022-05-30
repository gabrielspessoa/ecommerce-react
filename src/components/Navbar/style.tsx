import styled from 'styled-components';

// nav container
export const NavContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  font-family: 'Poppins';
  /* height: 64px; */
  /* align-items: center; */
  padding: 0 54px;
  /* gap: 42px; */
  box-shadow: 0 0 10px 0px #00000021;

  a {
    text-decoration: none;
    color: #000;
  }
`;

// nav main section (brand, account, cart)

export const NavMain = styled.div`
  display: flex;
  gap: 42px;
  height: 64px;
  align-items: center;
`;

// nav menus (dropdowns)

export const NavMenu = styled.div`
  display: flex;
  gap: 42px;
  height: 38px;
  padding-bottom: 10px;
  align-items: center;
`;

// nav title or logo
export const NavBrand = styled.div`
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;

  a {
    color: #0048b4;
  }
`;

// buttons or anchors container
export const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
`;

// a group of anchors for space-between work
export const NavItemGroup = styled.div`
  display: flex;
  gap: 12px;
`;

// nav anchor item
export const NavItem = styled.a`
  padding: 6px 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #e1e6ed;
  }
`;

export const StyledNavDropdown = styled.div`
  padding: 6px 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: color 0.15s ease-in-out;
  position: relative;

  &:hover {
    color: #0048b4;
  }
`;

export const NavSearch = styled.input`
  padding: 8px 18px;
  border-radius: 999px;
  border: 0;
  background-color: #e9e9e9;
  width: 200px;
  outline: solid 2px transparent;
  transition: width 0.15s ease-out, outline 0.15s ease-in-out,
    background-color 0.15s ease-out;

  &:focus-visible {
    outline: solid 2px #0048b4;
    background-color: transparent;
    width: 300px;
  }
`;
