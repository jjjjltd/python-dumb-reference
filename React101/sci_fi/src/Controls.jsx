import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Controls() {
    let [controls, setControls] = useState("");


    // Render the screen - one TimeRanges.
    useEffect(() => {
        loadControl()
    }, [])

const loadControl = async () => {
    const data = await endPoints.control();
    setControls(controls=data);
}

    return (
        <div className="ctlheader">
                    <h1>Word Controls</h1>
                    <p>Value of maxwordlen {controls["maxwordlen"]}</p>
            <div>
                <table>
                    <tbody>                    
                        <tr>
                            <td className="ctlh"  name="mlt">Max length</td>
                            <td><input className="ctl" type="number" placeholder={controls["maxwordlen"]} name="ml" onChange={(e)=>setControls(controls["maxwordlen"]=e.target.value)}></input></td>
                            <td className="ctlh" name = "mint">Min length</td>
                            <td><input className="ctl"type="number" placeholder={controls["minwordlen"]} name="min" onChange={(e)=>setControls(controls["minwordlen"]=e.target.value)}></input></td>
                            <td className="ctlh" name="mvt" >Min vowels</td>
                            <td><input  className="ctl" type="number" placeholder={controls["minvowels"]} name="mv" onChange={(e)=>setControls(controls["minvowels"]=e.target.value)}/></td>
                            <td className="ctlh" name="wct">Word count</td>
                            <td><input  className="ctl"type="number" placeholder={controls["numwords"]} name="wc" onChange={(e)=>setControls(controls["minwords"]=e.target.value)}/></td>
                            <td className="ctlh" name="dbt">DB On</td>
                            <td><input  className="ctl"type="text" placeholder={controls["db_on"]} name="db" onChange={(e)=>setControls(controls["db_on"]=e.target.value)}/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}