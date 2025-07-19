import { useState } from 'react';

const Test = () => {
  const [number, setNumber] = useState(0);

  const countUp = () => {
    setNumber(number + 1);
  }

  return (
    <div>
      <p>the count is {number}</p>
      <button onClick={countUp}>count up</button>
    </div>
    
  )


}
export default Test;