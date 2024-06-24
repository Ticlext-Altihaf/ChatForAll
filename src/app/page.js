"use client"
import ChatBox from "./components/ChatBox";

export default function Home() {
    return (
        <div
            className="w-full min-h-screen bg-background-primary text-text-primary dark:bg-background-primary-dark dark:text-primary-dark pt-2 transition-colors duration-700">

            <ChatBox/>
        </div>
    );
}
