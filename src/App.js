import React from 'react'
import GeneralInfo from './components/GeneralInfo';
import EduExp from './components/EduExp';
import PracticalExp from './components/PracticalExp';
import Preview from './components/Preview';


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
 
      const [RODO, setRODO] = React.useState(false)
      
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
              <hr />
              <EduExp id={0} allInfo= {eduInfo} setAllInfo={setEduInfo} deleteSection={deleteEduSection} addSection={addEduSection} />
              <hr />
              <PracticalExp id={0} allInfo= {workInfo} setAllInfo={setWorkInfo} deleteSection={deleteWorkSection} addSection={addWorkSection} />
              <hr />
              <label>
                Include RODO agreement <input className='check' type="checkbox" onClick={()=>{setRODO(prev=> !prev)}}></input>
                
              </label>
          </div>
          <div className = 'previewSide' style={{height:document.getElementsByClassName('editSide').offsetHeight}}>
              <Preview generalInfo={generalInfo} eduInfo={eduInfo} workInfo={workInfo} RODO={RODO}/>
          </div>
          
        </div>
      )
    
}


