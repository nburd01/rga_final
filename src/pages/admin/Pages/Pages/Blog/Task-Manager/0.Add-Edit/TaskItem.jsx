import Modal from "../3.Modal/Modal"
import './taskItem.scss'

function TaskItem({onClose, open, blogTitle, blogImg, blogDescription, blogBody, linkUrl}) {

  return (
    <Modal modalLable="Article" onClose={onClose} open={open}>
      <div className='taskItem'>
        <h3>{blogTitle}</h3>
        <img src={blogImg}></img>
        <p>{blogDescription}</p>
        <p>{blogBody}</p>
        <p>{linkUrl}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
