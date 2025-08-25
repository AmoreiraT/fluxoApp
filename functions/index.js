const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onUserSignup = functions.auth.user().onCreate(async (user) => {
  const customClaims = { role: 'user' };
  await admin.auth().setCustomUserClaims(user.uid, customClaims);
  return admin.firestore().collection('users').doc(user.uid).set({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || '',
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
});

exports.onCreateEvent = functions.firestore.document('events/{eventId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    console.log(`Evento criado: ${data.title}`);
    return null;
  });

exports.sendPushNotification = functions.firestore
  .document('event_participants/{docId}')
  .onCreate((snap, context) => {
    const payload = {
      notification: {
        title: 'Novo participante!',
        body: 'Alguém acabou de confirmar presença no seu evento.'
      }
    };
    return admin.messaging().sendToTopic('evento', payload);
  });