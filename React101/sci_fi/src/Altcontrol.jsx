import React, {useEffect, useState} from 'react'
import endPoints from './api';

export default function Altcontrols() {
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
        <div className="mapcontrols">
            <table>
                <tr>
                {controls.map((control) => (
                    <>
                    <td>Max Length</td>
                    <td>{controls.maxwordlen}</td>
                    </>
                ))}
                </tr>
            </table>

            ))


        </div>
    )

}