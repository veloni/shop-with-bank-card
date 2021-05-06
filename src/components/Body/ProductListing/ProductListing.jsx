import React from 'react';

import ProductItem from './ProdcutItem/ProductItem';

import './ProductListing.scss';

const ProductListing = ({
  dataProducts, 
  addItemBasket,
  deleteProduct,
}) => (
  <main className="main-product-listing-wrapper">
    {dataProducts.map((item, index) => (
      <ProductItem
        key={index}
        item={item}
        addItemBasket={addItemBasket}
        deleteProduct={deleteProduct}
      />
    ))}
  </main>
);

export default ProductListing;