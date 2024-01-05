import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses}) => {
  return (
    <div>
      {expenses.map((item)=> (
      <ExpenseItem 
      key={item.id} 
      title={item.title} 
      amount={item.amount} 
      date={item.date} /> ))}
    </div>
  )
}

export default ExpenseList
