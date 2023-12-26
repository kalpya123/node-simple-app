const express = require('express')
var uniqid = require('uniqid'); 
const app = express()

app.get('/Docker', function (req, res) {
  res.status(200).json({"data":[{
    "id":uniqid(),  
    "name":generateRandomName(),
  }]})
})

function generateRandomName() {
    // Create an array of first names
    const firstNames = ["Alice", "Bob", "Carol"];
  
    // Create an array of last names
    const lastNames = ["Smith", "Jones", "Williams"];
  
    // Generate a random index for the first name array
    const firstNameIndex = Math.floor(Math.random() * firstNames.length);
  
    // Generate a random index for the last name array
    const lastNameIndex = Math.floor(Math.random() * lastNames.length);
  
    // Return a random name
    return firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
  }
  

app.listen(3000,() => {
    console.log("Server running on 3000")
})