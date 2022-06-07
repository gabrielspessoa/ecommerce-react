import { Component, ReactNode, useState } from 'react';
import {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownMenu,
  StyledDropdownMenus,
} from './style';

export function Anchor(props: { children?: ReactNode; href?: string }) {
  if (props.href) {
    return <a href={props.href}>{props.children}</a>;
  } else {
    return <>{props.children}</>;
  }
}

export function DropdownMenu(props: { children: ReactNode; href?: string }) {
  return (
    <Anchor href={props.href}>
      <StyledDropdownMenu>{props.children}</StyledDropdownMenu>
    </Anchor>
  );
}

export function Dropdown(props: { text: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMouseEnter() {
    setIsOpen(true);
  }
  function handleMouseLeave() {
    setIsOpen(false);
  }
  return (
    <StyledDropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledDropdownButton>{props.text || 'Menu'}</StyledDropdownButton>
      {isOpen && <StyledDropdownMenus>{props.children}</StyledDropdownMenus>}
    </StyledDropdown>
  );
}
