import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  let month = props.date.toLocaleString('en-US', { month: 'long' });
  let year = props.date.getFullYear();
  let day = props.date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description"></div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
};
export default ExpenseItem;
