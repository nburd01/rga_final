import { db } from "../../../../../../../firebase";
import AddTask from "../0.Add-Edit/AddTask";
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import Task from "../1.Task/Task";

function TaskManager() {

    const [openAddModal, setOpenAddModal] = useState(false)
    const [boutiques, setBoutiques] = useState([])
  
    /* function to get all tasks from firestore in realtime */ 
    useEffect(() => {
      const taskColRef = query(collection(db, 'boutiques'), orderBy('created', 'desc'))
      onSnapshot(taskColRef, (snapshot) => {
        setBoutiques(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    },[])
  
    return (
      <div className='taskManager'>
        <div className='taskManager__container'>
          <button 
            onClick={() => setOpenAddModal(true)}>
            Ajouter un élément +
          </button>
          <div className='taskManager__tasks'>
  
            {boutiques.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                completed={task.data.completed}
                url={task.data.url} 
              />
            ))}
  
          </div>
        </div>
  
        {openAddModal &&
          <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
        }
  
      </div>
    )
  }
  
  export default TaskManager