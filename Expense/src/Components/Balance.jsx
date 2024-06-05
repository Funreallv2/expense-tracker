import React, { useContext, useEffect, useState } from 'react'
import { TransContext } from './ExpenseTracker'

function Balance() {
  const { trans } = useContext(TransContext)
  const [balance, setBalance] = useState(0)
  const [positive, setPositive] = useState(0)
  const [negative, setNegative] = useState(0)

  useEffect(() =>  {
    // Setting them to zero so they don't calc twice
    setBalance(b => 0)
    setPositive(p => 0)
    setNegative(n => 0)
    // Going through every transaction
    for (let tran of trans) {
      let money = tran.amount
      // Calculating balance
      setBalance(b => b + money)
      // Calculating Incomes and Expenses
      money > 0 ? setPositive(p => p + money) : setNegative(n => n + money)
    }
  }, [trans])


  return (
    <div>
      {balance}
      <div>Income: {positive}</div>
      <div>Expense: {negative}</div>
    </div>
  )
}

export default Balance