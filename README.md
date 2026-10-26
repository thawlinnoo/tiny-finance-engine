# Tiny Finance Engine

A small JavaScript project for tracking expenses. Amounts use satang: **100 satang = 1 baht**.

## Try the Web Page

1. Open `index.html` in your browser.
2. Enter an expense amount in satang.
3. Click **Add Expense** to add it to the list.

The page currently only lists expenses. Refreshing the page clears the list.

## Run the Finance Examples

Install Node.js, open a terminal in the `tiny_finance_engine` folder, and run:

```sh
node finance_Engine.js
```

The examples add and delete expenses, calculate the total, and check the remaining balance. They print:

```text
6000
4000
Invalid amount
Duplicate expense ID
```

The last two messages are expected checks for invalid data.

## Project Files

- `index.html`: The expense form and list.
- `app.js`: Adds amounts from the form to the page.
- `finance_Engine.js`: Separate finance functions and example checks. It rejects invalid amounts and duplicate IDs when adding expenses.


