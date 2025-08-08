export default function Projects() {
    return (
        <section className="projects">
            <h2 className="proj-title">My Projects</h2>
            <div className="work-grid">
                <div>
                    <h3>AI integrated Terms and Conditions Summarizer</h3>
                    <p> It is a Chrome extension that scans webpages for Terms and Conditions or Privacy Policy links, extracts their content, and uses OpenAI’s language model to generate concise, user-friendly summaries. Built with JavaScript for the frontend, it leverages the Chrome Extensions API for DOM access and messaging between content scripts and the popup. It integrates OpenAI's API for natural language processing and uses fetch for asynchronous data handling. This tool helps users quickly understand lengthy legal documents without reading them in full.</p>
                </div>
                <div>
                    <h3>AI powered Wellness Scheduler</h3>
                    <p>AI Wellness Scheduler is a personalized wellness planning website that syncs with your Google Calendar to fetch daily meetings and intelligently suggests schedules for activities like workouts, mindfulness, and self-care. Built using React and the Google Calendar API, it securely authenticates users via OAuth2 and processes event data to generate time-optimized wellness plans using OpenAI's GPT API. The application emphasizes user experience with dynamic state handling, clean UI, and asynchronous data flow, offering a seamless blend of productivity and well-being.</p>
                </div>
            </div>
        </section>
    );
}
