import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.logoutUser();
  };

  render() {
    const { auth } = this.props;
    const { user } = auth;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <div className="row">
          <div style={{ textAlign: 'center' }}>
            <h4>
              <b>Hey there,</b> {user.name.split(' ')[0]}
              <p className="flow-text grey-text text-darken-1">
                Congrats! You are logged in{' '}
                <span role="img" aria-label="clap">
                  👏
                </span>
              </p>
            </h4>
            <button
              type="submit"
              color="primary"
              size="md"
              onClick={this.onLogoutClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
