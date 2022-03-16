import React, { useEffect } from 'react'
import './App.css'
import Child from './child'

const App = () => {
    const [count, setcount] = React.useState(0);

    const Increment = () => {
        setcount(count + 1);
    }

    useEffect(() => {
        console.log("Render from parent component");
    })


    return (

        <div>
            <div className="Data">
                <h2 className="heading">Age<i class="fa-solid fa-equals"></i></h2>
                <h2 className="number">{count}</h2>
            </div>
            <button onClick={Increment} className="Btn">Click Here</button>

            <Child />
        </div>
    )

}

export default React.memo(App);
