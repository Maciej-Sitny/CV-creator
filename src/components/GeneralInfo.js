import React from 'react';

export default function GeneralInfo(props) {
    

        function handleChange(event) {
            props.setAllInfo(prevInfo=>{
                console.log(props.allInfo)
                return {...prevInfo, generalInfo:{...prevInfo.generalInfo,[event.target.name]:event.target.value}}
            })
        }
    
        return (
            <div className='generalInfo'>
                <input type="text" placeholder='First Name'   onChange={handleChange} value = {props.allInfo.generalInfo.firstName}   name="firstName" id="firstName" maxLength='35'/>
                <input type="text" placeholder='Last Name'    onChange={handleChange} value = {props.allInfo.generalInfo.lastName}    name="lastName" id="lastName" />
                <input type="text" placeholder='Address'      onChange={handleChange} value = {props.allInfo.generalInfo.address}     name="address" id="address" />
                <input type="text" placeholder='Phone Number' onChange={handleChange} value = {props.allInfo.generalInfo.phoneNumber} name="phoneNumber" id="phoneNumber" />
                <input type="text" placeholder='E-mail'       onChange={handleChange} value = {props.allInfo.generalInfo.email}       name="email" id="email" />
                <input type="text" placeholder='Description'  onChange={handleChange} value = {props.allInfo.generalInfo.description} name="description" id="description" />
            </div>
        )
    
}

