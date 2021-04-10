import { db } from '../src/firebase/db'
import React from 'react';
import { firebase, auth } from '../src/firebase'
import { Layout } from '../components/index'
import withAuth from '../src/helpers/withAuth'


 class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            favicon: '',
            url: '',
            eyecatch: '',
            created_at: firebase.firestore.FieldValue.serverTimestamp()
        //   created_at:
        };
    }
    registerPost = async (evt) => {
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        }
        evt.preventDefault();
        db.collection(`${ uid }`).add({
        // db.ref(`${ uid }` + '/' + this.state.title).set({
            title: this.state.title,
            description: this.state.description,
            favicon: this.state.favicon,
            url: this.state.url,
            eyecatch: this.state.eyecatch,
            created_at: this.state.created_at,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    onChangeTitle = (evt) => {
        this.setState({ title: evt.target.value });
    }
    onChangeDescription = (evt) => {
        this.setState({ description: evt.target.value });
    }
    onChangeUrl = (evt) => {
        this.setState({ url: evt.target.value });
    }
    onChangeFavicon = (evt) => {
        this.setState({ favicon: evt.target.value });
    }
    onChangeEyecatch = (evt) => {
        this.setState({ eyecatch: evt.target.value });
    }
    onChangeCreatedAt = (evt) => {
        this.setState({ created_at: evt.target.value });
    }
     render() {
        return (
            <Layout>
            <div className="post-forms">
                <form onSubmit={this.registerPost}>
                    <label htmlFor="title">タイトル</label><br/>
                    <input name="title" value={this.state.title} onChange={this.onChangeTitle} /><br/>
                    <label htmlFor="description">本文</label><br/>
                    <textarea name="description" value={this.state.description} onChange={this.onChangeDescription}></textarea><br/>
                    <label htmlFor="favicon">favicon</label><br/>
                    <input name="favicon" value={this.state.favicon} onChange={this.onChangeFavicon} /><br/>
                    <label htmlFor="url">url</label><br/>
                    <input name="url" value={this.state.url} onChange={this.onChangeUrl} /><br/>
                    <label htmlFor="eyecatch">eyecatch</label><br/>
                    <input name="eyecatch" value={this.state.eyecatch} onChange={this.onChangeEyecatch} /><br/>
                    <label htmlFor="createdAt">createdAt</label><br/>
                    <input name="createdAt" value={this.state.created_at} onChange={this.onChangeCreatedAt} /><br/>
                    <button type="submit">投稿</button>
                </form>
                <style jsx>{`
                .post-forms {
                    width: 80%;
                    height: 50%;
                    margin: 0 auto;
                }
                input, textarea {
                    width: 70%;
                }
                textarea {
                    height: 100px;
                }
            `}</style>
            </div>
            </Layout>
        )
    }
}
 export default withAuth(CreatePost);
