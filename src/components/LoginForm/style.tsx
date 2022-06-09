import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;

  & label {
    font-weight: 600;
    margin-bottom: 8px;
  }

  & .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
  }
`;
