import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Test = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/test/test').then(response => {
      setTest(response.data);
      console.log(test);
    });
  });

  return (
    <div>
      Test Page
      <p>{test}</p>
    </div>
  );
};

export default Test;
