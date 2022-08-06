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
        let copy = [...prevInfo]
        copy[0][event.target.name]=event.target.value
        // return {...prevInfo, education:{...prevInfo.education, [props.id]:{...prevInfo.education[props.id],[event.target.name]:event.target.value}}}
        return copy
    })
}

    return (
        <div className='education'>
            <label>
                    Course<br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo[props.id].course}   name="course" id="course" maxLength='35'/>
                </label>
                <label>
                    School <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo[props.id].school}    name="school" id="school" />
                </label>
                <label>
                    Start Date <br/>
                    <input type="date" onChange={handleChange} value = {props.allInfo[props.id].startDate}     name="startDate" id="startDate" />
                </label>
                <label>
                    End Date <br/>
                    <input type="date" onChange={handleChange} value = {props.allInfo[props.id].endDate} name="endDate" id="endDate" />
                </label>
                <label>
                    Description <br/>
                    <textarea onChange={handleChange} value = {props.allInfo[props.id].description}       name="description" id="description" />
                </label>
        </div>
    )
}