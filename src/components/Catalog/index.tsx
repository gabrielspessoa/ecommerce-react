import {
  StyledCatalogContainer,
  StyledCatalogItem,
  StyledCatalogItems,
} from './style';

interface CatalogProps {
  url: string;
}

export function Catalog(props: CatalogProps) {
  // Implementar getItems
  function getItems() {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {});
  }

  return (
    <>
      <StyledCatalogContainer>
        <StyledCatalogItems></StyledCatalogItems>
      </StyledCatalogContainer>
    </>
  );
}
