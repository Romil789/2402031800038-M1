import { BrowserRouter, Routes, Route, Link, useParams} from "react-router"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Phone from './Phone'
import Laptop from './Laptop'
function App() {

  function User(){
    console.log(useParams())
    const { id } = useParams()
    return <h2>User Profile for Id : { id }</h2>
  }

  function NotFound(){
    return <h2>404 user Not Found</h2>
  }

  return (
    <BrowserRouter>

    <h1>React Router Example</h1>
      {/* <a href="/" >Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/Contact">Contact</Link> | 
        <Link to="/user/10">User</Link> |
        <Link to="/products">Products</Link>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/user/:id" element={<User />}/>
        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} /> 
          <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
