import React,{useState} from 'react'

const Input = () => {
    const [total,settotal]= useState({work:'',des:''})
    const {work,des} =total
    const change =(e)=>{
     
      if(e.target.name==='work'){
        settotal({work:e.target.value})
      }else if(e.target.name==='des'){
        settotal({des:e.target.value})
      }
    console.log(work,des)
    }
    const submit =(e)=>{
         e.preventDefault()
         const userinfo ={
             work,
             des
         }
         console.log(userinfo)
    }
  return (
    <div>
          <form action="" onSubmit={submit}>
            <label htmlFor="work">Work:</label>
            <input 
            
            value={work}
            onChange={change}
            name='work'
            id='work'

             /> <br /> <br />
             <label htmlFor="des">Des:</label>
             <textarea 
             name="des" 
             value={des}
            onChange={change}
          
            id='des'
             
             ></textarea>

             <input type="submit" />
          </form>
    </div>
  )
}

export default Input