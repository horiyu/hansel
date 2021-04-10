import { Alert, Layout, Head } from '../components/index'
import withAuth from '../src/helpers/withAuth'
import { firebase, auth } from '../src/firebase'

function Home() {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
  }

  return (
    <Layout>

      <Head
        title = {'ホーム - Hansel'}
      />

      <Alert severity = 'success' title = 'ログインに成功'>
        ログインに成功しました！
      </Alert>
      <h1>Welocome !</h1>

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
        <p>status</p>
        { status }
      </p>
      </div>

    </Layout>
  )
}

export default withAuth(Home)