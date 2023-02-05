/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */


const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCSL2-z6zYxuDrRSzNx72p0qhckNbX0KNk",
  authDomain: "live-chat-22709.firebaseapp.com",
  projectId: "live-chat-22709",
  storageBucket: "live-chat-22709.appspot.com",
  messagingSenderId: "993214298253",
  appId: "1:993214298253:web:29b4a8d38dd85da2f50ac4",
  measurementId: "G-S224EVTRKS"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
