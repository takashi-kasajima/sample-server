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
      let data = doc.data()
      console.log(data)
      if (data.nickname) {
        console.log(data)
        res.json(data)
      } else {
        data = {
          user_id: data.user_id,
          nickname: data.user_id
        }
        res.json(data)
      }
      
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
});

// Expressを起動する
app.listen(process.env.PORT || 5000, () => console.log(`app start listening on port ${process.env.PORT || 5000}`));