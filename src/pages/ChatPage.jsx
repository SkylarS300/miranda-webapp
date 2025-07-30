import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Typewriter } from "react-simple-typewriter";
import "../styles/ask.css";

export default function ChatPage() {
    const [uid, setUid] = useState("");
    const [existingCids, setExistingCids] = useState([]);
    const [selectedCid, setSelectedCid] = useState(""); // track current chat

    const HF_SPACE_URL = "https://skylar1s2c3h-miranda-bot.hf.space";

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) setUid(user.uid);
            else window.location.href = "/login";
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!uid) return;

        fetch(`${HF_SPACE_URL}/list-chats/${uid}`)
            .then((res) => res.json())
            .then((files) => setExistingCids(files));
    }, [uid]);

    const botUrl = selectedCid
        ? `${HF_SPACE_URL}?uid=${uid}&cid=${selectedCid}`
        : `${HF_SPACE_URL}?uid=${uid}`;

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

            <div className="chat-selector">
                <label htmlFor="chat-dropdown">Resume a previous chat:</label>
                <select
                    id="chat-dropdown"
                    value={selectedCid}
                    onChange={(e) => setSelectedCid(e.target.value)}
                >
                    <option value="">Start new chat</option>
                    {Array.isArray(existingCids) &&
                        existingCids.map((cid) => (
                            <option key={cid} value={cid}>
                                {cid}
                            </option>
                        ))}
                </select>
            </div>

            <div style={{ marginTop: "2rem" }}>
                {uid ? (
                    <iframe
                        src={botUrl}
                        width="100%"
                        height="600px"
                        frameBorder="0"
                        title="Miranda Chatbot"
                    ></iframe>
                ) : (
                    <p>Loading chat interface...</p>
                )}
            </div>
        </div>
    );
}
