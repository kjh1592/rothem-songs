const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // You need to download this file from your Firebase project
const data = require('./song_data.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadData() {
  const songsCollection = db.collection('songs');

  // Delete all existing documents in the 'songs' collection
  console.log('Deleting existing songs...');
  const snapshot = await songsCollection.get();
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log('All existing songs deleted.');

  // Upload new data
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
