import React from "react";
import Link from 'next/link'
import { Layout, Head } from '../components/index'
import { firebase, auth } from '../src/firebase'


class LP extends React.Component {

  render () {

      var user = firebase.auth().currentUser;
      var name, email, photoUrl, uid, emailVerified;

      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
      }

    return (
      <Layout>

        <Head
          // title = {'Hansel'}
        />

        <Link href='/home'>
          <a>
            Home
          </a>
        </Link>
        <Link href='/signup'>
          <a>
            新規登録
          </a>
        </Link>

        <div>
      <h2>アカウント情報</h2>
      <h4>アカウント名</h4>
      { name }
      <h4>メールアドレス</h4>
      <p>
      { email }
      </p>
      <img src={ photoUrl } />
      <p>
        { emailVerified }
      </p>
      <p>
      </p>
      </div>

      </Layout>
    )
  }
}

export default LP