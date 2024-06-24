import React, {useState} from "react";
import Markdown from "react-markdown";

const Message = ({message}) => {
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
                <div
                    className={"my-2 p-4 flex flex-col rounded-2xl " + (message.isMe ? " self-end bg-primary text-white" : " bg-background-secondary w-fit text-text-primary dark:bg-background-secondary-dark dark:text-text-primary-dark")}>
                    <div className={"flex flex-row" + (message.isMe ? " justify-end" : "")}>

                        <div className="flex items-start break-all whitespace-pre-wrap">
                            {(!message.isMe) && (
                                <div className="prose prose-sm dark:prose-dark">
                                    <Markdown>
                                        {message.text}
                                    </Markdown>
                                </div>
                            )}
                            {(message.isMe) && (
                                <p>
                                    {message.text}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Message;
