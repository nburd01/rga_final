import {useState} from 'react'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "../../../../../../../firebase";
import TaskItem from '../0.Add-Edit/TaskItem'
import EditTask from '../0.Add-Edit/EditTask'
import './task.scss'

function Task({id, blogTitle, blogImg, blogDescription, blogBody, completed}) {

    const [checked, setChecked] = useState(completed)
    const [open, setOpen] = useState({edit:false, view:false})
  
    const handleClose = () => {
      setOpen({edit:false, view:false})
    }
  
    /* function to update firestore */
    const handleChange = async () => {
      const taskDocRef = doc(db, 'blogs', id)
      try{
        await updateDoc(taskDocRef, {
          completed: checked
        })
      } catch (err) {
        alert(err)
      }
    }
  
    /* function to delete a document from firstore */ 
    const handleDelete = async () => {
      const taskDocRef = doc(db, 'blogs', id)
      try{
        await deleteDoc(taskDocRef)
      } catch (err) {
        alert(err)
      }
    }
  
    return (
      <div className={`task ${checked && 'task--borderColor'}`}>
        <div>
          <input 
            id={`checkbox-${id}`} 
            className='checkbox-custom'
            name="checkbox" 
            checked={checked}
            onChange={handleChange}
            type="checkbox" />
          <label 
            htmlFor={`checkbox-${id}`} 
            className="checkbox-custom-label" 
            onClick={() => setChecked(!checked)} ></label>
        </div>
        <div className='task__body'>
          <h3>blogTitle</h3>
          <p>{blogTitle}</p>
          <h3>blogImg</h3>
          <p>{blogImg}</p>
          <h3>blogDescription</h3>
          <p>{blogDescription}</p>
          <h3>blogBody</h3>
          <p>{blogBody}</p>
          <div className='task__buttons'>
            <div className='task__deleteNedit'>
              <button 
                className='task__editButton' 
                onClick={() => setOpen({...open, edit : true})}>
                Modifier
              </button>
              <button className='task__deleteButton' onClick={handleDelete}>Supprimer</button>

            <button className='task__seeButton'
              onClick={() => setOpen({...open, view: true})}>
              Voir
            </button>
          </div>
          </div>
        </div>
  
        {open.view &&
          <TaskItem 
            onClose={handleClose} 
            blogTitle={blogTitle} 
            blogImg={blogImg} 
            blogDescription={blogDescription} 
            blogBody={blogBody} 
            open={open.view} />
        }
  
        {open.edit &&
          <EditTask 
            onClose={handleClose} 
            blogTitle={blogTitle} 
            blogImg={blogImg} 
            blogDescription={blogDescription} 
            blogBody={blogBody} 
            open={open.edit}
            id={id} />
        }
  
      </div>
    )
  }
  
  export default Task