let counter = 0;
function  StateChange(){
    counter = counter + 1;
}
return (
    <>
    <h2>Count : {counter}</h2>
    <button onClick={StateChange}>Click</button>
    </>
)

export default StateChange