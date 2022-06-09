import styled from 'styled-components';

export const StyledCatalogContainer = styled.div`
  display: flex;
  margin: 0 72px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    margin-top: 40px;
    width: 48px;
  }
`;

export const StyledCatalogItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 40px;
  justify-content: center;
  width: 100%;
  /* background-color: yellow; */
  margin: 24px 0;
`;

export const StyledCatalogItem = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 0 2px 0 #777;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  padding-bottom: 8px;
  /* background-color: red; */

  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  & .item-info {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    margin: 8px;
    height: 100%;
  }

  & .item-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  & .item-description {
    font-size: 16px;
    font-weight: 300;
    color: #444;
    margin-bottom: 8px;
  }

  & .item-price {
    font-size: 20px;
    font-weight: 800;
    margin-top: auto;
  }

  & .item-price::before {
    content: 'R$';
    font-size: 18px;
    margin-right: 4px;
    font-weight: 600;
  }
`;
