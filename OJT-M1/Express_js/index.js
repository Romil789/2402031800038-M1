const express = require('express');
const app = express()


app.set('view engine', 'ejs')



app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.send(
        ["banana", "mango"]
    )
})


app.get('/', (req, res) => {
        res.send({
                name: "Romil",
                age: 20
            })
        })
        
        
        

app.get('/', (req, res) => {
    res.json(
        {
            name: "Romil", Age: 20
        }
    )
})




app.get('/', (req, res) => {
    const users = [
        {id: 1 , name: "Romil"},
        {id: 2 , name: "Dev"}
    ]
    
    
    res.json(users)
})


    app.get('/user/:userid-:bookid', (req, res) => {
    res.send(req.params)
})

app.get('/search', (req, res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`Search result for Name: ${name}, Age : ${age}`)
    res.send(req.query)
})

app.get('/about', (req, res) => {
    res.redirect('/user');
})



app.get('/user', (req, res) => {
    res.render('user')
})

