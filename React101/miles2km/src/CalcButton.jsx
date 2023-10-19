function handleClick3() {
    alert('I have been clicked.')
}

export default function CalcButton () {
    return (
        <div>
            <button className="Button" onClick={handleClick3}>Calculate</button>
        </div>
    )
}