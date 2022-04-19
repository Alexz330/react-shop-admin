import { useState, useEfect } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(endPoint);
    setData(response.data);
  };

  useEfect(() => {});
};
