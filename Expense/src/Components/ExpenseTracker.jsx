import Balance from './Balance.jsx'
import History from './History.jsx'
import Add from './Add.jsx'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TransContext = createContext()

function ExpenseTracker() {
  const [trans, setTrans] = useState([
    { 
      amount: 50,
      desc: "car"
    },{
      amount: -20,
      desc: "not car"
    },{
      amount: -10,
      desc: "yes car"
    },{
      amount: 10,
      desc: "def car"
    }

  ])


  function addToTrans(transaction) {
    let newTrans = {...transaction, id: uuidv4()}
    setTrans(t => [...t, newTrans])
  }

  function removeFromTrans(transaction) {
    let tempArr = [...trans]
    tempArr.filter((trans, index) => {
      trans.id != transaction
    })
    setTrans(t => tempArr)
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