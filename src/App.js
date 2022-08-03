import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Preview from './components/Preview';

export default function App() {
      return (
        <div className='main'>
          <div className='editSide'>
              <GeneralInfo />
          </div>
          <div className = 'previewSide'>
              <Preview />
          </div>
        </div>
      )
    
}


