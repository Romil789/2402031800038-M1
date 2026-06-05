import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Home Page")
})
// app.get('/about', (req, res) => {
//     res.send("About Page")
// })

app.get('/about', (req, res) => {
    var users = [
        {name:"Romil Dobariya", age: 20, city:"Amreli"},
        {name:"Purvin Panasara", age: 20, city:"Rajkot"},
        {name:"Dev Gediya", age: 19, city:"Rajkot"},
        {name:"Vijay Prajapati", age: 19, city:"Ratanpur"},
        {name:"Dax Thalesa", age: 20, city:"Amreli"}
        
    ];
    res.render("about", {
        title: 'Home Page',
        message: "Welcome",
        items: users
    })
})

app.get('/form', (req, res) => {
    res.render('form', {message:null})
})

app.post('/submit',(req,res) =>{
    const name = req.body.myname
    
    const message = `hello, ${name} You submitted the form.`
    res.render('form', {message: message})
})


    app.listen(4000,() => {
    console.log("Server started successfully on port : 3000")
})