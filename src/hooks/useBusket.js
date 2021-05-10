import { useState } from 'react';

const useBusket = () => {
  const [arrayItemBusket, setArrayItemBusket] = useState([]);
  const [endPrice, setEndPrice] = useState(0);

  const addItemInBasket = (item) => {
    item.quanity = 1;

    if (arrayItemBusket.includes(item)) { return; }

    setArrayItemBusket([...arrayItemBusket, item]);
    setEndPrice(endPrice + item.productPrice * item.quanity);
  };

  const changeQuanityProduct = (element, sign) => {
    const newArray = arrayItemBusket.map((item) => {
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

    setArrayItemBusket([...newArray]);
  };

  const deleteProduct = (element) => {
    const newArray = arrayItemBusket.map((item) => {
      if (element.id === item.id) {
        setEndPrice(endPrice - item.productPrice * item.quanity);
        return '';
      }
      return item;
    });
    setArrayItemBusket([...newArray]);
  };

  return [
    endPrice,
    addItemInBasket,
    arrayItemBusket,
    changeQuanityProduct,
    deleteProduct,
  ];
};

export default useBusket;