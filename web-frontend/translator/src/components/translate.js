import React, { useEffect, useState } from "react";
import axios from "axios";

function Translate({ language, text }) {
  const [translated] = useTranslation(text, language);

  return (
    <div className="translate">
      <label className="label">Output</label>
      <h1 className="title">{translated.replace("&#39;", "'")}</h1>
    </div>
  );
}

const useTranslation = (text, language) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();
    // const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
    // console.log(apiKey)
    const apiKey = "NOT NEEDED IN FRONT END"
    doTranslation(text, language, apiKey, cancelToken, setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return [translated];
};

const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce(
  async (input, languageCode, apiKey, cancelToken, callback) => {
    
    try {
    //   const { data } = await axios.post(
    //     "https://translation.googleapis.com/language/translate/v2/?key=" + apiKey,
    //     {
    //       q: input,
    //       target: languageCode
    //     },
    //     { cancelToken: cancelToken.token }
    //   );

      const { data } = await axios.get("http://localhost:5000/translate", {
        params: {
            text: input,
            targetLang: languageCode,
        }
      })

      callback(data.data.translations[0].translatedText);
    } catch (err) {
      callback("");
    }
  }
);

export default Translate;
