import { useRef,useState } from "react";
const UseRef=()=>{
    const [count,setCount]=useState(0)
    const refCount=useRef(0)

    const Increment =()=>{
        setCount(count+1)
        refCount.current++;

        console.log('state: ',count);
        console.log('Ref',refCount.current);
    }
    return(
        <div>
            <h1>Count: {refCount.current}</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}
export default UseRef