import { useState } from 'react';
import '../styles/situation.css';

const situationData = {
    police: {
        title: "Police Stops & Searches",
        script: "I do not consent to a search. Am I free to leave?",
        dos: [
            "Stay calm and keep your hands visible",
            "Ask if you’re free to go or being detained",
            "Record the interaction if legal and safe to do so",
            "Take note of badge numbers and patrol car details",
            "Say clearly you do not consent to a search"
        ],
        donts: [
            "Don’t physically resist or argue",
            "Don’t lie or present fake documents",
            "Don’t touch the officer",
            "Don’t consent even casually if you don’t want to be searched"
        ],
        source: "https://www.aclu.org/know-your-rights/stopped-by-police"
    },
    ice: {
        title: "Immigration & ICE",
        script: "I do not wish to speak or sign anything without a lawyer present.",
        dos: [
            "Stay calm and silent",
            "Ask for identification and warrant—signed by a judge",
            "Post a 'Do Not Open Unless You Have a Warrant' sign on your door",
            "Inform them through the door you do not consent to entry"
        ],
        donts: [
            "Don’t open the door unless they show a valid judicial warrant",
            "Don’t run or hide",
            "Don’t sign any documents without legal advice",
            "Don’t lie about your immigration status"
        ],
        source: "https://www.nilc.org/issues/immigration-enforcement/know-your-rights/"
    },
    tenant: {
        title: "Tenant & Housing Rights",
        script: "Please provide all notices and communication in writing. I will respond accordingly.",
        dos: [
            "Request all communication in writing",
            "Document all maintenance requests and landlord visits",
            "Understand your rights regarding eviction and repairs",
            "Attend housing court if you receive a notice"
        ],
        donts: [
            "Don’t pay cash without a written receipt",
            "Don’t allow unannounced entry without 24-hour notice",
            "Don’t ignore legal notices or court summons",
            "Don’t make repairs yourself without documentation"
        ],
        source: "https://www.nyc.gov/site/rentguidelinesboard/resources/TenantsRights.page"
    },
    protest: {
        title: "Protesting & Free Speech",
        script: "I am here peacefully exercising my First Amendment rights.",
        dos: [
            "Stay in public spaces unless given explicit legal orders",
            "Use cameras to record events",
            "Know what time curfews or orders may go into effect",
            "Write an emergency contact on your arm"
        ],
        donts: [
            "Don’t bring illegal items (like weapons) even for self-defense",
            "Don’t engage with agitators",
            "Don’t trespass on private property without permission",
            "Don’t talk to police beyond giving ID if required"
        ],
        source: "https://www.aclu.org/know-your-rights/protesters-rights/"
    },
    work: {
        title: "Workplace & Labor Rights",
        script: "I’m exercising my right to report this incident and request that it be documented.",
        dos: [
            "Report discrimination or harassment in writing",
            "Keep copies of all communication and HR reports",
            "Know your right to fair pay and breaks",
            "Consult with a labor attorney if terminated unfairly"
        ],
        donts: [
            "Don’t quit impulsively—document first",
            "Don’t retaliate or escalate arguments",
            "Don’t let employers pressure you into silence",
            "Don’t sign anything under threat or duress"
        ],
        source: "https://www.eeoc.gov/laws/guidance/retaliation-guidance"
    },
    student: {
        title: "Student & School Rights",
        script: "I know my rights. I’d like to speak to a trusted adult before answering questions.",
        dos: [
            "Ask for a parent, guardian, or counselor during questioning",
            "Document instances of unfair discipline or search",
            "Know your right to free expression and protest",
            "Understand how Title IX or anti-discrimination laws apply"
        ],
        donts: [
            "Don’t give up personal info without knowing why it’s needed",
            "Don’t agree to locker searches unless required by policy",
            "Don’t retaliate if targeted—report it",
            "Don’t allow school staff to pressure you into silence"
        ],
        source: "https://www.aclu.org/know-your-rights/students-rights/"
    }
};


export default function SituationFlow() {
    const [selected, setSelected] = useState(null);
    const [copied, setCopied] = useState(false);

    return (
        <div className="situation-wrapper">
            <h2>I’m in a Situation...</h2>

            <div className="situation-buttons">
                {Object.keys(situationData).map(key => (
                    <button
                        key={key}
                        className={`situation-btn ${selected === key ? 'active' : ''}`}
                        onClick={() => setSelected(key)}
                    >
                        {situationData[key].title}
                    </button>
                ))}
            </div>

            {selected && (
                <div className="situation-details">
                    <h3>{situationData[selected].title}</h3>

                    <div className="script-row">
                        <p>
                            <strong>Say this:</strong> <em>{situationData[selected].script}</em>
                        </p>
                        <button
                            className="copy-btn"
                            onClick={() => {
                                navigator.clipboard.writeText(situationData[selected].script);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>

                    <div className="do-dont-container">
                        <div className="do-list">
                            <h4>✅ Do</h4>
                            <ul>
                                {situationData[selected].dos.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="dont-list">
                            <h4>🚫 Don't</h4>
                            <ul>
                                {situationData[selected].donts.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="situation-source">
                        <a href={situationData[selected].source} target="_blank" rel="noreferrer">
                            Source ↗
                        </a>
                    </p>

                    <button
                        className="download-btn"
                        onClick={() => downloadCard(selected)}
                    >
                        Save as Card
                    </button>
                </div>
            )}
        </div>
    );
}

// ✅ downloadCard must be OUTSIDE the component's return
function downloadCard(key) {
    const data = situationData[key];
    const blob = new Blob(
        [
            `--- ${data.title} ---\n\n` +
            `Say this:\n"${data.script}"\n\n` +
            `✅ Do:\n- ${data.dos.join('\n- ')}\n\n` +
            `🚫 Don't:\n- ${data.donts.join('\n- ')}\n\n` +
            `Source: ${data.source}`
        ],
        { type: 'text/plain' }
    );

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${data.title.replace(/\s+/g, '_')}_MirandaCard.txt`;
    link.click();
}
