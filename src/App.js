// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import Preview from './components/Preview';

//30 minut

export default function App() {

      const [allInfo,setAllInfo] = React.useState({
        generalInfo: {
          firstName: '',
          lastName: '',
          address: '',
          phoneNumber: '',
          email: '',
          description:''
        },
        education: [
          {course: '',
          school:'',
          startDate:'',
          endDate:'',
          description:''
          }
        ],
        work: [
          {
            company:'',
            position:'',
            startDate:'',
            endDate:'',
            description:'',
          }
        ]
        
      })

      return (
        <div className='main'>
          <div className='editSide'>
              <GeneralInfo allInfo= {allInfo} setAllInfo={setAllInfo}/>
          </div>
          <div className = 'previewSide'>
              <Preview />
          </div>
        </div>
      )
    
}


