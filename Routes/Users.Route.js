const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator");

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]



router.get("/", (req, res) => {
    res.json(users)
})

router.get("/:id", (req, res) => {
    const user = users[req.params.id - 1]
    res.json(user)
})

// Create a new user
usersRouter.post("/", [
    check("name", "Name is required").trim().not().isEmpty(),
  ], (req, res) => {
    // Validate the request object
    const errors = validationResult(req);
    // If there are errors, respond with the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }
       // If there are no errors, create a new user and respond with the updated list of users
    const newUser = { name: req.body.name }; // Example code to create a new user
    const allUsers = [{ name: "John" }, { name: "Jane" }, newUser]; // Example code to get the list of all users
    res.json(allUsers);
  });
  
  // Update an existing user
  router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    users[id - 1] = updatedUser;
    res.json(users);
  });
  
  // Delete an existing user
  router.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id - 1, 1);
    res.json(users);
  });
  

module.exports = router

