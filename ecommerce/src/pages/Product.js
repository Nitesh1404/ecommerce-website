import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import ProductDisplay from '../components/ProductImage/ProductDisplay';
import DescriptionBox from '../components/Description/DescriptionBox';
import RelatedPeoduct from '../components/RelatedPeoduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((product) => product.id === parseInt(productId));

  // Check if product is not available yet
  if (!product) {
    return <div>Loading...</div>; // Or render a loading indicator
  }

  return (
    <div >
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedPeoduct />
    </div>
  )
}

export default Product
