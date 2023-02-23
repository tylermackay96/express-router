const express = require("express")
const router = express.Router()

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]



router.get("/", (req, res) => {
    res.json(fruits)
})

router.get("/:id", (req, res) => {
    const fruit = fruits[req.params.id - 1]
    res.json(fruit)
})

// Create a new fruit
router.post('/fruits', (req, res) => {
    const newFruit = req.body;
    fruits.push(newFruit);
    res.json(fruits);
  });
  
  // Update an existing fruit
  router.put('/fruits/:id', (req, res) => {
    const id = req.params.id;
    const updatedFruit = req.body;
    fruits[id - 1] = updatedFruit;
    res.json(fruits);
  });
  
  // Delete an existing fruit
  router.delete('/fruits/:id', (req, res) => {
    const id = req.params.id;
    fruits.splice(id - 1, 1);
    res.json(fruits);
  });
  

module.exports = router



