import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Controls() {
    let [controls, setControls] = useState("");

    // Render the screen - one TimeRanges.
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
        <div className="ctlheader">
                    <h1>Word Controls</h1>
            <div class="controls">
                <table>
                    <tr>
                        <td class="ctlh">Max length</td>
                        <td><input class="ctl" type="number" placeholder={controls["maxwordlen"]}/></td>
                        <td class="ctlh">Min length</td>
                        <td><input class="ctl"type="number" placeholder={controls["minwordlen"]}/></td>
                        <td class="ctlh" >Min vowels</td>
                        <td><input  class="ctl" type="number" placeholder={controls["minvowels"]}/></td>
                        <td class="ctlh">Word count</td>
                        <td><input  class="ctl"type="number" placeholder={controls["numwords"]}/></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}