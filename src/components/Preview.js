import React from 'react';

export default function Preview(props){



        return (
            <div className = "preview">
                <div className='nameAndContact'>
                    <div className='preview-name'>
                        <h1>{props.generalInfo.firstName}</h1>
                        <h1>{props.generalInfo.lastName}</h1>
                    </div>
                    <div className='preview-contact'>
                        <h4>Address:</h4>
                        <h5>{props.generalInfo.address}</h5>
                        <h4>Phone number:</h4>
                        <h5>{props.generalInfo.phoneNumber}</h5>
                        <h4>Email:</h4>
                        <h5>{props.generalInfo.email}</h5>
                    </div>
                </div>
                <div className='preview-general-desc'>
                    {props.generalInfo.description}
                </div>
                <div className='preview-education'>
                    <h2>Education</h2>
                    {props.eduInfo.map(section=>{
                        return (<div className='eduSection'>
                            <p>{section.school} - <span className='edu-course'>{section.course}</span> &nbsp; {section.startDate} - {section.endDate}</p>
                            <span className='edu-desc'>{section.description}</span>
                            </div>)
                    })}
                </div>
                <div className='preview-work'>
                    <h2>Work Experience</h2>
                    {props.workInfo.map(section=>{
                        return (<div className='workSection'>
                            <p>{section.company} - <span className='work-position'>{section.position}</span> &nbsp; {section.startDate} - {section.endDate}</p>
                            <span className='work-desc'>{section.description}</span>
                            </div>)
                    })}
                </div>
            </div>
        )
}

