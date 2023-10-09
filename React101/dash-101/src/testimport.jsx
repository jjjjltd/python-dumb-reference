export default function Testjsx (props) {
    return (
    <div>
        <h2>Proof of import from testimport.jsx</h2>
        <p>Notes:</p>
            <ul>
                <li>Required export default on function header.</li>
                <li>Got a reminder to be careful of capitalisation!!!  <b>t</b>estjsx function name did not work.</li>
            </ul>
        <p>Example of "props" parameter passing:  First name: {props.firstname}, surname: {props.lastname}.</p>
    </div>
    )
}