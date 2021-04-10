import React from "react";
import { SignButton, SignLayout, Head } from '../../components/index'
import { auth, firebase } from '../../src/firebase'

class Signup extends React.Component {

  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth
      .signInWithPopup(provider)
      .then(() => {
        alert("You are signed In");
      })
      .catch(err => {
        alert("OOps something went wrong check your console");
      });
  };
  handleSignout = () => {
    auth
      .signOut()
      .then(function() {
        alert("Logout successful");
      })
      .catch(function(error) {
        alert("OOps something went wrong check your console");
      });
  };

  render () {
    return (
      <SignLayout>
        <SignButton onClick={this.handleSignIn} >
          Googleでログイン
        </SignButton>
        {/* <SignButton onClick={this.handleSignIn} >
          Googleでログイン
        </SignButton> */}
        <button onClick={this.handleSignout}>Signout</button>
      </SignLayout>
    )
  }
}

export default Signup