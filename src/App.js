import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form"
import BasicForm from './BasicForm';

function App() {
  return (
    <>
    <div className='form-container'>
      <BasicForm/>
    </div>
    </>
  );
}

export default App;
