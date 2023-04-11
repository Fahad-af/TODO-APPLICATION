import React from 'react'
import Todo from '../Todo_Component/Todo'

const Todos = (props) => {
     
  return (
    <div>
         {
            props.data.map((todo)=>{
                  console.log(todo)
                  const {work,des}=todo
                  return <Todo work={work} des={des}/>
            })
         }
    </div>
  )
}

export default Todos