import React, { useContext } from 'react'
import { TransContext } from './ExpenseTracker'

function Balance() {
  const { addToTrans } = useContext(TransContext)


  return (
    <div>
      <button onClick={temp}>Click</button>
    </div>
  )
}

export default Balance