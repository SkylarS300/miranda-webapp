import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Typewriter } from "react-simple-typewriter";
import "../styles/ask.css";

export default function ChatPage() {
    const [uid, setUid] = useState("");
    const [existingCids, setExistingCids] = useState([]);
    const [selectedCid, setSelectedCid] = useState("");

    const HF_SPACE_URL = "https://skylar1s2c3h-miranda-bot.hf.space";

    // Monitor login state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) setUid(user.uid);
            else window.location.href = "/login";
        });
        return () => unsubscribe();
    }, []);

    // Fetch user's saved chats
    useEffect(() => {
        if (!uid) return;
        fetch(`${HF_SPACE_URL}/list-chats/${uid}`)
            .then((res) => res.json())
            .then((files) => setExistingCids(files.reverse()));
    }, [uid]);

    // URL for iframe
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

            <div className="chat-controls" style={{ marginTop: "2rem" }}>
                <label htmlFor="chat-dropdown"><strong>Resume a saved chat:</strong></label>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                    <select
                        id="chat-dropdown"
                        value={selectedCid}
                        onChange={(e) => setSelectedCid(e.target.value)}
                    >
                        <option value="">➕ Start new chat</option>
                        {existingCids.map((cid, i) => (
                            <option key={cid} value={cid}>
                                Chat #{existingCids.length - i} — {cid.slice(0, 6)}
                            </option>
                        ))}
                    </select>
                    {selectedCid && (
                        <button onClick={() => setSelectedCid("")}>
                            Start new chat
                        </button>
                    )}
                </div>

                {existingCids.length > 0 && (
                    <div className="chat-list" style={{ marginTop: "1rem" }}>
                        <p><strong>🗂 Your chats:</strong></p>
                        <ul style={{ paddingLeft: "1rem" }}>
                            {existingCids.map((cid, i) => (
                                <li key={cid} style={{ marginBottom: "0.5rem" }}>
                                    Chat #{existingCids.length - i} — {cid.slice(0, 6)}{" "}
                                    <button
                                        onClick={() => handleDeleteChat(cid)}
                                        style={{
                                            marginLeft: "0.5rem",
                                            color: "red",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer"
                                        }}
                                        title="Delete this chat"
                                    >
                                        🗑️
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div style={{ marginTop: "2rem" }}>
                {uid ? (
                    <iframe
                        key={botUrl}
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
