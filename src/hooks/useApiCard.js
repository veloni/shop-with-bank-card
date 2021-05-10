import axios from 'axios';

import { useState, useRef } from 'react';

const useApiCard = () => {
  const refCardNumberInput = useRef();

  const [dataCardApi, setDataCardApi] = useState();

  const [cardNumber, setCardNumber] = useState([]);
  const [saveCardNumber, setSaveCardNumber] = useState();

  const [holderCardValue, setHolderCardValue] = useState();

  const [expiresCardValue, setExpiresCardValue] = useState();
  const [expiresCheckSlash, setExpiresCheckSlash] = useState(true);

  const [isNumberValueCorrect, setIsNumberValueCorrect] = useState(false);
  const [isHolderValueCorrect, setIsHolderValueCorrect] = useState(false);
  const [isExpiresrValueCorrect, setIsExpiresValueCorrect] = useState(false);
  
  const giveDataCard = (value) => {
    if (value.length > 16) { return; } 

    renderCardNumber(value);

    const url = `https://api.cardinfo.online?input=${value}&apiKey=59ee27aad35c6ce4b937299a8aacd32b`;

    axios.get(url).then((responce) => {
      setDataCardApi(responce.data);
    });

    checkCorrectInputNumber(value);
  };

  const renderCardNumber = (value) => {
    setSaveCardNumber(value);

    let stepStringNumber = 0;
   
    const arrayCardValue = [...Array(Math.ceil(value.length / 4))].map(() => {
      const item = value.substring(stepStringNumber, stepStringNumber + 4);
      stepStringNumber += 4;
      return item;
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

    checkCorrectInputExpires(e.target.value);

    setExpiresCardValue(e.target.value);
  };

  const renderName = (value) => {
    setHolderCardValue(value);
    checkCorrectInputHolder(value);
  };

  const checkCorrectInputNumber = (value) => { 
    const holderRegularText = /^[0-9]*$/;

    checRegularAddStyle(holderRegularText, setIsNumberValueCorrect, value);
  };

  const checkCorrectInputHolder = (value) => { 
    const holderRegularText = /^[a-zA-Z ]+$/;  
    const holderRegularSpace = /\w+\s+\w+\s+\w+/;
     
    const checkCorrectHolder = !holderRegularText.test(value) || holderRegularSpace.test(value);

    checkCorrectHolder && setIsHolderValueCorrect(true);
    !checkCorrectHolder && setIsHolderValueCorrect(false);
    
    value.length === 0 && setIsHolderValueCorrect(false);
  };

  const checkCorrectInputExpires = (value) => { 
    const holderRegularText = /^[0-9/]*$/;

    checRegularAddStyle(holderRegularText, setIsExpiresValueCorrect, value);
  };

  const checRegularAddStyle = (regular, setStyle, value) => {
    !regular.test(value) && setStyle(true);
    regular.test(value) && setStyle(false);
  }

  return [
    refCardNumberInput,
    giveDataCard,
    dataCardApi,
    renderName,
    cardNumber,
    holderCardValue,,
    renderExpires,
    expiresCardValue,
    saveCardNumber,
    isHolderValueCorrect,
    isExpiresrValueCorrect,
    isNumberValueCorrect,
  ];
};

export default useApiCard;
