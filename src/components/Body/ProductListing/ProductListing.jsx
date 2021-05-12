import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem/ProductItem';

import './ProductListing.scss';

const ProductListing = ({
  dataProducts, 
  addItemInBasket,
}) => (
  <main className="main-product-listing-wrapper">
    {dataProducts.map((item, index) => (
      <ProductItem
        key={index}
        item={item}
        addItemInBasket={addItemInBasket}
      />
    ))}
  </main>
);

ProductListing.propTypes = {
  dataProducts: PropTypes.array.isRequired,
  addItemInBasket: PropTypes.func.isRequired,
};

export default ProductListing;