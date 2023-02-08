import { SendIcon } from "../icons/SendIcon";
import React from "react";

export const Input = React.forwardRef(
  ({ prompt, setPrompt, onSubmit, loading }, ref) => {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          maxWidth: "600px",
          width: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          ref={ref}
          style={{
            width: "100%",
            background: "#444654",
            display: "flex",
            padding: "8px",
            borderRadius: "4px",
            alignItems: "center",
          }}
        >
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                event.preventDefault();
                !loading && onSubmit(event);
              }
            }}
          ></textarea>
          <div
            type="submit"
            value="Submit"
            className="send-icon"
            onClick={(event) => {
              if (loading) {
                return;
              }
              onSubmit(event);
            }}
          >
            <SendIcon />
          </div>
        </div>
      </div>
    );
  }
);
