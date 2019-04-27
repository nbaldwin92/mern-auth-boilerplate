import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

const Login = props => {
  const Error = styled.section`
    font-size: 1em;
    color: red;
  `;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // eslint-disable-next-line no-shadow
  const { auth, history, loginUser, errors } = props;

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  });

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    loginUser(userData);
  };

  return (
    <div className="container">
      <div style={{ marginTop: '4rem' }} className="row">
        <div className="col-lg-12">
          <Link to="/">Back to home</Link>
          <div style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>

          <form>
            <p>Sign in</p>

            <Error>{errors.email}</Error>
            <Error>{errors.emailnotfound}</Error>
            <Error>{errors.password}</Error>
            <Error>{errors.passwordincorrect}</Error>

            <div>
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                id="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="text-center">
              <button type="submit" onClick={onSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
