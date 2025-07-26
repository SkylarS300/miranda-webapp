import '../styles/home.css';

export default function Home() {
    return (
        <div className="home-wrapper">
            <header className="hero-section">
                {/* Hero image now ABOVE the logo */}
                <img src="/images/hero-image.png" alt="Hero" className="hero-image-placeholder" />

                <div className="hero-logo">
                    <img src="/images/miranda-logo.png" alt="Miranda Logo" />
                </div>

                <h1 className="hero-title">Miranda</h1>
                <p className="hero-subtitle">You Have the Right to Know.</p>

                <p className="hero-blurb">
                    Miranda is a simple, trustworthy rights-based assistant.
                    It helps you understand your legal rights—no law degree required.
                </p>

                <div className="button-group">
                    <a href="/ask" className="start-chat-button">Start Chat</a>
                    <a href="/rights" className="learn-more-button">Learn More</a>
                </div>
            </header>
        </div>
    );
}
