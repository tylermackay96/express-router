const express = require("express")
const router = express.Router()

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
router.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(users);
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

