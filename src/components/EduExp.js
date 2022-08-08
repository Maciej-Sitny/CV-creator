import React from 'react';

export default function EduExp(props) {
    // education: [
    //     {course: '',
    //     school:'',
    //     startDate:'',
    //     endDate:'',
    //     description:''
    //     }
    // ]

    function handleChange(event,index) {
        props.setAllInfo(prevInfo=>{
            console.log(prevInfo)
            let copy = [...prevInfo]
            copy[index][event.target.name]=event.target.value
            return copy
        })
    }
    return (<div className='everyEducation'>
        <h1>Education</h1>
        {props.allInfo.map((section,key)=>{
            return (<div key={key} className='education'>
                <label>
                    School <br/>
                    <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.school}    name="school" id="school" />
                </label>
                <label>
                    Course<br/>
                    <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.course}   name="course" id="course" maxLength='35'/>
                </label>
                <label>
                    Start Date <br/>
                    <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.startDate}     name="startDate" id="startDate" />
                </label>
                <label>
                    End Date <br/>
                    <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.endDate} name="endDate" id="endDate" />
                </label>
                <label>
                    Description <br/>
                    <textarea onChange={e=>{handleChange(e,key)}} value = {section.description}       name="description" id="description" />
                </label>
                <div className='buttons'>
                        {key===props.allInfo.length-1 && <button onClick={()=>{props.addSection(key+1)}}>Add Section</button>}
                        {/* making sure that add section button will be displayed only after the last section */}
                        <button onClick = {()=>{props.deleteSection(key)}}>Delete Section</button>
                </div>
        </div>)})}
        {props.allInfo.length===0 && <button onClick={()=>{props.addSection(0)}}>Add Education Section</button>}
        {/* in case there won't be any sections left */}
        </div>
    )
}