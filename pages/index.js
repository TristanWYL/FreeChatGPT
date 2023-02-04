import Head from "next/head";
import { Appbar } from "./components/Appbar";
import { Input } from "./components/Input";
import { Line, LoadingSkeleton } from "./components/Line";
import { useChatProps } from "./utils/useChatProps";

export default function Home() {
  const { loading, conversation, onSubmit, prompt, setPrompt } = useChatProps();
  return (
    <div>
      <Head>
        <title>Tristan's Chatbot</title>
        <link rel="icon" href="/doraemon.jpg" />
      </Head>

      <main>
        <Appbar />
        {conversation.map((line) => (
          <Line line={line} />
        ))}
        {loading && <LoadingSkeleton />}
        <Input prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} />
      </main>
    </div>
  );
}
