// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import EduExp from './components/EduExp';
import PracticalExp from './components/PracticalExp';
import Preview from './components/Preview';

//30 minut

export default function App() {

      const [generalInfo,setGeneralInfo] = React.useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        description:''
      })

      const [education, setEducation] = React.useState([{
        course: '',
        school:'',
        startDate:'',
        endDate:'',
        description:''
      }])

      const [work,setWork] = React.useState([{
        company:'',
        position:'',
        startDate:'',
        endDate:'',
        description:'',
      }])

      function addWorkSection(i) {
        setWork(prev=>{
          let copy = [...prev]
          copy[i] ={}
          copy[i].company=""
          copy[i].position=""
          copy[i].startDate=""
          copy[i].endDate=""
          copy[i].description=""
          return copy
            
        })
      }

      function deleteWorkSection(index){
        setWork(work.filter((section,i)=> index!==i))
      }
      return (
        <div className='main'>
          <div className='editSide'>
              <GeneralInfo allInfo= {generalInfo} setAllInfo={setGeneralInfo}/>
              <EduExp id={0} allInfo= {education} setAllInfo={setEducation} />
              <PracticalExp id={0} deleteSection={deleteWorkSection} addSection={addWorkSection} allInfo= {work} setAllInfo={setWork} />
          </div>
          <div className = 'previewSide'>
              <Preview />
          </div>
        </div>
      )
    
}


