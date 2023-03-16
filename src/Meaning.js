// import "./Meaning";
import React from "react";
import "./Meaning.css"


export default function Meaning(props){
  console.log(props.meaning.definitions[0])

  if (props.meaning.definitions[0].example)

{  return (
  <div className="MeaningPar">
  <h3 class="mtn" className="MeaningPartOfSpeech">
    {props.meaning.partOfSpeech}
  </h3>
<p>
  {props.meaning.definitions[0].definition}
</p>
<h3>Example:</h3>
<p>
{props.meaning.definitions[0].example}</p>
  </div>
)}
else {
  (
    <div className="MeaningPar">
    <h3 class="mtn" className="MeaningPartOfSpeech">
      {props.meaning.partOfSpeech}
    </h3>
  <p>
    {props.meaning.definitions[0].definition}
  </p>
    </div>
  )
}
}
