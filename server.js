const express = require("express")


const app = express()
const port = 3000


// Express Routes
const fruitsRouter = require("./Routes/Fruits.Route")
app.use("/Fruits.Route", fruitsRouter)

const UsersRouter = require("./Routes/Users.Route")
app.use("/Users.Route", UsersRouter)


  
    


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
