import axios from 'axios';

import { useState } from 'react';

const useApiCard = () => {
  const [dataCardApi, setDataCardApi] = useState({});

  const [cardNumber, setCardNumber] = useState([]);

  const [holderCardValue, setHolderCardValue] = useState('');

  const [expiresCardValue, setExpiresCardValue] = useState('');
  const [expiresCheckSlash, setExpiresCheckSlash] = useState(true);

  const [isNumberValueCorrect, setIsNumberValueCorrect] = useState(false);
  const [isHolderValueCorrect, setIsHolderValueCorrect] = useState(false);
  const [isExpiresValueCorrect, setIsExpiresValueCorrect] = useState(false);

  const giveDataCard = (value) => {
    renderCardNumber(value);

    const url = `https://api.cardinfo.online?input=${value}&apiKey=59ee27aad35c6ce4b937299a8aacd32b`;

    axios.get(url).then((res) => setDataCardApi(res.data));

    checkCorrectInputNumber(value);
  };

  const renderCardNumber = (value) => {
    let stepStringNumber = 0;
    const quantitySpan = 4;
    const everyFour = Math.ceil(value.length / quantitySpan);

    const arrayCardValue = [...Array(everyFour)].map(() => {
      const item = value.substring(stepStringNumber, quantitySpan + stepStringNumber);
      stepStringNumber += quantitySpan;
      return item;
    });

    setCardNumber(arrayCardValue);
  };

  const renderExpires = (value) => {
    let newValue = value;

    const checkValueLength = value.length === 2;

    if (checkValueLength) {
      newValue = giveValueExpires(value);
    }

    checkCorrectInputExpires(newValue);
    setExpiresCardValue(newValue);
  };

  const giveValueExpires = (value) => {
    setExpiresCheckSlash(!expiresCheckSlash);

    const resultValue = expiresCheckSlash ? `${value}/` : value.slice(0, -1);

    return resultValue;
  };

  const renderName = (value) => {
    setHolderCardValue(value);
    checkCorrectInputHolder(value);
  };

  const checkCorrectInputNumber = (value) => {
    const holderOnlyNumberPattern = /^[0-9]*$/;
    checkRegularAddStyle(holderOnlyNumberPattern, setIsNumberValueCorrect, value);
  };

  const checkCorrectInputHolder = (value) => {
    if (value.length === 0) {
      setIsHolderValueCorrect(!!value.length);
      return;
    }

    const holderOnlyLatinPattern = /^[a-zA-Z ]+$/;
    const holderOnlyTwoWordsPattern = /\w+\s+\w+\s+\w/;
    const checkCorrectHolder = !holderOnlyLatinPattern.test(value) || holderOnlyTwoWordsPattern.test(value);

    setIsHolderValueCorrect(checkCorrectHolder);
  };

  const checkCorrectInputExpires = (value) => {
    const holderOnlyNumberSlashPattern = /^[0-9/]*$/;
    checkRegularAddStyle(holderOnlyNumberSlashPattern, setIsExpiresValueCorrect, value);
  };

  const checkRegularAddStyle = (regular, setStyle, value) => {
    setStyle(!regular.test(value));
  };

  return [
    giveDataCard,
    dataCardApi,
    renderName,
    cardNumber,
    holderCardValue,
    renderExpires,
    expiresCardValue,
    isHolderValueCorrect,
    isExpiresValueCorrect,
    isNumberValueCorrect,
  ];
};

export default useApiCard;
