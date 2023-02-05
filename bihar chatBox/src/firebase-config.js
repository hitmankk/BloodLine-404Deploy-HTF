

const config = {
  apiKey: "AIzaSyAWEzA6BKuqvUuuKuSMfXCdVFw5Xn8R5UI",
  authDomain: "bihar-chatbox.firebaseapp.com",
  projectId: "bihar-chatbox",
  storageBucket: "bihar-chatbox.appspot.com",
  messagingSenderId: "252672258691",
  appId: "1:252672258691:web:1b53cec6b6e6ed850da1b6",
  measurementId: "G-RDT552GV9L"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
