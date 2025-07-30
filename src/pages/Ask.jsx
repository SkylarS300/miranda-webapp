import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import SituationFlow from '../components/SituationFlow';
import '../styles/ask.css';

export default function Ask() {
    return (
        <div className="ask-page">
            <h1 className="ask-title">Ask Miranda</h1>

            {/* Start Chat Button */}
            <div className="start-chat-container">
                <Link to="/chat" className="start-chat-button">
                    Start Private Chat with Miranda
                </Link>
            </div>

            <SituationFlow />
        </div>
    );
}
