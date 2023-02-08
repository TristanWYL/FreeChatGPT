import React from "react";

export const ScrollToBottom = ({ dependencies }) => {
  const divRef = React.useRef(null);
  React.useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, dependencies);
  return <div ref={divRef} />;
};
