import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Test = () => {
  const [test, setTest] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/test/test').then(response => {
      setTest(response.data);
    });
  });

  return (
    <div>
      Test Page
      <p>{test}</p>
      <Link to="/dashboard">
        <button type="submit">Dashboard</button>
      </Link>
    </div>
  );
};

export default Test;
