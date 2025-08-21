// JavaScript code for the expense tracker functionality

let expenses = [];
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addExpense);

function addExpense() {
    const expense = expenseInput.value;
    const amount = parseFloat(amountInput.value);

    if (expense && !isNaN(amount) && amount > 0) {
        expenses.push({ expense, amount });
        updateExpenseList();
        updateTotal();
        clearInputs();
    } else {
        alert('Please enter a valid expense and amount.');
    }
}

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.expense}: $${item.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

function updateTotal() {
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
}

function clearInputs() {
    expenseInput.value = '';
    amountInput.value = '';
}