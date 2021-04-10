import { firebase, auth } from '../../src/firebase'
import styled from 'styled-components'
import Link from 'next/link'

export default function AccountButton() {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
  }

  return (
    <AccountButtonRoot>
      <Link href='/[user]' as={`/${ name }`}>
        <a>
          <img src={ photoUrl } alt={ name }/>
        </a>
      </Link>
    </AccountButtonRoot>
  )
}

const AccountButtonRoot = styled.a`
  color: #000;
  cursor: pointer;
  & img {
    height: 30px;
    border-radius: 50%;
  }
`;