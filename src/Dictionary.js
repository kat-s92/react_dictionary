import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
let [searchWord, setSearchWord]= useState("");
let [results, setResults] = useState(null);
/* searchWord state to capture searched word*/
/* results state to capture results when search is returned, we need to track it for Results.js component*/

function handleResponse(response) {
  console.log(response.data[0].meanings[0].definitions[0].definition);
  setResults(response.data[0])
}
  function search(event){
  event.preventDefault();
  /* https://dictionaryapi.dev/ */
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
  axios.get(apiUrl).then(handleResponse)
}
function handleSearchWordChange(event) {
  /*Updates the State searchWord, every time someone searches a new word, we will store this word inside the State*/
  setSearchWord(event.target.value);
}
return(<div className="Dictionary">
  <form onSubmit={search}>
  <input type="search" autoFocus={true} onChange={handleSearchWordChange}/></form>
<Results results={results}/>
</div>);
}
