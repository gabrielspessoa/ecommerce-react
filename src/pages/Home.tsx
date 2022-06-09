import { Navbar } from './../components/Navbar';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

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
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
