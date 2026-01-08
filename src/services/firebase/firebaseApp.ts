import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGYOblj4pVrz96zdSLcnMxH_7TW25qXrA',
  authDomain: 'frontend-devcraft.firebaseapp.com',
  projectId: 'frontend-devcraft',
  storageBucket: 'frontend-devcraft.firebasestorage.app',
  messagingSenderId: '505511687696',
  appId: '1:505511687696:web:42e3bd432c9a9b74f57c95',
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
