import { db } from "../../../../../../../firebase";
import AddTask from "../0.Add-Edit/AddTask";
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import Task from "../1.Task/Task";

function TaskManager() {

    const [openAddModal, setOpenAddModal] = useState(false)
    const [contacts, setBoutiques] = useState([])
  
    /* function to get all tasks from firestore in realtime */ 
    useEffect(() => {
      const taskColRef = query(collection(db, 'contacts'), orderBy('created', 'desc'))
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

          <div className='taskManager__tasks'>
  
            {contacts.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                completed={task.data.completed}
                email={task.data.email} 
                téléphone={task.data.téléphone} 
              />
            ))}
  
          </div>
          <button className="task__deleteNedit"
          onClick={() => setOpenAddModal(true)}>
          Ajouter un élément
        </button>
        </div>
  
        {openAddModal &&
          <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
        }
      </div>
    )
  }
  
  export default TaskManager