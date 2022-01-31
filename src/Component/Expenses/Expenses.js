import React , { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expenses= (props) => {
   const [filteredYear, setFilteredYear] = useState('2022');

   const filterChangedHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
     
   }

   const filteredExpenses = props.items.filter((expense) =>{
      return expense.date.getFullYear().toString() === filteredYear;
   });
   return (
      <div>
         <Card className="expenses">
            <ExpenseFilter 
                  selectedYear={filteredYear} 
                  onSelectedYear={filterChangedHandler} 
                  onSelectChange={filteredExpenses}
            />
               <ExpenseChart expenses={filteredExpenses}/>
              <ExpenseList items={filteredExpenses} />
              
        </Card>

        
    </div>
   )
}

export default Expenses;