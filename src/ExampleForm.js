import React, {
    useState
} from "react";

function Testform() {

    const [val, setVal] = useState('Val');
    const [color, setColor] = useState('green');


    const colorChooser = () => {
        let colors = ['blue', 'green', 'red', 'yellow', 'orange'];
        let color = colors[Math.floor(Math.random() * colors.length)];
        setColor(color);
    }

    const style = {
        backgroundColor: color
    }

    return (
        <div style={style}>

            <h2> {val} </h2>

            <input onChange={(e) => { setVal(e.target.value) }} />
            <button onClick={colorChooser}>colorchange</button>


        </div>
    )
}

export default Testform;