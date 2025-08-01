import './about.css';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="main-container">
                <div className="about-container">
                    <h2>About Me</h2>
                    <p className="about-intro">
                        I'm <strong>Anuvarshini</strong>, a front-end developer with <strong>4+ years of experience</strong> building scalable, accessible, and user-focused applications using <strong>React.js, JavaScript, Tailwind CSS, and more</strong>. I love transforming ideas into elegant digital experiences and constantly push for clean, performant code.
                    </p>

                    <div className="about-highlights">
                        <div>
                            <h3>My Skills</h3>
                            <ul>
                                <li>React.js, Javascript, Redux-Saga, TypeScript, Python</li>
                                <li>HTML5, CSS, Bootstrap, Tailwind, MUI</li>
                                <li>Next.js, AWS Lambda, API Gateway</li>
                                <li>Jest, Selenium, Git, Jenkins, Postman</li>
                                <li>GraphQL, MySQL, REST APIs, DynamoDB, MongoDB</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Work Experience</h3>
                            <ul>
                                <li><strong>Patton Labs:</strong> Developed a React app with AWS serverless backend to track the employee performance.</li>
                                <li><strong>Zoho Corp:</strong> Built scalable React components. Developed custom projects for enterprice clients. </li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-button">
                        <a
                            href="/Anu-varshini-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}

