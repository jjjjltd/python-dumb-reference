import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Minipost(props) {

    const [word_list, setWord_List] = useState(["abc", "def", "ghi", 4])
    let send =  {}
    send['words'] = "This is a short list of words with most of the vowels."
    
    useEffect (() => {

        axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
        
        axios.post('/genwords', send, {
            headers: {
            'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res.data)
            setWord_List(res.data)     
        }).catch(err=>console.log("Error found:  " + err))

    }, [send['words']])

    console.log(word_list)
    console.log(typeof(word_list))

    return (
        <div>
            <h1>Hello</h1>
                <ol>
                    {word_list.map((word, i) => {return (<li key={i}>{word}</li>)})}
                </ol>
        </div>
    )

}