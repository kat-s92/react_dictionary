import "./Meaning";
import React from "react";
import "./Meaning.css"


export default function Meaning(props){
  return (
  <div className="MeaningPar">
  <h3 className="MeaningPartOfSpeech">
    {props.meaning.partOfSpeech}
  </h3>
<p>
  {props.meaning.definitions[0].definition}
  {props.meaning.phonetic}
</p>
  </div>
)
}
