import { useState, useEffect } from 'react';
import {
  SpinnerContainer,
  StyledCatalogContainer,
  StyledCatalogItem,
  StyledCatalogItems,
} from './style';

interface CatalogProps {
  url: string;
}

export function Catalog(props: CatalogProps) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems();
  }, []);

  function getItems() {
    setIsLoading(true);
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        data.data.map((item: any) => {
          setImageUrl(item);
        });
        setItems(data.data);
        setIsLoading(false);
      });
  }

  function setImageUrl(item: any) {
    item.img = `/images/products/${item.id}.jpeg`;
  }

  return (
    <>
      {isLoading ? (
        <SpinnerContainer>
          <img src='/images/spinner.svg'></img>
        </SpinnerContainer>
      ) : (
        <StyledCatalogContainer>
          <StyledCatalogItems>
            {items.map((item: any, index) => {
              return (
                <StyledCatalogItem key={index} href={`product/${item.id}`}>
                  <img
                    src={item.img}
                    onError={(e) => {
                      let target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/products/placeholder.jpeg';
                    }}
                  ></img>
                  <div className='item-info'>
                    <span className='item-title'>{item.name}</span>
                    <span className='item-description'>{item.description}</span>
                    <span className='item-price'>{item.price}</span>
                  </div>
                </StyledCatalogItem>
              );
            })}
          </StyledCatalogItems>
        </StyledCatalogContainer>
      )}
    </>
  );
}
