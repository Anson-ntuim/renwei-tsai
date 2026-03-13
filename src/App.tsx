import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Ren-Wei Tsai</h1>
        <div className="contact-info">
          <span>ansont320@email.com</span>
          <span>|</span>
          <a href="https://github.com/anson-ntuim" target="_blank" rel="noopener noreferrer">
            github.com/anson-ntuim
          </a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/仁瑋-蔡-3949a0387" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>|</span>
          <span>+886-908-068-320</span>
        </div>
      </header>

      <section>
        <h2>Summary</h2>
        <p className="summary-text">
          NTU Information Management student with experience in <strong>full-stack web development</strong> and 
          strong foundations in <strong>data structures and algorithms</strong>. Skilled in leveraging{' '}
          <strong>AI tools</strong> for development and problem solving, with additional experience in{' '}
          <strong>text mining</strong>, <strong>deep learning</strong>, and <strong>operations research</strong>.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <div className="education-item">
          <div className="item-header">
            <span className="item-title">National Taiwan University</span>
            <span className="item-date">2024 – Present</span>
          </div>
          <div className="item-subtitle">B.B.A. in Information Management</div>
        </div>
        <div className="education-item">
          <div className="item-header">
            <span className="item-title">The Affiliated Senior High School of NTNU</span>
            <span className="item-date">2021 – 2024</span>
          </div>
          <div className="item-subtitle">Computer Science Program</div>
        </div>
        <div className="coursework">
          <div className="coursework-title">Relevant Coursework</div>
          <div className="coursework-list">
            Programming Design (A+), Data Structures, Advanced Programming (A+, Top 33.33%), 
            Algorithms (A+, Top 9.33%), Linux System Administration Practice, Web Programming, 
            Linear Algebra, Operations Research, Operating Systems, Statistics
          </div>
        </div>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div className="experience-item">
          <div className="item-header">
            <span className="item-title">Wisoft Technology Co., Ltd.</span>
            <span className="item-date">Jul – Sep 2025</span>
          </div>
          <div className="item-subtitle">Software Development Intern (Remote)</div>
          <ul className="experience-list">
            <li>Developed frontend features for web applications using <strong>React + TypeScript</strong></li>
            <li>Integrated frontend interfaces with backend APIs to fetch and display dynamic data</li>
            <li>Participated in debugging, testing, and improving overall user experience</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-item">
          <div className="item-header">
            <span className="item-title">X-Clone (Full-Stack Project)</span>
            <span className="item-date">2025</span>
          </div>
          <p className="item-description">
            Developed a full-stack social media web application inspired by X (Twitter) using{' '}
            <strong>Next.js and TypeScript</strong>, implementing user authentication, post interactions, 
            and dynamic content updates.
          </p>
        </div>
        <div className="project-item">
          <div className="item-header">
            <span className="item-title">Zoys Hair Studio Web System (Full-Stack Project)</span>
            <span className="item-date">2025</span>
          </div>
          <p className="item-description">
            Built a full-stack web system for managing hair salon services and reservations using{' '}
            <strong>React and TypeScript</strong> with <strong>Node.js</strong> backend API integration.
          </p>
        </div>
        <div className="project-item">
          <div className="item-header">
            <span className="item-title">HedgeDoc Enhancement (Forked Project)</span>
            <span className="item-date">2025</span>
          </div>
          <p className="item-description">
            Forked a collaborative markdown editor built with <strong>Next.js and TypeScript</strong> and 
            extended the project by implementing GitHub Sync integration, AI-powered summary generation, 
            and PDF export features.
          </p>
        </div>
      </section>

      <section>
        <h2>Awards & Leadership</h2>
        <div className="award-item">
          <div className="item-header">
            <span className="item-title">PDAO Programming Competition</span>
            <span className="item-date">2025</span>
          </div>
          <div className="item-subtitle">5th Place Overall, 1st Place in NTU IM</div>
        </div>
        <div className="award-item">
          <div className="item-header">
            <span className="item-title">NTU IM Freshman Camp</span>
            <span className="item-date">2025</span>
          </div>
          <div className="item-subtitle">Activities Coordinator</div>
        </div>
        <div className="award-item">
          <div className="item-header">
            <span className="item-title">NTU IM Night</span>
            <span className="item-date">2026</span>
          </div>
          <div className="item-subtitle">Event General Coordinator</div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-row">
            <span className="skill-category">Programming</span>
            <span className="skill-items">C++, Python, TypeScript, JavaScript</span>
          </div>
          <div className="skill-row">
            <span className="skill-category">Web Development</span>
            <span className="skill-items">React, React-Native, Next.js, HTML, CSS, Tailwind</span>
          </div>
          <div className="skill-row">
            <span className="skill-category">Backend & Database</span>
            <span className="skill-items">Node.js, Express.js, Prisma, SQL, REST API, JWT, MongoDB</span>
          </div>
          <div className="skill-row">
            <span className="skill-category">Tools</span>
            <span className="skill-items">Git, Docker, Vercel, Linux</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
