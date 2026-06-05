import './App.css'
function Hello(){

    function getName(yourname){
        return yourname;
    }

    function handleClick(){
        alert("Button clicked.")
    }
    

        const handleInput = (event)=>
            {
                console.log(clear)
                console.log(event.target.value)
            }
        const name = "YahooBaba"
        const name1 = "Sanchit"

        const handleMouseOver =() =>console.log("This is Mouse over" )
        const handleDoubleClick = ()=> console.log("This is Double Click")
        
    return(
        <>
            <h1> Hello {getName(name)}</h1>
            <h2 >By {getName(name1)}</h2>
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}> Silver Oak University </p>
            <button onClick={handleClick}>Click Me </button>
            <button onClick={()=> alert("Hello From Inline Function")}>Say Hello</button>
            <br />
            <input type="text" onChange={handleInput} placeholder="Type something" />
        </>
    )
    
}
export default Hello