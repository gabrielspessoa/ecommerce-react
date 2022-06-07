import styled, { keyframes } from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledDropdownButton = styled.button`
  border: 0;
  background: none;
  padding: 6px 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.15s ease-in-out;
  position: relative;

  &:hover {
    color: #0048b4;
  }
`;

export const StyledDropdownMenu = styled.button`
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  border: 0;
  background: transparent;
  width: 100%;
  color: #000;
  padding: 8px 8px;
  border-radius: 4px;
  text-align: start;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #242424;
    color: #fff;
  }
`;

export const StyledDropdownMenus = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 8px 0px #0000003d;
  transform-origin: top left;
  position: absolute;
  left: 0;
  top: 100%;

  ${StyledDropdownMenu}:focus & {
    display: none;
  }
`;
