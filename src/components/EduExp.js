import React from 'react';

export default function EduExp(props) {
    // education: {
    //     0:{course: '',
    //     school:'',
    //     startDate:'',
    //     endDate:'',
    //     description:''
    //     }

    function handleChange(event,index) {
        props.setAllInfo(prevInfo=>{
            let copy = [...prevInfo]
            copy[index][event.target.name]=event.target.value
            return copy
        })
    }
    return (<div className='everyEducation'>
        {props.allInfo.map((section,key)=>{
            return (<div key={key} className='education'>
            <label>
                    Course<br/>
                    <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.course}   name="course" id="course" maxLength='35'/>
                </label>
                <label>
                    School <br/>
                    <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.school}    name="school" id="school" />
                </label>
                <label>
                    Start Date <br/>
                    <input type="date" onChange={e=>{handleChange(e,key)}} value = {section.startDate}     name="startDate" id="startDate" />
                </label>
                <label>
                    End Date <br/>
                    <input type="date" onChange={e=>{handleChange(e,key)}} value = {section.endDate} name="endDate" id="endDate" />
                </label>
                <label>
                    Description <br/>
                    <textarea onChange={e=>{handleChange(e,key)}} value = {section.description}       name="description" id="description" />
                </label>
                <div>
                        {key===props.allInfo.length-1 && <button onClick={()=>{props.addSection(key+1)}}>Add Section</button>}
                        <button onClick = {()=>{props.deleteSection(key)}}>Delete Section</button>
                </div>
        </div>)})}
        </div>
    )
}