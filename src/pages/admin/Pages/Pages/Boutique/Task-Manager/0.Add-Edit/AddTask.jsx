import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import {db} from '../../../../../../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import './addTask.scss'


function AddTask({onClose, open}) {

    const [url, setUrl] = useState('')

      /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await addDoc(collection(db, 'boutiques'), {
            url: url,
            completed: false,
            created: Timestamp.now()
        })
        onClose()
        } catch (err) {
        alert(err)
        }
    }

    return (
        <Modal modalLable='Add Task' onClose={onClose} open={open}>
            <form onSubmit={handleSubmit} className='addUrl' name='addUrl'>
                <input 
                type='text' 
                name='url' 
                onChange={(e) => setUrl(e.target.value)} 
                value={url}
                placeholder='Enter url'/>
                <button type='submit'>Done</button>
            </form> 
      </Modal>
    )
}

export default AddTask