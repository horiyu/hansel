import { auth } from '../firebase'
import { firebase } from '../firebase'

function checkAuth () {

  var user = firebase.auth().currentUser;
  console.log(user);
  if ( user ) {
    return true
  } else {
    return false
  }
  // var authUser = auth.currentUser;
  // auth.onAuthStateChanged(authUser => {
  //   if (authUser) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // return false

};

export default checkAuth;