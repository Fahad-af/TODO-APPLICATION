import React,{useState} from 'react'

const Input = (props) => {
   
          const [work,setwork]=useState('')
          const [des,setdes]=useState('')
          const workchange=(e)=>{
            setwork(e.target.value)
          }
          const textchange=(e)=>{
            setdes(e.target.value)
          }
          const submit=e=>{
            e.preventDefault()
            const userinfo={
              work:work,
              des:des
            }
            props.data(userinfo)
           setwork('')
           setdes('')
          }
  return (
    <div>
          <form action="" onSubmit={submit}>
            <label htmlFor="work">Work:</label>
            <input 
            id='work'
            type="text"
            name='work'
            value={work}
            required
            onChange={workchange}
             />
             <br /> <br />
             <label htmlFor="textarea">Des:</label>
             <textarea name="textarea" id="textarea" type='textarea' value={des} onChange={textchange}></textarea>
             <br /> <br />
             <input type="submit" />
          </form>
    </div>
  )
}

export default Input