"use client"
import ChatBox from "./components/ChatBox";

export default function Home() {
    return (
        <div
            className="w-full min-h-screen bg-background-primary text-text-primary dark:bg-background-primary-dark dark:text-primary-dark pt-2 transition-colors duration-700">
            <div className="flex justify-between items-center m-3">

                <h1 className="text-center text-primary dark:text-primary-dark font-bold text-4xl">
                    ChatForAll
                </h1>
            </div>
            <ChatBox/>
        </div>
    );
}
