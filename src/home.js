   import { initializeApp } from "@firebase/app";
   import {getDatabase, ref , child, onValue, get} from "firebase/database"

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

  const app =  initializeApp(firebaseConfig)
  const db = getDatabase();

   var stNo = 0;
    var tbody = document.querySelector("customtable")
    function AddItemToTable(name, reg, time, date){
        let trow = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");


        td1.innerHTML=++stNo
        td2.innerHTML=++name
        td3.innerHTML=++reg
        td4.innerHTML=++time
        td5.innerHTML=++date
        
        trow.appendChild(td1)
        trow.appendChild(td2)
        trow.appendChild(td3)
        trow.appendChild(td4)
        trow.appendChild(td5)

        tbody.appendChild(trow)



    }

    function AddAllItemsToTable(TheStudent){
        stNo = 0;
        tbody.innerHTML = "" ;
        TheStudent.array.forEach(element => {
            AddItemToTable( element.name, element.reg_no,  element.time ,element.date )
        });
    }

    function getAllDataOnce(){
        const dbRef= ref(db);
        
        get(child(dbRef, "Faculty/Faculty ID/Class ID"))
        .then((snapshot)=>{
            var students =[];
            
            snapshot.forEach(childSnapshot=>{
                students.push(childSnapshot.val())
            })

            AddAllItemsToTable(students)
        })
    }

    window.onload = getAllDataOnce;
