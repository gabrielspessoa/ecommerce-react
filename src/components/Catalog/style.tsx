import styled from 'styled-components';

export const StyledCatalogContainer = styled.div`
  display: flex;
  margin: 0 72px;
`;

export const StyledCatalogItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  width: 100%;
  /* background-color: yellow; */
  margin: 24px 0;
`;

export const StyledCatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-shadow: 0 0 1px 0 #777;
  /* background-color: red; */
`;
