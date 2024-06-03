import { Button } from "@chakra-ui/react";


function CounterDisplay({count, setCount}) {

    

    const increment = () => {
        setCount(count + 1);
    }
    
    return (
        <div>
            <h1>Counter : {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterDisplay;