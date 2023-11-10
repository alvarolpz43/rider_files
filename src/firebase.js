import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyCLPBgvnIIRGMTeHbseJKmbXLifxws2D-A",
    authDomain: "archivosrider.firebaseapp.com",
    projectId: "archivosrider",
    storageBucket: "archivosrider.appspot.com",
    messagingSenderId: "335221747545",
    appId: "1:335221747545:web:640f05b215cc799a22a648"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);