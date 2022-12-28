import {initializeApp} from "firebase/app"
import {
    getFirestore, collection, getDocs, updateDoc 
} from "firebase/firestore"

import {getDatabase, ref , child, onValue, get} from "firebase/database"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-h1VkSk5VtIcOiEKU0FfPWYRxm8PqQB4",
    authDomain: "attendance-system-123abc.firebaseapp.com",
    databaseURL: "https://attendance-system-123abc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "attendance-system-123abc",
    storageBucket: "attendance-system-123abc.appspot.com",
    messagingSenderId: "294747344945",
    appId: "1:294747344945:web:ab9173a52248d9b6b38510",
    measurementId: "G-X07ZTSKDQV"
  };

//initilize the APP
 const app =  initializeApp(firebaseConfig)

  //init services
  const db = getFirestore();

  //collection reference
  const colRef =  collection(db, 'Faculty/Faculty ID/Class ID')

  //collection  data
  getDocs(colRef)
  .then((snapshot)=>{
    let students = []
        snapshot.docs.forEach((doc)=>{
            students.push({ ...doc.data(), id : doc.id})
        })
        console.log(students)
    })
    .catch((error) =>{
        console.log(error.message)
    })



    var login = document.getElementById("loginButton")

    login.addEventListener("click", (e) => {
        e.preventDefault();
        var email = document.getElementById("username").value
        var password = document.getElementById("password").value

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log("Logged in");
          window.location.href ="../dist/Home.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    })

    //FireBase Auth
    const auth = getAuth();







  
  

  