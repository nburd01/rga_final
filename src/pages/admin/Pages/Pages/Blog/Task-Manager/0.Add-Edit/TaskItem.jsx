import Modal from "../3.Modal/Modal"
import './taskItem.scss'

function TaskItem({onClose, open, blogTitle, blogImg, blogDescription, blogBody, linkUrl}) {

  return (
    <Modal modalLable="Consulter l'élément" onClose={onClose} open={open}>
      <div className='taskItem'>
        <p>{blogTitle}</p>
        <p>{blogImg}</p>
        <p>{blogDescription}</p>
        <p>{blogBody}</p>
        <p>{linkUrl}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
