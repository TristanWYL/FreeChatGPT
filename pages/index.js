import Head from "next/head";
import { Appbar } from "./components/Appbar";
import { Input } from "./components/Input";
import { Line, LoadingSkeleton } from "./components/Line";
import { ScrollToBottom } from "./components/ScrollToBottom";
import { useChatProps } from "./utils/useChatProps";
import React, { useRef } from "react";
import { Tips } from "./components/Tips";

export default function Home() {
  const { loading, fullConversation, onSubmit, prompt, setPrompt } =
    useChatProps();
  const inputRef = useRef();
  return (
    <>
      <Head>
        <title>Tristan's Chatbot</title>
        <link rel="icon" href="/chatgpt.png" />
      </Head>
      <main
        style={{
          maxWidth: "600px",
          margin: "auto",
          width: "100%",
          marginBottom: "80px",
        }}
      >
        <Appbar />
        <Tips />
        {/* <SocialPanel /> */}
        {fullConversation.map((line, index) => (
          <Line key={index} {...line} />
        ))}
        {loading && <LoadingSkeleton />}
      </main>
      <ScrollToBottom />
      <Input
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        loading={loading}
        ref={inputRef}
      />
    </>
  );
}
