import Modal from "../3.Modal/Modal"
import './taskItem.scss'

function TaskItem({onClose, open, url}) {

  return (
    <Modal modalLable="Consulter l'élément" onClose={onClose} open={open}>
      <div className='taskItem'>
        <p>{url}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
