import React from 'react';

export default function EduExp(props) {
    // education: {
    //     0:{course: '',
    //     school:'',
    //     startDate:'',
    //     endDate:'',
    //     description:''
    //     }

function handleChange(event) {
    props.setAllInfo(prevInfo=>{
        console.log(props.allInfo)
        return {...prevInfo, education:{...prevInfo.education, [props.id]:{...prevInfo.education[props.id],[event.target.name]:event.target.value}}}
    })
}

    return (
        <div className='education'>
            <label>
                    Course<br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.education[props.id].course}   name="course" id="course" maxLength='35'/>
                </label>
                <label>
                    School <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.education[props.id].school}    name="school" id="school" />
                </label>
                <label>
                    Start Date <br/>
                    <input type="date" onChange={handleChange} value = {props.allInfo.education[props.id].startDate}     name="startDate" id="startDate" />
                </label>
                <label>
                    End Date <br/>
                    <input type="date" onChange={handleChange} value = {props.allInfo.education[props.id].endDate} name="endDate" id="endDate" />
                </label>
                <label>
                    Description <br/>
                    <textarea onChange={handleChange} value = {props.allInfo.education[props.id].description}       name="description" id="description" />
                </label>
        </div>
    )
}