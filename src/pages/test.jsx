import { useState } from 'react';
import { UrlEdit } from '../props/UrlEdit';
// import Home from './admin/Task-Manager/2.TaskManager/TaskManager';


export const Test = () => {
    const [name, setName] = useState("");
    const [editBox,setEditBox] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("name",name)
    }


    return (
        <div className=''>
        <form className="container" onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
            <input type="submit" />
        </form>
        <div className=''>
            <button onClick={() => setEditBox(true)}>Edit</button>
            {editBox === true && <UrlEdit setEditBox={setEditBox} /> }
        </div>
        {/* <Home /> */}
      </div>
    )
}
