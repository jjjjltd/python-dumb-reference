export default function List_Words(props) {
    let word_list = []
    word_list = props.word_list
    console.log("List words in List_Words function" + word_list)
    console.log("Type of" + typeof(word_list))

    word_extract(word_list)

    function word_extract (word_list) {

        let start_word = true
        let word = []
        let words = []
        for (let i = 0; i < word_list.length; i++) {
            if (word_list[i] === '"') {
                start_word = true
                let j = 0
            }

            if (start_word) {
                if (word_list[i] != '"') {
                    word[j] = word_list[i];
                    j+=1
                } else {
                    start_word = false;
                    word[j] = ","
                    j = 0
                    words += word
                    word = []

                }

                
            }
    }
        
    return (
        <div>
            <h1>Something</h1>
            <h2>{props.word_list}</h2>
            
            props.dowords.forEach(function(word, i) {<h2>word</h2>})  
        </div>
    )
}