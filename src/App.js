// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import EduExp from './components/EduExp';
import PracticalExp from './components/PracticalExp';
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
        education: {
          0:{course: '',
          school:'',
          startDate:'',
          endDate:'',
          description:''
          }
        },
        work: {
          0:{
            company:'',
            position:'',
            startDate:'',
            endDate:'',
            description:'',
          }
        }
        
      })

      return (
        <div className='main'>
          <div className='editSide'>
              <GeneralInfo allInfo= {allInfo} setAllInfo={setAllInfo}/>
              <EduExp id={0} allInfo= {allInfo} setAllInfo={setAllInfo} />
              <PracticalExp id={0} allInfo= {allInfo} setAllInfo={setAllInfo} />
          </div>
          <div className = 'previewSide'>
              <Preview />
          </div>
        </div>
      )
    
}


