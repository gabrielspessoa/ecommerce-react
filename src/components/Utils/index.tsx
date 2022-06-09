import styled from 'styled-components';

interface ContainerProps {
  margin?: string;
  justify?: string;
}

interface ButtonProps {
  margin?: string;
}

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : '72px')};
  justify-content: ${(props) => (props.justify ? props.justify : null)};
`;

export const Input = styled.input`
  border: solid 1px #bbb;
  border-radius: 4px;
  background-color: #fff;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  outline: solid 2px transparent;
  box-shadow: 0 0 0 0px #0048b4;
  transition: box-shadow 0.15s ease-in-out, border 0.15s ease-in-out;

  &:hover {
    border: solid 1px #777;
  }

  &:focus-visible {
    border: solid 1px transparent;
    box-shadow: 0 0 0 2px #0048b4;
  }
`;

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: 4px;
  background-color: #0048b4;
  color: #fff;
  height: 36px;
  padding: 0 16px;
  cursor: pointer;
  margin: ${(props) => (props.margin ? props.margin : null)};

  &:hover {
    background-color: #003483;
  }
`;
