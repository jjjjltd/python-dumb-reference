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
            <div>
                <table>
                    <tbody>                    
                        <tr>
                            <td className="ctlh"  name="mlt">Max length</td>
                            <td><input className="ctl" type="number" placeholder={controls["maxwordlen"]} name="ml"/></td>
                            <td className="ctlh" name = "mint">Min length</td>
                            <td><input className="ctl"type="number" placeholder={controls["minwordlen"]} name="min"/></td>
                            <td className="ctlh" name="mvt" >Min vowels</td>
                            <td><input  className="ctl" type="number" placeholder={controls["minvowels"]} name="mv"/></td>
                            <td className="ctlh" name="wct">Word count</td>
                            <td><input  className="ctl"type="number" placeholder={controls["numwords"]} name="wc"/></td>
                            <td className="ctlh" name="dbt">DB On</td>
                            <td><input  className="ctl"type="text" placeholder={db_on} id="db"/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}