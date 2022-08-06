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

      function addSection(i) {
        
        // let highest = findHighestKey();
        // console.log(Object.keys(allWorkSections).length)
        // console.log(Object.entries(allWorkSections))
        
        // console.log(currentIndex);
        setWork(prev=>{

            let copy = {...prev}
            console.log(copy);
            copy.work[i] ={}
            copy.work[i].company=""
            copy.work[i].position=""
            copy.work[i].startDate=""
            copy.work[i].endDate=""
            copy.work[i].description=""
            console.log(copy);
            return {
                // ...prev,
                // work:{
                //     ...prev.work,
                //     [currentIndex]:{
                //         company:'',
                //         position:'',
                //         startDate:'',
                //         endDate:'',
                //         description:'',
                //     }
                // }
                copy
            }
        })
      }

      return (
        <div className='main'>
          <div className='editSide'>
              <GeneralInfo allInfo= {generalInfo} setAllInfo={setGeneralInfo}/>
              <EduExp id={0} allInfo= {education} setAllInfo={setEducation} />
              <PracticalExp id={0} addSection={addSection} allInfo= {work} setAllInfo={setWork} />
          </div>
          <div className = 'previewSide'>
              <Preview />
          </div>
        </div>
      )
    
}


