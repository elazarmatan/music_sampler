import React from 'react'
import { useMyContext } from '../../context/MyContext.context'

function BackToStart() {
  const {setColumn} = useMyContext()
  return (
    <button onClick={() => {
        setColumn(0)
    }}>BackToStart</button>
  )
}

export default BackToStart