import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Card({ input }) {
  let [data, setData] = useState('');
  
  const API = !input 
    ? "https://api.adviceslip.com/advice" 
    : `https://api.adviceslip.com/advice/search/${input}`;

  const getAdvice = async () => {
    try {
      const res = await axios.get(API);
      if (!input) {
        setData(res.data.slip.advice); 
      } else if (res.data.slips) {
        console.log(res)
        setData(res.data.slips[0].advice); 
      } else {
        setData('No advice found'); 
      }
    } catch (error) {
      console.log(error);
      setData('Error fetching advice');
    }
  };

  useEffect(() => {
    getAdvice();
  }, [input]); 
  return (
    <div className='text-3xl text-center text-pretty font-bold font-sans text-[#6966ff]'><p>{data}</p></div>
  );
}
