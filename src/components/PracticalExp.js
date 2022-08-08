import React from 'react'

export default function PracticalExp(props) {
    // work: [
    //     {
    //       company:'',
    //       position:'',
    //       startDate:'',
    //       endDate:'',
    //       description:'',
    //     }
    //   ]

    function handleChange(event,index) {
        props.setAllInfo(prevInfo=>{
            let copy = [...prevInfo]
            copy[index][event.target.name]=event.target.value
            return copy
        })

    }

    return (<div className="everyWork">
        <h1>Work Experience</h1>
        {props.allInfo.map((section,key)=>{
        return (<div key = {key} className="work">
                    <label>
                        Company<br/>
                        <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.company}     name="company"  />
                    </label>
                    <label>
                        Position <br/>
                        <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.position}     name="position"  />
                    </label>
                    <label>
                        Start Date <br/>
                        <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.startDate}  name="startDate"  />
                    </label>
                    <label>
                        End Date <br/>
                        <input type="text" onChange={e=>{handleChange(e,key)}} value = {section.endDate}    name="endDate"  />
                    </label> 
                    <label>
                        Description <br/>
                        <textarea          onChange={e=>{handleChange(e,key)}} value = {section.description}name="description"  />
                    </label>
                    <div className='buttons'>
                        {key===props.allInfo.length-1 && <button onClick={()=>{props.addSection(key+1)}}>Add Section</button>}
                        {/* making sure that add section button will be displayed only after the last section */}
                        <button onClick = {()=>{props.deleteSection(key)}}>Delete Section</button>
                    </div>
                </div>)
    })}
    {props.allInfo.length===0 && <button onClick={()=>{props.addSection(0)}}>Add Work Section</button>} 
    {/* in case there won't be any sections left */}
    </div>)
}