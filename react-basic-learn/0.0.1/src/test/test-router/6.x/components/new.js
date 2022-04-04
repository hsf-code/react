import { useState } from 'react';
function New(){
  const [count, setCount] = setCount(0);
  const [nt, setNt] = setCount('new1');
  return(
      <div>
        { nt + count }
      </div>
  )
}

export default New;
