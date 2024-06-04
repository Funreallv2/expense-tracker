import Balance from './Balance.jsx'
import History from './History.jsx'
import Add from './Add.jsx'
import { createContext, useState } from 'react'

export const TransContext = createContext()

function ExpenseTracker() {
  const [trans, setTrans] = useState([])


  function addToTrans(transaction) {
    let lastTrans = {...transaction, id: trans.length}
    setTrans(t => [...t, transaction])
  }

  function removeFromTrans(transaction) {
    let tempArr = [...trans]
    tempArr.filter((trans, index) => {
      trans.id != transaction.id
    })
    setTrans(t => tempArr)
  }


  return (
    <div>
      <TransContext.Provider value={{addToTrans, removeFromTrans, trans}}>
        <Balance />
        <History />
        <Add />
      </TransContext.Provider>
    </div>
  )
}

export default ExpenseTracker