import axios from 'axios';

import { useState, useRef } from 'react';

const useApiCard = () => {
  const refCardNumberInput = useRef();
  const refCartHolderInput = useRef();
  const refCardValue = useRef();/// need delete

  const [dataCardApi, setDataCardApi] = useState();

  const [cardNumber, setCardNumber] = useState([]);
  const [saveCardNumber, setSaveCardNumber] = useState();

  const [holderCardValue, setHolderCardValue] = useState();

  const [expiresCardValue, setExpiresCardValue] = useState();
  const [expiresCheckSlash, setExpiresCheckSlash] = useState(true);

  const giveDataCard = (e) => {
    if (e.target.value.length === 16) { 
      return;
    }

    renderCardNumber(e);

    const url = `https://api.cardinfo.online?input=${e.target.value}&apiKey=59ee27aad35c6ce4b937299a8aacd32b`; 
            
    axios.get(url).then((responce) => {
      setDataCardApi(responce.data);
    });
  };

  const renderCardNumber = (e) => {
    setSaveCardNumber(e.target.value);

    const arrayCardValue = [];
    let stepStringNumber = 0;

    [...Array(4)].forEach(() => {
      arrayCardValue.push(e.target.value.substring(stepStringNumber, stepStringNumber + 4));
      stepStringNumber += 4;
    });

    setCardNumber(arrayCardValue);
  };

  const renderExpires = (e) => {
    if (e.target.value.length === 2 && expiresCheckSlash) {
      e.target.value = `${e.target.value}/`;
      setExpiresCheckSlash(false);
    }

    if (e.target.value.length === 2) { 
      e.target.value = e.target.value.slice(-1);
      setExpiresCheckSlash(true);
    }

    setExpiresCardValue(e.target.value);
  };

  const renderName = (e) => {
    setHolderCardValue(e.target.value);
  };

  return [
    refCardNumberInput,
    refCartHolderInput,
    giveDataCard,
    dataCardApi,
    renderName,
    cardNumber,
    holderCardValue,
    refCardValue,
    renderExpires,
    expiresCardValue,
    saveCardNumber,
  ];
};

export default useApiCard;