import React,{ useState} from 'react'

import { Data } from './../../Data/DATA';

import Todos from './../Todos_Component/Todos';
import Input from '../Input_Component/Input';

function Home() {
      const [data, setdata]=useState(Data)
     
  return (
    <div>
        < Todos data={data} />
        <Input />
    </div>
  )
}

export default Home