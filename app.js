const form = document.querySelector("#expenseForm")
const amountInput = document.querySelector("#amount")

function handleAddExpense(e){
    e.preventDefault()
    const amount = Number(amountInput.value)
    console.log(amount)
    console.log(typeof amount)

    const item = document.createElement("li")
    item.textContent = amount + " satang"
    const expenseList = document.querySelector("#expenseList")
    expenseList.appendChild(item)

}

form.addEventListener("submit", handleAddExpense)
