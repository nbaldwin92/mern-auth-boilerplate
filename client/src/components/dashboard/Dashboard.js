import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Dashboard = props => {
  const onLogoutClick = e => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    props.logoutUser();
  };

  const { auth } = props;
  const { user } = auth;

  const Wrapper = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh
      text-align: center;
    `;

  return (
    <Wrapper>
      <div className="row">
        <div>
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p>
              Congrats! You are logged in{' '}
              <span role="img" aria-label="clap">
                👏
              </span>
            </p>
          </h4>
          <button type="submit" onClick={onLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

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
