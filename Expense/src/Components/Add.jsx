import React, { useContext, useState } from 'react'
import { TransContext } from './ExpenseTracker'

function Add() {
  const { addToTrans } = useContext(TransContext)
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState(0)
  const [isOkay, setIsOkay] = useState(true)

  function handleSubmit () {
    if (!desc) {
      console.log(1)
      setIsOkay(o => false)
    } else if (!amount) {
      console.log(2)
      setIsOkay(o => false)
    } else {
      let newTran = {
        amount: parseInt(amount),
        desc: desc,
      }
      addToTrans(newTran)
      alert("Succesfully added.")
      setIsOkay(o => true)
    }
  }

  return (
    <div>
      <input type="text" placeholder='Enter the description...' onChange={(e) => setDesc(d => e.target.value)}/>
      <input type="number" placeholder='Enter the amount...' onChange={(e) => setAmount(a => e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      {!isOkay && <p>Stop it dude</p>}
    </div>
  )
}

export default Add