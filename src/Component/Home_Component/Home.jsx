import React,{ useState} from 'react'

import { Data } from './../../Data/DATA';

import Todos from './../Todos_Component/Todos';
import Input from '../Input_Component/Input';

function Home() {
      const [data, setdata]=useState(Data)

      const data1=(userinfo)=>{
          setdata([...data,userinfo])
      }
     
  return (
    <div>
        
        <Input data={data1} />
        < Todos data={data} />
    </div>
  )
}

export default Home