import React, { useContext } from 'react'
import MonContexte from './MonContexte'

const UseContextLVL1 = () => {

    const contexte = useContext(MonContexte);

  return (
    <div>
      <div>{contexte.valeur}</div>
    </div>
  )
}

export default UseContextLVL1
