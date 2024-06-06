import Balance from './Balance.jsx'
import History from './History.jsx'
import Add from './Add.jsx'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TransContext = createContext()

function ExpenseTracker() {
  const [trans, setTrans] = useState([])

  
  function addToTrans(transaction) {
    let newTrans = {...transaction, id: uuidv4()}
    setTrans(t => [...t, newTrans])
  }

  // Removes from transactions by ID
  function removeFromTrans(transactionId) {
    let tempArr = [...trans]
    let newArr = tempArr.filter((trans, index) => {
      return trans.id != transactionId
    })
    setTrans(t => newArr)
  }

  function handleClick () {
    console.log(trans)
  }


  return (
    <div>
      <TransContext.Provider value={{addToTrans, removeFromTrans, trans}}>
        <Balance />
        <History />
        <Add />
      </TransContext.Provider>
      <button onClick={handleClick}>Show Transactions</button>
    </div>
  )
}

export default ExpenseTracker