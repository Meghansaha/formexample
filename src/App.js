import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form"
import BasicForm from './BasicForm';
import CuriosityForm from './CuriosityForm';

function App() {
  return (
    <>
    <div className='form-container'>
      <CuriosityForm/>
    </div>
    </>
  );
}

export default App;
