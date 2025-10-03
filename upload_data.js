const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // You need to download this file from your Firebase project
const data = require('./sample-songs.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadData() {
  const songsCollection = db.collection('songs');
  for (const song of data) {
    await songsCollection.doc(song.id).set(song);
    console.log(`Uploaded song: ${song.title}`);
  }
}

uploadData().then(() => {
  console.log('All songs uploaded successfully!');
  process.exit(0);
}).catch(error => {
  console.error('Error uploading songs:', error);
  process.exit(1);
});
