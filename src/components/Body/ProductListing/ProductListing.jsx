import React from 'react';

import ProductItem from './ProdcutItem/ProductItem';

import './ProductListing.scss';

const ProductListing = ({
  dataProducts, 
  addItemBasket,
  deleteProduct,
}) => {

  return(
  <main className="main-product-listing-wrapper">
    {dataProducts.map((item) => (
      <ProductItem
        item={item}
        addItemBasket={addItemBasket}
        deleteProduct={deleteProduct}
      />
    ))}
  </main>
  )
};

export default ProductListing;