import { useState, useEffect } from 'react';



export default function Miles () {

    const [miles, setMiles] = useState(0);

    return (
        <div>
            <input name="miles" type="number" className="milesinput"></input>
            <label  className="miles" value={miles}>Miles</label>
        </div>
    )
}