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

      const [eduInfo, setEduInfo] = React.useState([{
        course: '',
        school:'',
        startDate:'',
        endDate:'',
        description:''
      }])

      const [workInfo,setWorkInfo] = React.useState([{
        company:'',
        position:'',
        startDate:'',
        endDate:'',
        description:'',
      }])

      function addWorkSection(i) {
        setWorkInfo(prev=>{
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
        setWorkInfo(workInfo.filter((section,i)=> index!==i))
      }

      // course: '',
      // school:'',
      // startDate:'',
      // endDate:'',
      // description:''

      function addEduSection(i) {
        setEduInfo(prev=>{
          let copy = [...prev]
          copy[i] ={}
          copy[i].course=""
          copy[i].school=""
          copy[i].startDate=""
          copy[i].endDate=""
          copy[i].description=""
          return copy
            
        })
      }

      function deleteEduSection(index){
        setEduInfo(eduInfo.filter((section,i)=> index!==i))
      }

      return (
        <div className='main'>
          <div className='editSide'>
              <GeneralInfo allInfo= {generalInfo} setAllInfo={setGeneralInfo}/>
              <EduExp id={0} allInfo= {eduInfo} setAllInfo={setEduInfo} deleteSection={deleteEduSection} addSection={addEduSection} />
              <PracticalExp id={0} allInfo= {workInfo} setAllInfo={setWorkInfo} deleteSection={deleteWorkSection} addSection={addWorkSection} />
          </div>
          <div className = 'previewSide'>
              <Preview generalInfo={generalInfo} eduInfo={eduInfo} workInfo={workInfo}/>
          </div>
        </div>
      )
    
}


