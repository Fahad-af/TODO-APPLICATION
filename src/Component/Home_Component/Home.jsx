import React,{ useState} from 'react'

import { Data } from './../../Data/DATA';

import Todos from './../Todos_Component/Todos';

function Home() {
      const [data, setdata]=useState(Data)
     
  return (
    <div>
        < Todos data={data} />
    </div>
  )
}

export default Home