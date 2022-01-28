// Q1.The table with id="age-table"
const table = document.getElementById("age-table")

// Q2.All label elements inside that table (there should be 3 of them).
const label = table.querySelectorAll("label")

// Q3.The first td in that table (with the word “Age”).
const td = table.querySelector("td")

// Q.4The form with name="search".
const form = document.querySelector('form[name="search"]')

// Q.5The first input in that form.
const firstInput = form.querySelector('input')

// Q.6The last input in that form.
const allFormInputs = form.querySelectorAll('input') 
const lastInput = allFormInputs[allFormInputs.length-1]