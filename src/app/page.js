import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import phoneAuth from '../phoneAuth';
import { useEffect, useState } from 'react';
import { onAuthStateChange } from 'firebase/auth';


export default function Home() {

  const firebaseConfig = {
    apiKey: "AIzaSyA1LnYi-Zbp-uji54U6OXxzvgH2cBK9mqk",
    authDomain: "bazar-bd.firebaseapp.com",
    projectId: "bazar-bd",
    storageBucket: "bazar-bd.appspot.com",
    messagingSenderId: "102078290891",
    appId: "1:102078290891:web:c0b2e81487a3b7d9e8b44e"
  };

  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unRegistered = onAuthStateChange(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    })
  })




  return (
    <div className="w-screen h-screen">
      <phoneAuth auth={firebase.auth()}></phoneAuth>
    </div>
  )
}
