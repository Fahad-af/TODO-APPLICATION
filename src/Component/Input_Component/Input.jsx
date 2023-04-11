import React,{useState} from 'react'

const Input = (props) => {
   
          const [work,setwork]=useState('')
          const [des,setdes]=useState('')
          const [date,setdate]=useState('')
          const workchange=(e)=>{
            setwork(e.target.value)
          }
          const textchange=(e)=>{
            setdes(e.target.value)
          }
          const datechange=(e)=>{
            setdate(e.target.value)
          }
          const submit=e=>{
            e.preventDefault()
            const userinfo={
              work:work,
              des:des,
              date:date
            }
            console.log(userinfo)
            props.data(userinfo)
           setwork('')
           setdes('')
          }
  return (
    <div className='m-3'>
      
          <form action="" onSubmit={submit}>
            <div className='mb-2'>
            <label htmlFor="work" className='form-label"'>Work:</label>
            <input 
            className='form-control'
            id='work'
            type="text"
            name='work'
            value={work}
            required
            onChange={workchange}
            placeholder='Enter your work'
             />
            </div>
             
            
             <div className='mb-2'>
             <label htmlFor="textarea" className='form-label'>Description:</label>
             <textarea name="textarea" id="textarea" type='textarea' value={des} onChange={textchange} className='form-control' placeholder='Enter yor description'
             ></textarea>
             </div>
            
            <div className='mb-2'>
                   <label htmlFor="date" className='form-label'>Date</label>
                   <input 
                   type='date'
                   id='date'
                   name='date'
                   value={date}
                   onChange={datechange}
                   className='form-control'
                   
                    />
            </div>
           
             <div className='mt-3'> <center> <input type="submit" className='btn btn-primary bg-primary' /> </center></div>
            
          </form>
    </div>
  )
}

export default Input