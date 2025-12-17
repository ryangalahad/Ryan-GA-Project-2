import React from 'react';

const AboutApp = () => {
    return (
        <div className="about-container"> {/* Apply a class for styling */}
            <h1 className="about-title">Currency Converter App: Overview</h1>
            <p className="about-intro">
                This application is engineered to deliver <strong>real-time</strong>, accurate currency exchange rates for over <strong>160+ global currencies</strong>. The app aims to provide users with reliable, 
                up-to-date financial data for informed decisions, whether for travel or personal finance.
            </p>

            <section className="about-section">
                <h2>📊 Core Features & Data</h2>
                <ul>
                    <li><strong>Real-Time Rates:</strong> Provides conversions across 160+ currencies based on current market data.</li>
                    <li><strong>Data Source:</strong> Powered by <strong>ExchangeRate-API</strong>.</li>
                    <li><strong>Personalized Favorites:</strong> Users can search and save their most frequently used currency pairs.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>💻 Technology Stack</h2>
                <ul>
                    <li><strong>Frontend:</strong> Built with **React** for a fast, responsive, and modular user interface.</li>
                    <li><strong>Styling:</strong> Utilizes <strong>CSS</strong> for clean, modern aesthetics and a smooth user experience.</li>
                    <li><strong>Data Persistence (Favorites):</strong> User-specific favorite currency pairs are stored and managed using <strong>Airtable</strong>(cloud-based backend database).</li>
                    <li><strong>API Validation:</strong> Development included API testing using <strong>Bruno</strong>, a reliable open-source API client, to ensure seamless data exchange.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutApp;