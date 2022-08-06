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
            let copy = [...prevInfo]
            copy[index][event.target.name]=event.target.value
            // return {...prevInfo, work:{...prevInfo.work, [index]:{...prevInfo.work[index],[event.target.name]:event.target.value}}}
            return copy
        })
        // props.allInfo.work[index][event.target.name] = event.target.value
        // console.log(props.allInfo)
    }


    
    let elo = [
        (<div className="work">
        <label>
        Company<br/>
        <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo[0].company}     name="company" id="company" maxLength='35'/>
    </label>
    <label>
        Position <br/>
        <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo[0].position}     name="position" id="position" />
    </label>
    <label>
        Start Date <br/>
        <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo[0].startDate}  name="startDate"  />
    </label>
    <label>
        End Date <br/>
        <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo[0].endDate}    name="endDate"  />
    </label>
    <label>
        Description <br/>
        <textarea          onChange={e=>handleChange(e,0)} value = {props.allInfo[0].description}name="description"  />
    </label>
    {/* <button onClick={()=>{props.addSection()}}>Add Section</button> */}
    </div>),
    ]

    let currentIndex = 1;

//     const [allWorkSections, setAllWorkSections] = React.useState([
//         (<div className="work">
//         <label>
//         Company<br/>
//         <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].company}     name="company" id="company" maxLength='35'/>
//     </label>
//     <label>
//         Position <br/>
//         <input type="text" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].position}     name="position" id="position" />
//     </label>
//     <label>
//         Start Date <br/>
//         <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].startDate}  name="startDate"  />
//     </label>
//     <label>
//         End Date <br/>
//         <input type="date" onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].endDate}    name="endDate"  />
//     </label>
//     <label>
//         Description <br/>
//         <textarea          onChange={e=>handleChange(e,0)} value = {props.allInfo.work[0].description}name="description"  />
//     </label>
//     {/* <button onClick={addSection}>Add Section</button> */}
// </div>),])

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
    
    // function addSection(i) {
        
    //     // let highest = findHighestKey();
    //     // console.log(Object.keys(allWorkSections).length)
    //     // console.log(Object.entries(allWorkSections))
        
    //     // console.log(currentIndex);
    //     props.setAllInfo(prev=>{

    //         let copy = {...prev}
    //         console.log(copy);
    //         copy.work[i] ={}
    //         copy.work[i].company=""
    //         copy.work[i].position=""
    //         copy.work[i].startDate=""
    //         copy.work[i].endDate=""
    //         copy.work[i].description=""
    //         console.log(copy);
    //         return {
    //             // ...prev,
    //             // work:{
    //             //     ...prev.work,
    //             //     [currentIndex]:{
    //             //         company:'',
    //             //         position:'',
    //             //         startDate:'',
    //             //         endDate:'',
    //             //         description:'',
    //             //     }
    //             // }
    //             copy
    //         }
    //     })
        
        // props.allInfo.work[currentIndex.toString()]={}
        // console.log(props.allInfo)
        // props.allInfo.work[currentIndex.toString()].company =''
        // props.allInfo.work[currentIndex.toString()].position=''
        // props.allInfo.work[currentIndex.toString()].startDate=''
        // props.allInfo.work[currentIndex.toString()].endDate=''
        // props.allInfo.work[currentIndex.toString()].description=''
        // elo.push(
                // (<div className="work">
                //     <label>
                //         Company<br/>
                //         <input type="text" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].company}     name="company"  maxLength='35'/>
                //     </label>
                //     <label>
                //         Position <br/>
                //         <input type="text" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].position}     name="position"  />
                //     </label>
                //     <label>
                //         Start Date <br/>
                //         <input type="date" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].startDate}  name="startDate"  />
                //     </label>
                //     <label>
                //         End Date <br/>
                //         <input type="date" onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].endDate}    name="endDate"  />
                //     </label>
                //     <label>
                //         Description <br/>
                //         <textarea          onChange={e=>{handleChange(e,currentIndex)}} value = {props.allInfo.work[currentIndex].description}name="description"  />
                //     </label>
                //     {/* <button onClick={addSection}>Add Section</button> */}
                // </div>)
                

            
        // )
        // console.log(elo)
    // }

    let siema = props.allInfo
    let dupa = []

    for (let key in siema) {
        console.log(key)
        dupa.push(
            (<div key = {key} className="work">
                    <label>
                        Company<br/>
                        <input type="text" onChange={e=>{handleChange(e,key)}} value = {siema[key].company}     name="company"  maxLength='35'/>
                    </label>
                    <label>
                        Position <br/>
                        <input type="text" onChange={e=>{handleChange(e,key)}} value = {siema[key].position}     name="position"  />
                    </label>
                    <label>
                        Start Date <br/>
                        <input type="date" onChange={e=>{handleChange(e,key)}} value = {siema[key].startDate}  name="startDate"  />
                    </label>
                    <label>
                        End Date <br/>
                        <input type="date" onChange={e=>{handleChange(e,key)}} value = {siema[key].endDate}    name="endDate"  />
                    </label>
                    <label>
                        Description <br/>
                        <textarea          onChange={e=>{handleChange(e,key)}} value = {siema[key].description}name="description"  />
                    </label>
                    <button onClick={()=>{props.addSection(key)}}>Add Section</button>
                </div>)
        )
    }

    
    return (<div className="everyWork">
        {dupa}
    </div>)
}