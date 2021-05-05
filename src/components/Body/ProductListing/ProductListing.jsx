import React from 'react';

import ProductItem from './ProdcutItem/ProductItem';

import './ProductListing.scss';

const ProductListing = (dataProducts) => {
  return(
  <main className="main-product-listing-wrapper">
    {dataProducts.dataProduct.map((item) => (
      <ProductItem
        item={item}
      />
    ))}
  </main>
  )
};

export default ProductListing;