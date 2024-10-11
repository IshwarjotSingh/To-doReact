import React from 'react'
import Todo from './assets/direct-hit.png';
import "./TaskColumn.css"
import TaskCard from "./TaskCard"
import App from '../App';



const TaskColumn = ({title, icon , tasks, status, handleDelete}) => {
  return (
    <div>
        <section className='task_column'>
            <h2 className="task_coumn_heading">
              <img className='task_column_icon' src={icon} alt=''/> {title}
            </h2>
          {
            tasks.map(
              (task, index) => 
                task.status === status && (
                  <TaskCard 
                        key={index} 
                        title={task.task}
                        tags={task.tags}
                        handleDelete = {handleDelete}
                        index = {index}
              />
            )
          )}
          
        </section>
    </div>
  )
}

export default TaskColumn;
