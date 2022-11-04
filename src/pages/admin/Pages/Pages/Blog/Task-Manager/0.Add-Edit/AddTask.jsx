import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import {db} from '../../../../../../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import './addTask.scss'


function AddTask({onClose, open}) {

    const [blogTitle, setBlogTitle] = useState('');
    const [blogImg, setBlogImg] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [linkUrl, setLinkUrl] = useState('');



      /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        await addDoc(collection(db, 'blogs'), {
            
            blogTitle: blogTitle,        
            blogImg: blogImg,
            blogDescription: blogDescription,
            blogBody: blogBody,
            linkUrl: linkUrl,
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
                <textarea 
                type='text' 
                name='title' 
                onChange={(e) => setBlogTitle(e.target.value)} 
                value={blogTitle}
                placeholder='Titre (max 100 caractères)'
                maxlength="100"
                />
                <input
                type='text' 
                name='blogImg' 
                onChange={(e) => setBlogImg(e.target.value)} 
                value={blogImg}
                placeholder="Url de l'image"
                />
                <textarea 
                type='text' 
                name='blogDescription' 
                onChange={(e) => setBlogDescription(e.target.value)} 
                value={blogDescription}
                placeholder='Description (max 150 caractères)'
                maxlength="150"
                />
                <textarea 
                type='text' 
                name='blogBody' 
                onChange={(e) => setBlogBody(e.target.value)} 
                value={blogBody}
                placeholder='Corps'
                />
                <textarea 
                type='text' 
                name='linkUrl' 
                onChange={(e) => setLinkUrl(e.target.value)} 
                value={linkUrl}
                placeholder='Lien externe'
                />
                <button type='submit'>Soumettre</button>
            </form> 
      </Modal>
    )
}

export default AddTask