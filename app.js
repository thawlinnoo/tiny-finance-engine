const form = document.querySelector("#expenseForm")
const button = document.querySelector("#loadExpensesBtn")
const amountInput = document.querySelector("#amount")
const expenseList = document.querySelector("#expenseList")
const savedExpenses = localStorage.getItem("expenses")
let expenses = []

try {
    expenses = savedExpenses
    ? JSON.parse(savedExpenses)
    : [];
    if (!Array.isArray(expenses)) {
        expenses = []
    }
} catch(error) {
    expenses=[]
    console.log(error.message)
}


expenses.forEach((expense)=>{
    const item = document.createElement("li")
    item.textContent = expense.amountSatang + " satang"
    expenseList.appendChild(item)
})

function handleAddExpense(e){
    e.preventDefault()
    const amount = Number(amountInput.value)
    const expense = {
        id: Date.now(),
        amountSatang: amount
    }
    expenses.push(expense)
    localStorage.setItem("expenses", JSON.stringify(expenses))

    console.log(amount)
    console.log(typeof amount)

    const item = document.createElement("li")
    item.textContent = amount + " satang"
    expenseList.appendChild(item)

}


function loadMockExpenses(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                { id: 1, amountSatang: 2500 },
                { id: 2, amountSatang: 1500 }
            ])
        }, 2000)
    })
}


function loadMockExpenseFailure(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject((new Error("Failed to load expenses")))
        }, 2000)
    })
}

function loadMockEmptyExpenses(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([])
        }, 2000)
    })
}

async function showExpense(e){
    e.preventDefault()
    const status = document.querySelector("#loadStatus")
    const expenseList = document.querySelector("#expenseList")
    try{
        status.textContent = "loading..."
        const expenses = await loadMockExpenses()
        if (expenses.length == 0){
            status.textContent = "No expenses found."
        } else {
            expenses.forEach((expense)=>{
            const item = document.createElement("li")
            item.textContent = expense.amountSatang + " satang" 
            expenseList.appendChild(item)
            })
            status.textContent = "Expenses loaded."

        }

    } catch (error){
        status.textContent = error.message
    }
}





button.addEventListener("click", showExpense)
form.addEventListener("submit", handleAddExpense)
