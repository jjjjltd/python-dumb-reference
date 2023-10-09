

export default function MyButton3() {
    
    function counter () {
        const [count_shared, setCount] = useState(0);
    
        function handleClick3() {
          setCount(count_shared + 1);
        }  
    
    }

    return (
      <div>
        <p>Count shared {count_shared}</p>
        <button onClick={onClick}>
          Clicked {count_shared} times
        </button>
        </div>
    );
  }