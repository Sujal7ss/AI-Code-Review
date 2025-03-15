import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-jsx";
// import "prismjs/components/prism-python"
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}
  `);

  const [response, setResponse] = useState("");
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", { code })
    setResponse(response.data)
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                width: "100%",
                height: "100%",
                overflow: "auto",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "black",
              }}
            ></Editor>
          </div>
          <div onClick={reviewCode} className="review_button">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown>{response}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
