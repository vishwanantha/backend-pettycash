import ExpenseModel from "../model/ExpenseModel.js"





const addExpense = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const income = ExpenseModel({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        console.log(income)
        await income.save()
        res.status(200).json({message: 'Expense Added'})
      
    } catch (error) {
    console.log(error)
        res.status(500).json({message: 'Server Error'})
    }

    
}

const getExpense = async (req, res) =>{
    try {
        const incomes = await ExpenseModel.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
       res.status(500).json({message: 'Server Error'})
    }
}

const deleteExpense = async (req, res) =>{
   const {id} = req.params;
    ExpenseModel.findByIdAndDelete(id)
        .then((income) =>{
           res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            //res.status(500).json({message: 'Server Error'})
        })
}
export default {addExpense,getExpense,deleteExpense}