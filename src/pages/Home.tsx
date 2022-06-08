import { Navbar } from './../components/Navbar';
import BannerUrl from './../assets/images/banner.jpg';
import { useEffect, useState } from 'react';
import { Catalog } from '../components/Catalog';
export default function Home() {
  const [products, setProducts] = useState([] as any);

  useEffect(getAllProducts, []);

  function getAllProducts() {
    fetch('http://localhost:3333/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <Catalog></Catalog>
      {/* {products.map((prod: any) => {
        return (
          <div
            style={{
              border: 'solid 1px',
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <span>{prod.id}</span>
            <span>{prod.name}</span>
            <span>{prod.quantity}</span>
            <img src={`/images/products/product_${prod.id}.jpeg`}></img>
          </div>
        );
      })} */}
    </>
  );
}
