import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field onChange={setText} />
      <h3>Hi there! How are you</h3>
      <Languages language={language} onLanguageChange={setLanguage} />
      <Translate text={text} language={language} />
    </div>
  );
}
