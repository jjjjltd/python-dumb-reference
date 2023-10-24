import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Controls( newcontrols ) {
    let [controls, setControls] = useState("");
    let [maxwordlen, setMaxwordlen] = useState(1)
    let [minwordlen, setMinwordlen] = useState(1)
    let [minvowels, setMinvowels] = useState(1)
    let [numwords, setNumwords] = useState(1)
    let [db_on, setDb_on] = useState(1)

    


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
                    <h2>Value of maxwordlen {maxwordlen}</h2>
            <div>
                <table>
                    <tbody>                    
                        <tr>
                            <td className="ctlh"  name="mlt">Max length</td>
                            <td><input className="ctl" type="number" placeholder={controls["maxwordlen"]} name="ml" onChange={(e)=>setMaxwordlen(maxwordlen=e.target.value)}></input></td>
                            <td className="ctlh" name = "mint">Min length</td>
                            <td><input className="ctl"type="number" placeholder={controls["minwordlen"]} name="min" onChange={(e)=>setMinwordlen(minwordlen=e.target.value)}></input></td>
                            <td className="ctlh" name="mvt" >Min vowels</td>
                            <td><input  className="ctl" type="number" placeholder={controls["minvowels"]} name="mv" onChange={(e)=>setMinvowels(minvowels=e.target.value)}/></td>
                            <td className="ctlh" name="wct">Word count</td>
                            <td><input  className="ctl"type="number" placeholder={controls["numwords"]} name="wc" onChange={(e)=>setNumwords(numwords=e.target.value)}/></td>
                            <td className="ctlh" name="dbt">DB On</td>
                            <td><input  className="ctl"type="text" placeholder={controls["db_on"]} name="db" onChange={(e)=>setDb_on(db_on=e.target.value)}/></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}