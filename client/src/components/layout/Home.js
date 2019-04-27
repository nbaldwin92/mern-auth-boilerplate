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

  const Button = styled.button`
    color: white;
  `;

  const StyledLink = styled(Link)`
    color: white;
    height: 100%;
  `;

  return (
    <div className="container">
      <div className="row">
        <div>
          <h4>Welcome</h4>
          <p>Login or Register</p>
          <br />

          <StyledLink to="/register" style={{}}>
            <Button type="button" className="btn btn-dark">
              Register
            </Button>
          </StyledLink>

          <StyledLink to="/login">
            <Button type="button" className="btn btn-dark">
              Log In
            </Button>
          </StyledLink>
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
