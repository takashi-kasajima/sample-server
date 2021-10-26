const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const ServiceAccount = require('./service-account.json');

// Firebaseのinitialize
admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

// Firestoreの参照を取得
const db = admin.firestore();
const docRef = db.collection('messages');

// Expressのセットアップ
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello')
})

// GETで/helloにアクセスするとこの関数が実行される
app.get('/users/:id', (req, res) => {
  db.collection('users').where('user_id', '==', req.params.id)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data()
      res.send(data.user_id)
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
});

// Expressを起動する
const port = '8080';
app.listen(process.env.PORT || 5000, () => console.log(`app start listening on port ${port}`));