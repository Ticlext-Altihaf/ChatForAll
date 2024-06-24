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
        <div className="bg-background-secondary dark:bg-background-secondary-dark my-2 p-4 flex flex-col rounded-2xl w-full md:w-3/4 lg:w:2/3 xl:w-3/5 2xl:w-1/2">
          <div className={"flex flex-row" + (message.isMe ? " justify-end" : "")}>

            <div className="flex items-start break-all whitespace-pre-wrap">
              {message.text}
            </div>
          </div>
          <div className={"flex flex-row mt-2" + (message.isMe ? " justify-end" : "")} >
            <p className="flex items-center text-xs">
              {format(
                  message.createdAt,
                "MMMM d, hh:mm a"
              )}
            </p>

          </div>
        </div>
      )}
    </>
  );
};

export default Message;
