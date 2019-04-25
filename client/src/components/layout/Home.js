import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

const Home = props => {
  // eslint-disable-next-line react/prop-types
  const { auth, history } = props;

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  });

  const LinkWrapper = styled.section`
    width: 140px;
    border-radius: 3px;
    letter-spacing: 1.5px;
  `;

  return (
    <div className="container">
      <div className="row">
        <div>
          <h4>Welcome</h4>
          <p>Login or Register</p>
          <br />
          <LinkWrapper>
            <Link to="/register" style={{}}>
              Register
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/login">Log In</Link>
          </LinkWrapper>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Home);
