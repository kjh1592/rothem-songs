const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function updateDDay() {
  const ddayRef = db.collection('config').doc('dday');
  const newDate = '2026-06-14';

  await ddayRef.set({
    date: newDate
  });

  console.log(`D-Day updated to: ${newDate}`);
}

updateDDay().then(() => {
  console.log('Update successful!');
  process.exit(0);
}).catch(error => {
  console.error('Update failed:', error);
  process.exit(1);
});
