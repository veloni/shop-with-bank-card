import { useState } from 'react';

const useBasket = () => {
  const [arrayItemBasket, setArrayItemBasket] = useState([]);
  const [endPrice, setEndPrice] = useState(0);

  const addItemInBasket = (item) => {
    item.deleted && setEndPrice(endPrice + item.productPrice * item.quanity);

    item.quanity = 1;
    item.deleted = false;

    if (arrayItemBasket.includes(item)) {return;}

    setArrayItemBasket([...arrayItemBasket, item]);
    setEndPrice(endPrice + item.productPrice * item.quanity);
  };

  const changeQuanityProduct = (element, sign) => {
    const newArray = arrayItemBasket.map((item) => {
      if (item.quanity === 1 && sign === -1) {
        return item;
      }

      if (element.id === item.id) {
        item.quanity = item.quanity + 1 * sign;
        setEndPrice(endPrice + sign * item.productPrice);
        return item;
      }

      return item;
    });

    setArrayItemBasket([...newArray]);
  };

  const deleteProduct = (element) => {
    const newArray = arrayItemBasket.map((item) => {
      if (element.id === item.id) {
        setEndPrice(endPrice - item.productPrice * item.quanity);

        item.quanity = 1;
        item.deleted = true;

        return item;
      }
      return item;
    });
    setArrayItemBasket([...newArray]);
  };

  return [
    endPrice,
    addItemInBasket,
    arrayItemBasket,
    changeQuanityProduct,
    deleteProduct,
  ];
};

export default useBasket;