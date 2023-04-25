import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWJUH292Wtd3jmz5KUsQV5pchmNYyazxY',
  authDomain: 'pinapp-2b1b6.firebaseapp.com',
  projectId: 'pinapp-2b1b6',
  storageBucket: 'pinapp-2b1b6.appspot.com',
  messagingSenderId: '1072291834163',
  appId: '1:1072291834163:web:878fb71b1fc0b811163646',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
