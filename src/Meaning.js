import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>{props.meaning.definitions[0].definition}</p>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
