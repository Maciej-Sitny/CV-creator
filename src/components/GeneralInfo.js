import React from 'react';

export default function GeneralInfo() {
    

        const [info,setInfo]=React.useState({
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',
            }
        )

        function handleChange(event) {
            setInfo(prevInfo=>{

            })
        }
    
        return (
            <div className='generalInfo'>
                <input type="text" onChange={handleChange} value = {info.firstName} name="firstName" id="firstName" maxLength='35'/>
                <input type="text" onChange={handleChange} value = {info.lastName} name="lastName" id="lastName" />
                <input type="text" onChange={handleChange} value = {info.address} name="address" id="address" />
                <input type="text" onChange={handleChange} value = {info.phoneNumber} name="phoneNumber" id="phoneNumber" />
                <input type="text" onChange={handleChange} value = {info.email} name="email" id="email" />
            </div>
        )
    
}

