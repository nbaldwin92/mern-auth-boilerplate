import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { registerUser } from '../../actions/authActions';

const Register = props => {
  const Error = styled.section`
    font-size: 1em;
    color: red;
  `;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  // eslint-disable-next-line no-shadow
  const { auth, history, registerUser, errors } = props;

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  });

  const onSubmit = e => {
    e.preventDefault();

    // eslint-disable-next-line no-shadow

    const newUser = {
      name,
      email,
      password,
      password2,
    };

    registerUser(newUser, history);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Link to="/">Back to home</Link>
          <div style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>

          <form>
            <p>Sign up</p>
            <div>
              <Error>{errors.name}</Error>
              <Error>{errors.email}</Error>
              <Error>{errors.password}</Error>
              <Error>{errors.password2}</Error>
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                id="name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
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
              <input
                className="form-control"
                placeholder="Confirm Password"
                type="password"
                id="password2"
                onChange={e => setPassword2(e.target.value)}
                value={password2}
              />
            </div>
            <div className="text-center">
              <button type="submit" onClick={onSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
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
  { registerUser }
)(withRouter(Register));
