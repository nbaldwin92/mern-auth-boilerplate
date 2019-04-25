import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Home extends Component {
  componentDidMount() {
    // If logged in and user navigates to home page, should redirect them to dashboard
    // eslint-disable-next-line react/prop-types
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <h4>Welcome</h4>
            <p>Login or Register</p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                }}
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                }}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
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
