import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'



const ExpenseItem = ({title,amount,date}) => {
  return (
    <div className='expense-item'>
      <div className='container-text_date'>
       <ExpenseDate date={date}/> 
        <h2>{title}</h2>
      </div>
      <div className='expense-itemdescription'>
        <div className='expense-itemprice'>${amount}</div>
      </div>
    </div>

  )
}

export default ExpenseItem
