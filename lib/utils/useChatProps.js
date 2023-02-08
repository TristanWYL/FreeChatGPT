import React from "react";

const conversation = [];
const fullConversation = [];
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
    conversation.push({ role: "Human", words: prompt });
    fullConversation.push({ role: "Human", words: prompt });
    setLoading(true);
    setPrompt("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt:
            conversation
              .slice(-3)
              .map((speech) => `${speech.role}:${speech.words}`)
              .join("\n\n") + "\nAI:",
        }),
      });

      if (response.status === 504) {
        console.log(response);
        throw new Error(
          `We are using a free plan of Vercel, so any requests will time out in 5 seconds!`
        );
      }
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      conversation.push({ role: "AI", words: data.result });
      fullConversation.push({ role: "AI", words: data.result });
    } catch (error) {
      conversation.pop();
      fullConversation.push({ role: "AI", words: error.message, error: true });
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    conversation,
    fullConversation,
    onSubmit,
    prompt,
    setPrompt,
  };
};
