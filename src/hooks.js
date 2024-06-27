import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";
const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
};

const useAxios = (url) => {
  const [cards, setCards] = useState([]);
  const addCard = async (endpoint) => {
    const response = await axios.get(`${url}${endpoint}`);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export { useFlip, useAxios };
