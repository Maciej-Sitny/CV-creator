import React from 'react';

export default function GeneralInfo(props) {
    
        function handleChange(event) {
            props.setAllInfo(prevInfo=>{
                console.log(props.allInfo)
                return {...prevInfo, [event.target.name]:event.target.value}
            })
        }
    
        return (
            <div className='generalInfo'>
                <h1>Personal Details</h1>
                <label>
                    First Name <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.firstName}   name="firstName" id="firstName" maxLength='35'/>
                </label>
                <label>
                    Last Name <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.lastName}    name="lastName" id="lastName" />
                </label>
                <label>
                    Address <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.address}     name="address" id="address" />
                </label>
                <label>
                    Phone Number <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.phoneNumber} name="phoneNumber" id="phoneNumber" />
                </label>
                <label>
                    E-mail <br/>
                    <input type="text" onChange={handleChange} value = {props.allInfo.email}       name="email" id="email" />
                </label>
                <label>
                    Description <br/>
                    <textarea onChange={handleChange} value = {props.allInfo.description} name="description" id="description" />
                </label>
            </div>
        )
    
}

