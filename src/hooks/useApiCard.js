import axios from 'axios';

import { useState, useEffect, useRef } from 'react';

const useApiCard = () => {
  const refInputCardNumber = useRef();
  const refCartHolderInput = useRef();

  const [dataCard, setDataCard] = useState();
  const [cardValue, setCardValue] = useState();
  const [nameCardValue, setNameCardValue] = useState();

  const giveDataCard = (e) => {
    const url = `https://api.cardinfo.online?input=${e.target.value}&apiKey=59ee27aad35c6ce4b937299a8aacd32b`; 
    
    setCardValue(e.target.value);
    
    axios.get(url).then((responce) => {
      setDataCard(responce.data);
    });
  }

  const giveNameData = (e) => {
    setNameCardValue(e.target.value);
  }

  return [
    refInputCardNumber,
    refCartHolderInput,
    giveDataCard,
    dataCard,
    giveNameData,
    cardValue,
    nameCardValue,
  ];
};

export default useApiCard;