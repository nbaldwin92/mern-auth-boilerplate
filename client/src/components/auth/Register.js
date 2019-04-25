import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      // eslint-disable-next-line react/no-unused-state
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    // eslint-disable-next-line react/prop-types
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        errors: nextProps.errors,
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password, password2 } = this.state;
    const { history } = this.props;

    const newUser = {
      name,
      email,
      password,
      password2,
    };

    // eslint-disable-next-line react/destructuring-assignment
    this.props.registerUser(newUser, history);
  };

  render() {
    const { name, email, password, password2 } = this.state;
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
                <input
                  className="form-control"
                  placeholder="Name"
                  label="Name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  id="name"
                  onChange={this.onChange}
                  value={name}
                />
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
                  type="password"
                  id="password"
                  validate
                  onChange={this.onChange}
                  value={password}
                />
                <input
                  className="form-control"
                  placeholder="Confirm Password"
                  group
                  type="password"
                  validate
                  id="password2"
                  onChange={this.onChange}
                  value={password2}
                />
              </div>
              <div className="text-center">
                <button type="submit" onClick={this.onSubmit}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
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
