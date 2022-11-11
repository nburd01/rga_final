import Modal from "../3.Modal/Modal"
import './taskItem.scss'

function TaskItem({onClose, open, email, téléphone}) {

  return (
    <Modal modalLable="Coordonnées" onClose={onClose} open={open}>
      <div className='taskItem'>
        <p>{email}</p>
        <p>{téléphone}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
