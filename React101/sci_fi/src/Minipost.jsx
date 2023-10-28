import {useState} from 'react';
import axios from 'axios';

export default function Minipost(props) {

    const [word_list, setWord_List] = useState(["1", "2", 3])
    let send = "This is a short list of words with most of the vowels."

    axios.post('/genwords', send, {
        headers: {
        'Content-Type': 'application/json',
        }
    }).then(res => {
        setWord_List(word_list = res.data)     
    }).catch(err=>console.log("Error found:  " + err))

    console.log(word_list)
    console.log(typeof(word_list))

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )

}