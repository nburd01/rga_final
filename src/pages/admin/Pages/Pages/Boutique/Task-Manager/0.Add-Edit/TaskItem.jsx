import Modal from "../3.Modal/Modal"
import './taskItem.scss'

function TaskItem({onClose, open, url}) {

  return (
    <Modal modalLable='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{url}</h2>
      </div>
    </Modal>
  )
}

export default TaskItem
