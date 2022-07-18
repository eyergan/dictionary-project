import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="definition">
        {props.meaning.definitions[0].definition}
      </div>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
