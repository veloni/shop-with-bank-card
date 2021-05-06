import axios from 'axios';

import { useState, useRef } from 'react';

const useApiCard = () => {
  const refInputCardNumber = useRef();
  const refCartHolderInput = useRef();
  const refCardValue = useRef();

  const [dataCard, setDataCard] = useState();
  const [cardValue, setCardValue] = useState([]);
  const [nameCardValue, setNameCardValue] = useState();

  const [expiresValue, setExpiresValue] = useState();

  const [check, setCheck] = useState(true);

  const giveDataCard = (e) => {
    if (e.target.value.length === 16) { 
      return;
    }
    renderCartNumber(e);

    const url = `https://api.cardinfo.online?input=${e.target.value}&apiKey=59ee27aad35c6ce4b937299a8aacd32b`; 
            
    axios.get(url).then((responce) => {
      setDataCard(responce.data);
    });
  };

  const renderCartNumber = (e) => {
    const oneSpan = e.target.value.substring(0,4);
    const twoSpan = e.target.value.substring(4,8);
    const threeSpan = e.target.value.substring(8,12);
    const frooSpan = e.target.value.substring(12,16);

    const array = [];

    array.push(oneSpan);
    array.push(twoSpan);
    array.push(threeSpan);
    array.push(frooSpan);

    setCardValue(array);
  };

  const renderExpires = (e) => {
    if (e.target.value.length === 2 && check) {
      e.target.value = `${e.target.value}/`; 
      setCheck(false);
    }
    if (e.target.value.length === 2) { 
      e.target.value = e.target.value.slice(-1);
      setCheck(true); 
    } 

    setExpiresValue(e.target.value);
  };

  const giveNameData = (e) => {
    setNameCardValue(e.target.value);
  };

  return [
    refInputCardNumber,
    refCartHolderInput,
    giveDataCard,
    dataCard,
    giveNameData,
    cardValue,
    nameCardValue,
    refCardValue,
    renderExpires,
    expiresValue,
  ];
};

export default useApiCard;