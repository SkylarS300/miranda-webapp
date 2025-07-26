import rightsData from '../bot/miranda_responses.json';
import '../styles/knowYourRights.css';
import { useState } from 'react';
import { generatePDF } from '../utils/generatePDF';

export default function KnowYourRights() {
    const [expanded, setExpanded] = useState(null);

    const toggle = (key) => {
        setExpanded((prev) => (prev === key ? null : key));
    };

    return (
        <div className="rights-page">
            <h1 className="rights-title">Know Your Rights</h1>
            <p className="rights-intro">Explore common scenarios and what to do.</p>

            {Object.entries(rightsData).map(([key, section]) => (
                <div
                    key={key}
                    className="rights-section"
                    style={{ backgroundColor: section.color || '#fff' }}
                >
                    <button className="section-header" onClick={() => toggle(key)}>
                        <span className="emoji">{section.emoji}</span>
                        <h2>{section.title}</h2>
                        <span>{expanded === key ? "▲" : "▼"}</span>
                    </button>

                    {expanded === key && (
                        <div className="section-content">
                            <p>{section.response}</p>

                            {section.details?.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}

                            <div className="do-dont-container">
                                <div className="do-list">
                                    <h4>✅ Do</h4>
                                    <ul>
                                        {section.dos.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="dont-list">
                                    <h4>🚫 Don't</h4>
                                    <ul>
                                        {section.donts.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {section.tips && (
                                <div className="tips-block">
                                    <h4>📝 Tips</h4>
                                    <ul>
                                        {section.tips.map((tip, idx) => (
                                            <li key={idx}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {section.related && (
                                <div className="related-qa">
                                    <h4>❓ Related Questions</h4>
                                    {section.related.map((qa, idx) => (
                                        <div key={idx} className="qa-pair">
                                            <p><strong>Q:</strong> {qa.question}</p>
                                            <p><strong>A:</strong> {qa.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p className="rights-source">
                                <a href={section.source} target="_blank" rel="noreferrer">
                                    Source ↗
                                </a>
                            </p>

                            <button
                                className="download-button"
                                onClick={() => generatePDF(section)}
                            >
                                📄 Download PDF
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
