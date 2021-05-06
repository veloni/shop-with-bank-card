import { useState } from 'react';

const useBasketLogic = () => {
  const [arrayItemBasket, setArrayItemBasket] = useState([]);
  
  const [endPrice, setEndPrice] = useState(0);

  const addItemBasket = (item) => {
    item.quanity = 1;

    if (arrayItemBasket.includes(item)) { 
      return;
    }

    setArrayItemBasket([...arrayItemBasket, item]);
    setEndPrice(endPrice + item.productPrice * item.quanity);
  };

  const addQuanityProduct = (element, sign) => {
    const newArray = arrayItemBasket.map((item) => {
      if (item.quanity === 1 && sign === -1) { 
        return item;
      }
      //будет время, попробовать переписать удаление на 1 -1 
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
        return '';
      }
      return item;
    });

    setArrayItemBasket([...newArray]);
  };

  return [
    endPrice,
    addItemBasket,
    arrayItemBasket,
    addQuanityProduct,
    deleteProduct,
  ];
};

export default useBasketLogic;