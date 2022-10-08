import Modal from "../3.Modal/Modal"
// import './taskItem.css'

function TaskItem({onClose, open, url, description}) {

  return (
    <Modal modalLable='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{url}</h2>
        <p>{description}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
