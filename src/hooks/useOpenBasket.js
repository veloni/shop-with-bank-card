import { useState } from 'react';

const useOpenBasket = () => {
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const openCloseBasket = () => {
    setIsOpenBasket(!isOpenBasket);
  };

  return [
    isOpenBasket,
    openCloseBasket,
  ];
};

export default useOpenBasket;