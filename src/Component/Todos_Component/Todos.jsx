import React from 'react'
import Todo from '../Todo_Component/Todo'

const Todos = (props) => {
     
  return (
    <div>
         {
            props.data.map((todo,index)=>{
                  console.log(todo)
                  const {work,des,date}=todo
                  return <Todo work={work} des={des} key={index} time={date} />
            })
         }
    </div>
  )
}

export default Todos