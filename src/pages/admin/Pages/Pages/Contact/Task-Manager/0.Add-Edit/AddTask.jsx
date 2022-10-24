import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import {db} from '../../../../../../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import './addTask.scss'


function AddTask({onClose, open}) {

    const [email, setEmail] = useState('')
    const [téléphone, setTéléphone] = useState('')
    console.log("AddTask email", email)
    console.log("AddTask téléphone", téléphone)


      /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await addDoc(collection(db, 'contacts'), {
            email: email,
            téléphone: téléphone,
            completed: false,
            created: Timestamp.now()
        })
        onClose()
        } catch (err) {
        alert(err)
        }
    }

    return (
        <Modal modalLable='Nouvel élément' onClose={onClose} open={open}>
            <form onSubmit={handleSubmit} className='addUrl' name='addUrl'>

                <input 
                type='text' 
                name='email' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                placeholder='Entrer email'/>

                <input 
                type='text' 
                name='téléphone' 
                onChange={(e) => setTéléphone(e.target.value)} 
                value={téléphone}
                placeholder='Entrer téléphone'/>
                <button type='submit'>Soumettre</button>
            </form> 
      </Modal>
    )
}

export default AddTask