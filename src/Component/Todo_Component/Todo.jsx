import React from 'react'
import todo from'./Todo.css'

const Todo = (props) => {
 
  return (
    <div className='m-3 p-2 bg-warning bg-gradient rounded text-dark' >
          <h3> <span><i className="fa-solid fa-briefcase"></i>
</span> Work:{props.work}</h3>
          <h4> <span><i className="fa-solid fa-audio-description"></i></span> Description:{props.des}</h4>
          <h4> <span><i class="fa-regular fa-clock"></i></span> Time:{props.time}</h4>
    </div>
  )
}

export default Todo