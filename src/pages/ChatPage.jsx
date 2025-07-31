import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Typewriter } from "react-simple-typewriter";
import "../styles/ask.css";

export default function ChatPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const HF_SPACE_URL = "https://skylar1s2c3h-miranda-bot-final.hf.space";

    // Monitor login state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) setIsAuthenticated(true);
            else window.location.href = "/login";
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="ask-page">
            <h1 className="ask-title">Ask Miranda</h1>
            <p className="ask-subtitle">Get plain-language answers to your rights questions.</p>

            <div className="typewriter-questions">
                <span className="prompt">Try asking: </span>
                <span className="question">
                    <Typewriter
                        words={[
                            "Can a cop search my phone?",
                            "What if ICE comes to my house?",
                            "What are my rights as a tenant?",
                            "Can I get fired for speaking up at work?"
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={2000}
                    />
                </span>
            </div>

            <div className="chat-wrapper">
                {isAuthenticated ? (
                    <iframe
                        src={HF_SPACE_URL}
                        className="miranda-chat-iframe"
                        frameBorder="0"
                        title="Miranda Chatbot"
                    />
                ) : (
                    <p>Loading chat interface...</p>
                )}
            </div>
        </div>
    );
}
