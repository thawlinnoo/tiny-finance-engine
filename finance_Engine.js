const balanceSatang = 10000;

const expenses = [
  { id: 1, amountSatang: 2500 },
  { id: 2, amountSatang: 1500 },
  { id: 3, amountSatang: 3000 }
];

function addNewExpense(prev_expenses, new_expense){
    if (!Number.isSafeInteger(new_expense.amountSatang) || new_expense.amountSatang<0){
        throw new Error("Invalid amount")
    }
    if (prev_expenses.some(expense=>expense.id===new_expense.id)){
        throw new Error("Duplicate expense ID")
    }
    return [...prev_expenses, new_expense]
}

function deleteExpense(prev_expenses, idToDelete){  
    return prev_expenses.filter(expense=>expense.id!==idToDelete)
}

function totalExpense(prev_expenses){
    return prev_expenses.reduce((acc, current)=>acc+current.amountSatang, 0)
}

function calculateRemainingBalance(balanceSatang, totalExpense){
    return balanceSatang - totalExpense
}

const new_expense = {
    id: 4,
    amountSatang: 500
}

const new_expense2 = {
    id: 4,
    amountSatang: -500
}
try{
    const expenses_after_added = addNewExpense(expenses, new_expense)
    const expenses_after_deleted = deleteExpense(expenses_after_added, 2)
    const total_Expense = totalExpense(expenses_after_deleted)
    const calculate_RemainingBalance = calculateRemainingBalance(balanceSatang, total_Expense)

    console.assert(
    expenses_after_added.length === 4,
    "Adding an expense should produce 4 records"
    );

    console.assert(
    expenses_after_deleted[0].id === 1 && expenses_after_deleted[1].id === 3 && expenses_after_deleted[2].id === 4,
    "Expected to delete ID 2"
    );

    console.assert(
    total_Expense === 6000, 
    "total_expense is expected to be 6000"
    );

    console.assert(
    calculate_RemainingBalance === 4000, 
    "total_expense is expected to be 6000"
    );

    console.log(total_Expense)
    console.log(calculate_RemainingBalance)
} catch(error){
    console.log(error.message)
}

try {
    addNewExpense(expenses, new_expense2);
} catch (error) {
    console.log(error.message);
}

const notFoundResult = deleteExpense(expenses, 99);

console.assert(
  notFoundResult.length === expenses.length,
  "Nonexistent ID should not remove expenses"
);

try {
    addNewExpense(expenses, {
        id: 2,
        amountSatang: 800
    });
} catch (error) {
    console.log(error.message);
}