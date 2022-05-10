import { initializeApp } from 'firebase/app';
// import { getFirestore  } from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOxjbM-hHnQ8cF_xqcZ_2rxVlKhgIoY-0",
    authDomain: "disneyclone-d2666.firebaseapp.com",
    projectId: "disneyclone-d2666",
    storageBucket: "disneyclone-d2666.appspot.com",
    messagingSenderId: "742446274402",
    appId: "1:742446274402:web:096d2684294abeecc3be3b",
    measurementId: "G-W7NRGEGFNR"
  };


  const app = initializeApp(firebaseConfig);
  export const authe = getAuth(app);
//    const db = getFirestore(app); 
