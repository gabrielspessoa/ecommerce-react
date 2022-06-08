import styled from 'styled-components';
import { Menu } from '@headlessui/react';
import timesCircle from '../../assets/images/times-circle.svg';

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
    /* color: #000; */
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
  color: #000;

  &:hover {
    background-color: #e1e6ed;
  }
`;

// export const StyledMenuItems = styled(Menu.Items)`
//   display: flex;
//   flex-direction: column;
//   /* gap: 8px; */
//   background: #fff;
//   width: 200px;
//   padding: 8px;
//   border-radius: 4px;
//   box-shadow: 0px 1px 8px 0px #0000003d;
//   position: absolute;
//   left: 0;
//   transform-origin: top left;
// `;

// export const StyledMenu = styled(Menu)`
//   position: relative;

//   /* ${StyledMenuItems} {
//     position: absolute;
//     left: 100%;
//     top: 50%;
//     transform: translateY(-50%);
//   } */
// `;

// export const StyledMenuButton = styled(Menu.Button)`
//   border: 0;
//   background: none;
//   padding: 2px 0;
//   /* padding: 6px 18px; */
//   border-radius: 4px;
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   cursor: pointer;
//   transition: color 0.15s ease-in-out;
//   position: relative;

//   &:hover {
//     color: #0048b4;
//   }

//   &:focus-visible {
//     outline: solid 2px #000;
//   }
// `;

// export const StyledAnchor = styled.a`
//   transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
//   background: ${(props: { active?: boolean }) =>
//     props.active ? '#242424' : null};
//   color: ${(props: { active: boolean }) => (props.active ? '#fff' : '#000')};
//   padding: 8px 8px;
//   border-radius: 4px;
// `;

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
  &::-webkit-search-cancel-button {
    appearance: none;
    position: absolute;
    right: 18px;
    height: 15px;
    width: 15px;
    background: url('/images/times-circle.svg') no-repeat 50% 50%;
  }
`;

// export const StyledSubMenuButton = styled(Menu.Button)`
//   transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
//   border: 0;
//   background: transparent;
//   width: 100%;
//   color: #000;
//   padding: 8px 8px;
//   border-radius: 4px;
//   text-align: start;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;

//   &:hover {
//     background: #242424;
//     color: #fff;
//   }
// `;
