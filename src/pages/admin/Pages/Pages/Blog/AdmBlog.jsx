import React from 'react'
import TaskManager from './Task-Manager/2.TaskManager/TaskManager'
import AddTask from './Task-Manager/0.Add-Edit/AddTask'


export const AdmBlog = () => {
  return (
    <>
      <h3>Blog</h3>
      <AddTask/>
      <TaskManager/>
    </>
  )
}
