import { Typewriter } from 'react-simple-typewriter';
import SituationFlow from '../components/SituationFlow';
import '../styles/ask.css';

export default function Ask() {
    return (
        <div className="ask-page">
            <h1 className="ask-title">Ask Miranda</h1>
            <p className="ask-subtitle">Get plain-language answers to your rights questions. Start typing below:</p>

            {/* Typewriter example prompts */}
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
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={2000}
                    />
                </span>
            </div>

            <div className="chat-embed-container">
                <iframe
                    src="https://skylar1s2c3h-miranda-bot.hf.space"
                    width="100%"
                    height="600px"
                    frameBorder="0"
                    title="Miranda Chatbot"
                ></iframe>
            </div>

            <SituationFlow />
        </div>
    );
}
