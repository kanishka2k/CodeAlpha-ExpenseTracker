let expenses =[];
let totalAmount = 0;

const categoryInput = document.getElementById('category')
const amountInput = document.getElementById('amount')
const dateInput = document.getElementById('date')
const addBtn = document.getElementById('add-btn')
const expTable = document.getElementById('exp-table')
const totalAmt = document.getElementById('total-amt')

addBtn.addEventListener('click', function(){
    const category = categoryInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ''){
         alert('Please pick a category');
         return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('Please input a valid amount');
        return;
    }
    if (date === ''){
        alert('Please select a date');
        return;
    }

    const expense = {category, amount, date};
    expenses.push(expense);

    totalAmount += amount;
    totalAmt.textContent=totalAmount;

    const newRow = expTable.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        const index = expenses.indexOf(expense);
        if (index !== -1) {
            totalAmount -= expenses[index].amount;
            totalAmt.textContent = totalAmount;
            expenses.splice(index, 1);
            expTable.deleteRow(index + 1); // +1 to account for the table header row
        }
    });
    categoryCell.textContent= expense.category;
    amountCell.textContent= expense.amount;
    dateCell.textContent= expense.date;
    deleteCell.appendChild(deleteBtn);

})