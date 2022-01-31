// import ExpenseItem from './Component/ExpenseItem/ExpenseItem';
import React,{ useState } from 'react';
import Expense from '../src/Component/Expenses/Expenses';
import NewExpense from '../src/Component/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id:'e1', title:"Toilet Paper",amount:94.12,date: new Date(2021,7,14)},
  {id:'e2', title:"New TV",amount:799.49,date: new Date(2020,2,12)},
  {id:'e3', title:"Car Insurance",amount:294.67,date: new Date(2019,4,28)},
  {id:'e4', title:"New Desk (Wooden)",amount:450,date: new Date(2021,5,12)}
];


function App() {
  const [expenseData, setExpenseData] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler =(expense) =>{
    setExpenseData( (prevExpense) => {
      return [ expense, ...prevExpense ]
      });
    }
  return (
    <div>
       <NewExpense onAddExpense={(expense) => addExpenseHandler(expense)}/>
       <Expense items={expenseData}/>            
    </div>
  );
}

export default App;
