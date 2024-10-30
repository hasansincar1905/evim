importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyCUaAhOxKMA2mgIcUm-pC3dE5KP5qZZE3c",
  authDomain: "evim-arabam-burada.firebaseapp.com",
  projectId: "evim-arabam-burada",
  storageBucket: "evim-arabam-burada.firebasestorage.app",
  messagingSenderId: "264887723366",
  appId: "1:264887723366:web:e91b61f618cb335afc14a7",
  measurementId: "G-NZY25CCNR7"
};


firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});

// Handle background messages
self.addEventListener('push', function (event) {
    const payload = event.data.json();
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    event.waitUntil(
        self.registration.showNotification(notificationTitle, notificationOptions)
    );
});
