import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Line = ({ role, words, error }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        background: role === "AI" ? "#202123" : "#343541",
        borderRadius: "4px",
        margin: "4px auto",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: role === "AI" ? "4px" : "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: role === "AI" ? undefined : "#202123",
          color: "white",
          margin: "8px",
        }}
      >
        {role === "AI" ? <img src="chatgpt.png" /> : <p>Y</p>}
      </div>
      <div
        style={{
          border: `1px solid ${error ? "red" : "transparent"}`,
          borderRadius: "6px",
          width: "100%",
          minHeight: "30px",
          background: `${error ? "#554652" : undefined}`,
          padding: `${error ? "0px 12px" : undefined}`,
          color: "white",
        }}
      >
        <ReactMarkdown children={words} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export const LoadingSkeleton = () => {
  const [words, setWords] = React.useState(".");
  React.useEffect(() => {
    const timer = setInterval(() => {
      setWords((pre) => {
        if (pre.length === 6) {
          return ".";
        } else {
          return pre + ".";
        }
      });
    }, 600);
    return () => clearInterval(timer);
  }, []);
  return <Line {...{ role: "AI", words }} />;
};
