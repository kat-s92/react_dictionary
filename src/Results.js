import "./Results"
import React from "react";
import Meaning from "./Meaning"
import "./Results.css"

export default function Results(props) {

  if (props.results)
  // by default there is nothing in Results, it's empty
  {
    return <div className="Results">
      <h3 className="SearchWord">{props.results.word}
      </h3>
      <small>{props.results.phonetic}</small>
  {props.results.meanings.map(function(meaning, index)
  // looping thro meanings with .map
  // return meaning.definitions[0].definition;
  {
    return (
      <div key={index}>
      <Meaning meaning={meaning} />
    </div>
  );
  })}
    </div>;
  } else { return null }
}
