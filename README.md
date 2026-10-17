# Tiny Finance Engine

## 1. Project Description

Tiny Finance Engine is a small JavaScript program that tracks expenses and calculates how much money is left. All amounts use satang: 100 satang equals 1 baht.

## 2. Features

- `addNewExpense`: Add a new expense without changing the original array.
- `deleteExpense`: Remove an expense by its ID without changing the original array. If the ID is not found, all expenses stay in the list.
- `totalExpense`: Add up all expense amounts. An empty list gives a total of 0.
- `calculateRemainingBalance`: Subtract total expenses from the balance. A negative result means you spent more than your balance.

## 3. How to Run

Install Node.js, then open a terminal in the `tiny_finance_engine` folder and run:

```sh
node finance_Engine.js
```

The current examples print:

```text
6000
4000
Invalid amount
Duplicate expense ID
```

This means the total expenses are 6000 satang and the remaining balance is 4000 satang. The last two messages come from tests that use invalid expenses on purpose.

## 4. Validation

When adding a new expense, `addNewExpense` rejects:

- Negative amounts, such as `-500`.
- Decimal amounts, such as `10.5`, because satang must be a whole number.
- Values that are not numbers, such as `"500"`, `null`, or a missing amount.
- `NaN`, `Infinity`, and numbers outside JavaScript's safe integer range.
- An expense ID that is already in the list.

Zero is allowed. The other three functions do not check for invalid inputs yet.


