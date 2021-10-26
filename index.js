const admin = require('firebase-admin');
const functions = require('firebase-functions');
const ServiceAccount = require('./service-account.json');

admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

const db = admin.firestore();
const docRef = db.collection('users').doc('alovelace');

const setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815,
});