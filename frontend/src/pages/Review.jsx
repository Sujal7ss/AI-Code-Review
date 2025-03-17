import React, { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Review() {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }
    `);

  const [response, setResponse] = useState("Your Code Review Will Be Displayed Here");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const API_ENDPOINT = import.meta.REACT_APP_API_ENDPOINT || "http://localhost:3000"; 
  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post(`${API_ENDPOINT}/ai/get-review`, {
        code,
      });
      setResponse(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setResponse("An error occurred while reviewing the code.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
    <h2 className="m-auto text-center">Currently Only JavaScript Code is available</h2>
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
        <button
          onClick={reviewCode}
          className={`review_button`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Review"}
        </button>
      </div>
      <div className="right">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const language = className?.replace("language-", ""); // Extract language
              return !inline && language ? (
                <SyntaxHighlighter
                  style={materialDark}
                  language={language}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {response}
        </ReactMarkdown>
      </div>
    </main>
    </>
  );
}

export default Review;
