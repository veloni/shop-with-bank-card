import React from 'react';

import ProductItem from './ProductItem/ProductItem';

import './ProductListing.scss';

const ProductListing = ({
  dataProducts, 
  addItemInBasket,
  deleteProduct,
}) => (
  <main className="main-product-listing-wrapper">
    {dataProducts.map((item, index) => (
      <ProductItem
        key={index}
        item={item}
        addItemInBasket={addItemInBasket}
        deleteProduct={deleteProduct}
      />
    ))}
  </main>
);

export default ProductListing;