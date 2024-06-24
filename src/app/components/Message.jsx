import React, { useState } from "react";
import format from "date-fns/format";
import Image from "next/image";

const Message = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      {message.createdAt && (
        <div className={"my-2 p-4 flex flex-col rounded-2xl " + (message.isMe ? " self-end bg-primary text-white" : " bg-background-secondary w-fit text-text-primary dark:bg-background-secondary-dark dark:text-text-primary-dark")}>
          <div className={"flex flex-row" + (message.isMe ? " justify-end" : "")}>

            <div className="flex items-start break-all whitespace-pre-wrap">
              {message.text}
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default Message;
