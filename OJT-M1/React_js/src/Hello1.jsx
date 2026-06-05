import './App.css'

function Hello1(){
    const isLoggedIn = false;
    
    return(
        <div>
            {
                isLoggedIn ? <h1>Welcome User!</h1> : <h2>Please Login</h2>
            }
        </div>
    )
}
export default Hello1