import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form"
import BasicForm from './BasicForm';
import CuriosityForm from './CuriosityForm';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util';
import { db } from './firebase/FirebaseConfig'

function App() {

const [surveyArray, setSurveyArray ] = useState([]);
const survCollectionRef = collection(db, "surveys");

useEffect(() => {
  const getSurveys = async () => {
    const data = await getDocs(survCollectionRef);
    //console.log(data);
    setSurveyArray(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  getSurveys();
}, [])

  return (
    <>
    <div>
      {surveyArray.map((row,index) => {
        return (
          <>
            <div >name {row.name} / author {row.author} </div>
          </>
        )
      })}
    </div>
    <div className='form-container'>
      <CuriosityForm/>
    </div>
    </>
  );
}

export default App;