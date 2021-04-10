import { Bookmark, Layout, Head } from '../components/index'
import { db } from '../src/firebase/db'
import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import styled from 'styled-components'

 export default class User extends React.Component {
  static async getInitialProps() {

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }

    // db.jsのfirebaseのDB接続ファンクション
    // DBのpostsコレクション内を全て取得した結果 = result
    let result = await new Promise((resolve, reject) => {
      // let db = firebase.firestore();
      db.collection(`${ uid }`)
      .get()
      .then(snapshot => {
        let data = []
        snapshot.forEach((doc) => {
          data.push(
            Object.assign({
              id: doc.id
            }, doc.data())
          )
        })
        resolve(data)
      }).catch(error => {
        reject([])
      })
    })
    return {posts: result}
  }

  handleDelete = (id) => {
    console.log(id)
    db.collection(`${ firebase.auth().currentUser.uid }`).doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const posts = this.props.posts
    return (
        <Layout>
          <BookmarkArea>
            {posts.map(post =>
              <div className="post" key={post.id}>
                {/* <h1>{ post.created_at }</h1> */}
                <Bookmark title={ post.title } description={ post.description } favicon={ post.favicon } url={ post.url } img={ post.eyecatch }/>
                  {/* <h2>
                      {post.title}
                  </h2>
                  <p>
                      {post.description}
                  </p>
                  <p>
                    { post.url }
                  </p>
                  <img src={ post.img } alt=""/> */}
                  <button onClick={this.handleDelete.bind(this, post.id)}>削除</button>
              </div>
            )}
          </BookmarkArea>
        </Layout>
    );
  }
}

const BookmarkArea = styled.div`
  margin: 200px;

`;