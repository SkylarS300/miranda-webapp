import React from 'react';
import '../styles/resources.css';

const resources = [
    {
        category: 'Police & Protests',
        emoji: '👮',
        links: [
            { name: 'ACLU – Know Your Rights', url: 'https://www.aclu.org/know-your-rights' },
            { name: 'National Police Accountability Project', url: 'https://www.nlg-npap.org/' }
        ]
    },
    {
        category: 'Immigration',
        emoji: '🛂',
        links: [
            { name: 'National Immigration Law Center', url: 'https://www.nilc.org/' },
            { name: 'Immigrant Legal Resource Center', url: 'https://www.ilrc.org/' }
        ]
    },
    {
        category: 'Housing & Tenants',
        emoji: '🏠',
        links: [
            { name: 'Nolo – Tenant Rights', url: 'https://www.nolo.com/legal-encyclopedia/tenant-rights' },
            { name: 'JustFix NYC', url: 'https://www.justfix.org/' }
        ]
    },
    {
        category: 'Workplace Rights',
        emoji: '💼',
        links: [
            { name: 'Department of Labor', url: 'https://www.dol.gov/' },
            { name: 'Equal Employment Opportunity Commission (EEOC)', url: 'https://www.eeoc.gov/' }
        ]
    },
    {
        category: 'Student Rights',
        emoji: '🎓',
        links: [
            { name: 'ACLU – Students’ Rights', url: 'https://www.aclu.org/know-your-rights/students-rights/' }
        ]
    },
    {
        category: 'Emergency & Hotlines',
        emoji: '📞',
        links: [
            { name: 'National Domestic Violence Hotline', url: 'https://www.thehotline.org/' },
            { name: 'NYC 311 – Emergency Services', url: 'https://portal.311.nyc.gov/' }
        ]
    }
];

export default function Resources() {
    return (
        <div className="resources-page">
            <h1>Helpful Resources</h1>
            <p className="resources-intro">
                Verified links to legal help, rights education, and emergency support — all in one place.
            </p>

            <div className="resources-grid">
                {resources.map((section, idx) => (
                    <div key={idx} className="resource-card">
                        <h2>{section.emoji} {section.category}</h2>
                        <ul>
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a href={link.url} target="_blank" rel="noreferrer">{link.name} ↗</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
