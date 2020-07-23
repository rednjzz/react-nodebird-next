import React, { useState, useCallback } from 'react';

function UseInput(initialValue= null) {
  const [state, setState] = useState(initialValue);
  const handler = useCallback((e) => {
    setState(e.target.value);
  },[])
  return [state, handler];
}

export default UseInput;