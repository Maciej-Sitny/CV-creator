import React from 'react'

export default function PracticalExp(props) {
    // work: {
    //     0:{
    //       company:'',
    //       position:'',
    //       startDate:'',
    //       endDate:'',
    //       description:'',
    //     }
    //   }


    function handleChange(event,index) {
        // console.log(event);
        props.setAllInfo(prevInfo=>{
            // console.log(props.allInfo)
            return {...prevInfo, work:{...prevInfo.work, [index]:{...prevInfo.work[index],[event.target.name]:event.target.value}}}
        })
    }

    let elo = [
        (<div className="work">
        <label>
        Company<br/>
        <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].company}     name="company" id="company" maxLength='35'/>
    </label>
    <label>
        Position <br/>
        <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].position}     name="position" id="position" />
    </label>
    <label>
        Start Date <br/>
        <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].startDate}  name="startDate"  />
    </label>
    <label>
        End Date <br/>
        <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].endDate}    name="endDate"  />
    </label>
    <label>
        Description <br/>
        <textarea          onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].description}name="description"  />
    </label>
    {/* <button onClick={addSection}>Add Section</button> */}
    </div>),
    ]

    const [allWorkSections, setAllWorkSections] = React.useState([
        (<div className="work">
        <label>
        Company<br/>
        <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].company}     name="company" id="company" maxLength='35'/>
    </label>
    <label>
        Position <br/>
        <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].position}     name="position" id="position" />
    </label>
    <label>
        Start Date <br/>
        <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].startDate}  name="startDate"  />
    </label>
    <label>
        End Date <br/>
        <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].endDate}    name="endDate"  />
    </label>
    <label>
        Description <br/>
        <textarea          onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].description}name="description"  />
    </label>
    {/* <button onClick={addSection}>Add Section</button> */}
</div>),])

        // console.log(props.allInfo.work[0])
    // })
    
    // let allWorkSections = {
    //     0: (<div className="work">
    //     <label>
    //         Company<br/>
    //         <input type="text" onChange={handleChange} value = {props.allInfo.work[props.id].company}     name="company" id="company" maxLength='35'/>
    //     </label>
    //     <label>
    //         Position <br/>
    //         <input type="text" onChange={handleChange} value = {props.allInfo.work[props.id].position}     name="position" id="position" />
    //     </label>
    //     <label>
    //         Start Date <br/>
    //         <input type="date" onChange={handleChange} value = {props.allInfo.work[props.id].startDate}  name="startDate" id="startDate" />
    //     </label>
    //     <label>
    //         End Date <br/>
    //         <input type="date" onChange={handleChange} value = {props.allInfo.work[props.id].endDate}    name="endDate" id="endDate" />
    //     </label>
    //     <label>
    //         Description <br/>
    //         <textarea          onChange={handleChange} value = {props.allInfo.work[props.id].description}name="description" id="description" />
    //     </label>
    //     <button>Add Section</button>
    // </div>)
    // }
    
    function findHighestKey(){
    //     let highest=0;
    //     for (let i =0;i<Object.keys(allWorkSections).length;i++){
    //         if (Object.keys(allWorkSections)[i]>highest) highest = 
    //     }
    //     return highest
    }
    
    function addSection() {
        
        // let highest = findHighestKey();
        let currentIndex = Object.keys(allWorkSections).length;
        props.allInfo.work[currentIndex.toString()]={}
        // console.log(Object.keys(allWorkSections).length)
        // console.log(Object.entries(allWorkSections))
        props.allInfo.work[currentIndex.toString()].company =''
        props.allInfo.work[currentIndex.toString()].position=''
        props.allInfo.work[currentIndex.toString()].startDate=''
        props.allInfo.work[currentIndex.toString()].endDate=''
        props.allInfo.work[currentIndex.toString()].description=''
        setAllWorkSections(prev=>{
            return {
                ...prev,
                [currentIndex]: 
                (<div className="work">
                    <label>
                        Company<br/>
                        <input type="text" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].company}     name="company"  maxLength='35'/>
                    </label>
                    <label>
                        Position <br/>
                        <input type="text" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].position}     name="position"  />
                    </label>
                    <label>
                        Start Date <br/>
                        <input type="date" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].startDate}  name="startDate"  />
                    </label>
                    <label>
                        End Date <br/>
                        <input type="date" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].endDate}    name="endDate"  />
                    </label>
                    <label>
                        Description <br/>
                        <textarea          onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].description}name="description"  />
                    </label>
                    {/* <button onClick={addSection}>Add Section</button> */}
                </div>)
                

            }
        })
        // console.log(props.allInfo)
    }


    return (<div className="everyWork">
        {elo}
    </div>)
}