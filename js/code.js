// Buttons
let btnPush = document.querySelector('#btnPush');
let btnDisplay = document.querySelector('#btnDisplay');
// Empty array
let users = [];
// Implementation
btnPush.addEventListener('click', (e)=>{
    e.preventDefault();
    // Fetch value from the input element
    let firstName = document.querySelector('#firstName');
    // Load name into an array
    users.push(firstName.value);
    firstName.value = "";
})
// Display
btnDisplay.addEventListener('click', (e)=> {
    e.preventDefault();
    console.clear();
    console.table(users);
    document.querySelector('#firstName').focus();
})