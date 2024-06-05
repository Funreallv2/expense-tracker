import React, { useContext } from 'react'
import { TransContext } from './ExpenseTracker'

function History() {
  const { trans, removeFromTrans } = useContext(TransContext)

  return (
    <div style={{display: "grid", placeItems: "center", gap: "2rem"}}>
      {trans.map((tran) => 
        <div key={tran.id}>
          <button onClick={() => removeFromTrans(tran.id)}>X</button>
          <div>{tran.desc}</div>
          <div>{tran.amount}</div>
        </div>
      )}
    </div>
  )
}

export default History