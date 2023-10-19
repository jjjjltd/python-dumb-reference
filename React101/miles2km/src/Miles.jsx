import { useState } from 'react';



export default function Miles () {

    const [miles, setMiles] = useState(94);

    return (
        <div>
            <h1>Miles to convert {miles}</h1>
            <input name="miles" 
            type="number" 
            className="milesinput"
            value={miles}
            onChange={((e) => setMiles(e.target.value))}>

            </input>
            <label  className="miles" value={miles}>Miles</label>
        </div>
    )
}