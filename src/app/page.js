import Head from 'next/head';
import './styles/common/common.css';
import './styles/common/header.css';
import './styles/component/OurProduct.css';
import logo from '../../src/app/images/logo.png';

import Header from './common/header';
import Footer from './common/footer';
import ProductList from './pages/productlist';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  const seoProduct = products[0];

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
        <ProductList products={products} />
        <Footer />
      </main>
    </>
  );
}
