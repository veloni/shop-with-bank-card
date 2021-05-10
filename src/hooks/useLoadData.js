import { useState } from 'react';

import data from '../dataProduct/json';

const useLoadData = () => {
  const [dataProducts] = useState(data);
  
  return [
    dataProducts,
  ];
};

export default useLoadData;