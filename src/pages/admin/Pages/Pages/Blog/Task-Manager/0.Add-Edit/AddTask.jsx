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
                <input 
                type='text' 
                name='title' 
                onChange={(e) => setBlogTitle(e.target.value)} 
                value={blogTitle}
                placeholder='Enter title'
                />
                <input 
                type='text' 
                name='blogImg' 
                onChange={(e) => setBlogImg(e.target.value)} 
                value={blogImg}
                placeholder='Enter image url'
                />
                <input 
                type='text' 
                name='blogDescription' 
                onChange={(e) => setBlogDescription(e.target.value)} 
                value={blogDescription}
                placeholder='Enter description'
                />
                <input 
                type='text' 
                name='blogBody' 
                onChange={(e) => setBlogBody(e.target.value)} 
                value={blogBody}
                placeholder='Enter body'
                />
                <input 
                type='text' 
                name='linkUrl' 
                onChange={(e) => setLinkUrl(e.target.value)} 
                value={linkUrl}
                placeholder='Enter link'
                />
                <button type='submit'>Soumettre</button>
            </form> 
      </Modal>
    )
}

export default AddTask