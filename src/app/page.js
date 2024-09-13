"use client"; // Add this at the top to make this a client component

import Head from 'next/head';
import './styles/common/common.css';
import './styles/common/header.css';
import './styles/component/OurProduct.css';
import logo from '../../src/app/images/logo.png';

import Header from './common/header';
import Footer from './common/footer';
import ProductList from './pages/productlist';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [seoProduct, setSeoProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log("Fetched products: ", data); // Debugging line
        setProducts(data);
        setSeoProduct(data[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>{seoProduct ? seoProduct.title : "Best Online Products - Your Store"}</title>
        <meta 
          name="description" 
          content={seoProduct ? seoProduct.description : "Find the best products from our store. From fashion to electronics, we offer quality items at great prices."} 
        />
        <meta property="og:title" content={seoProduct ? seoProduct.title : "Best Online Products - Your Store"} />
        <meta 
          property="og:description" 
          content={seoProduct ? seoProduct.description : "Check out our exclusive collection of products ranging from fashion to electronics."} 
        />
        <meta property="og:image" content={seoProduct ? seoProduct.image : logo} />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <Header />
        <ProductList />
        <Footer />
      </main>
    </>
  );
}
