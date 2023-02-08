import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Tips = () => {
  const words = `## 简介
* 项目动机：方便大家免登录免VPN使用ChatGPT
* 如果等待时间太长，可能是由于使用人数太多，openai的频限是60次/分
* 本项目用爱发电，源码[在此](https://github.com/TristanWYL/FreeChatGPT)，欢迎follow/star/fork/contribute`;

  return (
    <div style={{ color: "white" }}>
      <ReactMarkdown children={words} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
