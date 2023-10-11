import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Controls() {
    let [controls, setControls] = useState("");

    useEffect(() => {
        console.log("Controls.jsx rendered");
        loadControl()
    }, [])

const loadControl = async () => {
    const data = await endPoints.control();
    console.log(data)
    setControls(controls=data)
    console.log(controls)
}

    return (
        <div>
            <h2>Placeholder for control variables, only</h2>
            <p>Controls {controls["control1"]} </p>
        </div>
    )
}