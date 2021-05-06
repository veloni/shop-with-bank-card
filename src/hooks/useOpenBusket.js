import { useState } from 'react';

const useOpenBusket = () => {
  const [isOpenBusket, setIsOpenBusket] = useState(false);

  const openCloseBusket = () => {
    setIsOpenBusket(!isOpenBusket);
  };

  return [
    isOpenBusket,
    openCloseBusket,
  ];
};

export default useOpenBusket;