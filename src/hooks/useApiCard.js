import axios from 'axios';

import { useState, useRef } from 'react';

const useApiCard = () => {
  const refCardNumberInput = useRef();

  const [dataCardApi, setDataCardApi] = useState([{}]);

  const [cardNumber, setCardNumber] = useState([]);
  const [saveCardNumber, setSaveCardNumber] = useState(null);

  const [holderCardValue, setHolderCardValue] = useState(null);

  const [expiresCardValue, setExpiresCardValue] = useState('');
  const [expiresCheckSlash, setExpiresCheckSlash] = useState(true);

  const [isNumberValueCorrect, setIsNumberValueCorrect] = useState(false);
  const [isHolderValueCorrect, setIsHolderValueCorrect] = useState(false);
  const [isExpiresrValueCorrect, setIsExpiresValueCorrect] = useState(false);
  
  const giveDataCard = (value) => {
    if (value.length > 16) { return; } 

    renderCardNumber(value);

    const url = `https://api.cardinfo.online?input=${value}&apiKey=59ee27aad35c6ce4b937299a8aacd32b`;

    axios.get(url).then((res) => setDataCardApi(res.data));

    checkCorrectInputNumber(value);
  };

  const renderCardNumber = (value) => {
    setSaveCardNumber(value);

    let stepStringNumber = 0;
    const quantitySpan = 4;

    const arrayCardValue = [...Array(Math.ceil(value.length / quantitySpan))].map(() => {
      const item = value.substring(stepStringNumber, stepStringNumber + quantitySpan);
      stepStringNumber += quantitySpan;
      return item;
    });

    setCardNumber(arrayCardValue);
  };

  const renderExpires = (value) => {
    let newValue = value; 

    const checkValueLength = (value.length === 2);

    if (checkValueLength) {
      newValue = expiresCheckSlash ? giveValue(`${value}/`) : giveValue(value.slice(0, -1));
    }

    checkCorrectInputExpires(newValue); 
    setExpiresCardValue(newValue);  
  };

  const giveValue = (value) => {
    setExpiresCheckSlash(!expiresCheckSlash);  
    return value;
  }

  const renderName = (value) => {
    setHolderCardValue(value);
    checkCorrectInputHolder(value);
  };

  const checkCorrectInputNumber = (value) => { 
    const holderOnlyNumberPattern = /^[0-9]*$/;
    checRegularAddStyle(holderOnlyNumberPattern, setIsNumberValueCorrect, value);
  };

  const checkCorrectInputHolder = (value) => { 
    const holderOnlyLatinPattern = /^[a-zA-Z ]+$/;  
    const holderOnlyTwoWordsPattern = / \w+\s+\w+/;
    const checkCorrectHolder = !holderOnlyLatinPattern.test(value) || holderOnlyTwoWordsPattern.test(value);
    
    setIsHolderValueCorrect(checkCorrectHolder);
  };

  const checkCorrectInputExpires = (value) => { 
    const holderOnlyNumberSlashPattern = /^[0-9/]*$/;
    checRegularAddStyle(holderOnlyNumberSlashPattern, setIsExpiresValueCorrect, value);
  };

  const checRegularAddStyle = (regular, setStyle, value) => {
    setStyle(!regular.test(value));
  }

  return [
    refCardNumberInput,
    giveDataCard,
    dataCardApi,
    renderName,
    cardNumber,
    holderCardValue,
    renderExpires,
    expiresCardValue,
    saveCardNumber,
    isHolderValueCorrect,
    isExpiresrValueCorrect,
    isNumberValueCorrect,
  ];
};

export default useApiCard;
