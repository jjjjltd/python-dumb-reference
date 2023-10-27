export default function ListWords(props) {
    console.clear()
    let word_list = []
    word_list = props.word_list
    console.log(word_list)

    if (word_list) {
        Word_Extract(word_list)
    }

    return (
        <div>
            <h1>List Words.jsx</h1>
            <Word_Extract />
            
        </div>
    )
}

function Word_Extract (word_list) {
    console.log(word_list)
    const abc = ["alpha", "beta", "charlie", "delta", "echo"]

    abc.forEach((value, i)=>console.log("Random string:  " + value + " " + i))
    Array.prototype.forEach.call(word_list, (value, i) => console.log("Word string:  " + value + " " + i))   
    console.log(abc)
    
    return (
        <div className="words">
            {abc.map((value, i) =>{return (<h1>{value}</h1>)})}
            {Array.prototype.forEach.call(word_list, (value, i) => {return (<h1>{value}</h1>)})}
        </div>

    )
}   