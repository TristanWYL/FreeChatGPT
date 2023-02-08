import { SocialIcon } from "react-social-icons";

export const SocialPanel = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        position: "fixed",
        top: "20px",
        left: "20px",
      }}
    >
      <SocialIcon url="https://twitter.com/Tristan06916464" fgColor="white" />
      <SocialIcon
        url="https://github.com/TristanWYL/FreeChatGPT"
        fgColor="white"
        bgColor="#444"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/yulong-wu/"
        fgColor="white"
      />
    </div>
  );
};
