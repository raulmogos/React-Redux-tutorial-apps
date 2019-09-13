import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const CLIENT_ID = '771599847767-j2o5eutlv92j3peb3ifn94d4r7gt5i2g.apps.googleusercontent.com';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red button" onClick={this.onSignOutClick}>
          <i className="google icon" />
            Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red round button" onClick={this.onSignInClick}>
          <i className="google icon" />
            Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);