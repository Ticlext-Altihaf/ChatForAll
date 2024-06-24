import React, {useEffect, useRef, useState} from "react";

const SendMessage = ({scroll, addMessage}) => {
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        const handleKDown = (e) => {
            if (e.shiftKey && e.key === "Escape") {
                e.preventDefault();
                inputRef.current.focus();
            }
        };
        document.addEventListener("keydown", handleKDown);
    }, []);


    const sendMessage = (event) => {
        event.preventDefault();
        if (message.trim() === "") return;
        setMessage("");
        addMessage({text: message});
        setTimeout(() => {
            scroll.current.scrollIntoView({behavior: "smooth", block: "end"});
        }, 200);
    };

    const handleKeyDown = (event) => {
        if (window.innerWidth > 768) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage(event);
            }
        }
    };

    return (
        <form
            onSubmit={(event) => sendMessage(event)}
            className="fixed bottom-0 w-full bg-background-primary dark:bg-background-primary-dark px-7 py-5 flex"
            autoComplete="off"
        >
      <textarea
          id="messageInput"
          name="messageInput"
          className="h-10 p-2.5 rounded-l-xl font-sans border-none grow bg-background-secondary dark:bg-background-secondary text-text-primary dark:text-primary-dark text-base leading-none resize-none placeholder:text-text-secondary dark:placeholder:text-secondary-dark "
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
      />
            <button
                className="w-16 h-10 px-2.5 py-1 rounded-r-xl text-white  dark:text-primary-dark bg-primary dark:bg-primary-dark font-semibold"
                type="submit"
            >
                ➤
            </button>
        </form>
    );
};

export default SendMessage;
