import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Controls() {
    let [controls, setControls] = useState("");
    let [db_on, setDb_On] = useState("False");

    // Render the screen - one TimeRanges.
    useEffect(() => {
        loadControl()
    }, [])

const loadControl = async () => {
    const data = await endPoints.control();
    setControls(controls=data);

    setDb_On(controls["db_on"] ? db_on = "True": db_on = "False")
}

    return (
        <div className="ctlheader">
                    <h1>Word Controls</h1>
            <div className="controls">
                <table>
                    <tbody>                    
                        <tr>
                            <td className="ctlh">Max length id="mlt"</td>
                            <td><input className="ctl" type="number" placeholder={controls["maxwordlen"]} id="ml"/></td>
                            <td className="ctlh">Min length id = "mint"</td>
                            <td><input className="ctl"type="number" placeholder={controls["minwordlen"]} id="min"/></td>
                            <td className="ctlh" id="mvt" >Min vowels</td>
                            <td><input  className="ctl" type="number" placeholder={controls["minvowels"]} id="mv"/></td>
                            <td className="ctlh" id="wct">Word count</td>
                            <td><input  className="ctl"type="number" placeholder={controls["numwords"]} id="wc"/></td>
                            <td className="ctlh" id="dbt">DB On</td>
                            <td><input  className="ctl"type="text" placeholder={db_on} id="db"/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}