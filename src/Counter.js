import React, { useState } from 'react';
import './style.css';
import Button from './Button';

export default function Counter() {
  const [num, setNum] = useState(0);
  const handleClick = ({ target }) => {
    console.log(target);
    target.innerHTML === '+'
      ? setNum((prev) => prev + 1)
      : setNum((prev) => prev - 1);
  };
  return (
    <>
      <h1>Simple counter</h1>
      <Button
        style={{ marginRight: 10 }}
        name="-"
        onClick={handleClick}
        disabled={num === 0 && true}
      />
      <span>{num}</span>
      <Button style={{ marginLeft: 10 }} name="+" onClick={handleClick} />
    </>
  );
}
