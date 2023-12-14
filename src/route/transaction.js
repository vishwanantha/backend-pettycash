import add  from '../controller/income.js'
import adde from '../controller/expense.js'
import express from 'express'
const router=express.Router()



router.post('/add-income',add.addIncome)
.get('/get-incomes',add. getIncomes)
.delete('/delete-income/:id',add. deleteIncome)
   .post('/add-expense',adde. addExpense)
    .get('/get-expenses',adde. getExpense)
    .delete('/delete-expense/:id',adde.deleteExpense)
  
export default router