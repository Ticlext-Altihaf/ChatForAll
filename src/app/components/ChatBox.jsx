import React, {useEffect, useRef, useState} from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Preloader from "./Preloader";
import {random} from "lodash";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setMessages([]);
        setLoading(false);
    }, []);

    const addMessage = (message) => {
        if (!message.text.trim()) return;
        if (!message.createdAt) message.createdAt = new Date();
        message.isMe = random(0, 1) === 1;
        message.text = message.text.trim();
        // remove trailing spaces and new lines
        message.text = message.text.replace(/\s+$/, "");
        message.text = message.text.replace(/\n+$/, "\n");

        setMessages((prevMessages) => [...prevMessages, message]);
    }

    const copyLastMessage = () => {
        const lastMessage = messages[messages.length - 1];
        if (lastMessage) {
            navigator.clipboard.writeText(lastMessage.text);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C")) {
                e.preventDefault();
                copyLastMessage();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
    }, [copyLastMessage, messages]);

    return (
        <>
            {loading ? (
                <Preloader/>
            ) : (
                <div className="p-5 mb-16  flex flex-col ">

                    {messages?.map((message) => (
                        <Message key={message.id} message={message}/>
                    ))}
                </div>
            )}
            {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} addMessage={addMessage}/>
            {/* <button onClick={copyLastMessage}>CopyLastMessage</button> */}
        </>
    );
};

export default ChatBox;
