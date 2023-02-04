import React from "react";

const conversation = [];
export const useChatProps = () => {
  const [prompt, setPrompt] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    let question = prompt.trim();
    if (question.length == 0) {
      alert("Please enter your question!");
      return;
    }
    conversation.push("Human:" + prompt);
    setLoading(true);
    setPrompt("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: conversation.slice(-3).join("\n\n") + "\nAI:",
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      conversation.push("AI:" + data.result);
    } catch (error) {
      conversation.pop();
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    conversation,
    onSubmit,
    prompt,
    setPrompt,
  };
};
