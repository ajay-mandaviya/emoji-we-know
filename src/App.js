import "./styles.css";
// import {emojiDictionary} from "emoji";
// import {emojiDictionary} from './emoji'
import {emojiDictionary} from './emoji'
import {useState} from 'react'
export default function App() {
  let emojiWeKnow = Object.keys(emojiDictionary)
  
  const [emojiMean, setEmojiMean] = useState("");
  
  
  const handleChange = (e) =>{
    let key = e.target.value
    let meaning  = emojiDictionary[key];
    setEmojiMean(meaning);
  }
  const handleClick = (emoji)=>{
    let mean   = emojiDictionary[emoji]
    setEmojiMean(mean)
  }
  return (
    <div className="App">
        <h1>Emoji Interpreter 😎</h1>
        <input placeholder = "enter emoji"  onChange = {handleChange}/>
        <h3>{emojiMean ? emojiMean : "Not found in out Dictionary"}</h3>
          {emojiWeKnow.map((emoji)=>{
              return <span key = {emoji} style={{padding: "1rem", fontSize: "2rem", cursor: "pointer"}}
                  // onClick = {handleClick(emoji)}
                  onClick = {()=> handleClick(emoji) }
                  >
                  {emoji}
              </span>
          })}
    </div>
  );
}
