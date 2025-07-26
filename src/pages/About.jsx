import React from 'react';
import '../styles/about.css';

export default function About() {
    return (
        <div className="about-page">
            <h1>About Miranda</h1>

            <section>
                <h2>What is Miranda?</h2>
                <p>
                    Miranda is a rights-based assistant designed to give you plain-language guidance on what to do in tough or confusing situations. Whether you're stopped by police, facing eviction, or trying to protect your voice at school or work.
                </p>
            </section>

            <section>
                <h2>Why does this exist?</h2>
                <p>
                    Knowing your rights shouldn't require a law degree. Miranda was built to close the gap between legal jargon and real-life action.
                    The goal is clarity, confidence, and protection, especially for those who are often left out of the conversation.
                </p>
            </section>

            <section>
                <h2>Who built it?</h2>
                <p>
                    Miranda was created by a team of high school students passionate about accessible justice.
                </p>
            </section>

            <section className="disclaimer">
                <h2>Support Disclaimer</h2>
                <p>
                    Miranda is not a law firm. Nothing on this site is legal advice. We provide educational information only. We strongly recommend contacting a legal professional if you are facing an emergency or serious issue.
                </p>
            </section>
        </div>
    );
}
