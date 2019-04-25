import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    // eslint-disable-next-line react/prop-types
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const userData = {
      email,
      password,
    };

    // eslint-disable-next-line react/destructuring-assignment
    this.props.loginUser(userData);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: '4rem' }} className="row">
          <div className="col-lg-12">
            <Link to="/" className="btn-flat waves-effect">
              Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>

            <form>
              <p>Sign in</p>
              <div c>
                <input
                  className="form-control"
                  placeholder="Email"
                  group
                  type="email"
                  validate
                  id="email"
                  onChange={this.onChange}
                  value={email}
                />
                <input
                  className="form-control"
                  placeholder="Password"
                  group
                  type="password"
                  id="password"
                  validate
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div className="text-center">
                <button type="submit" onClick={this.onSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
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
)(Login);
