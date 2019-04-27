import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Navbar = () => {
  const NavWrapper = styled.section`
    display: flex;
    justify-content: center;
    font-family: monospace;
    font-size: 2em;
    text-align: center;
  `;
  return (
    <div>
      <nav>
        <NavWrapper>
          <Link to="/">MERN</Link>
        </NavWrapper>
      </nav>
    </div>
  );
};

export default Navbar;
