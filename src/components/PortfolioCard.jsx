import { useState } from "react";

function PortfolioCard() {
  const [likes, setLikes] = useState(128);
  const [theme, setTheme] = useState("light");

  const skills = [
    "Design Systems",
    "React",
    "TypeScript",
    "Figma",
    "Accessibility"
  ];

  return (
    <div className={`portfolio ${theme}`}>
      <button
        className="theme-btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle theme
      </button>

      <div className="card">
        <img
          className="avatar"
          src="https://i.pravatar.cc/100"
          alt="profile"
        />

        <h2>TuteDude</h2>
        <p className="role">Product Designer & Frontend Engineer</p>

        <p className="bio">
          I design and build calm, focused product experiences for fast-moving
          teams.
        </p>

        <div className="skills">
          {skills.map((skill, i) => (
            <span key={i} className="skill">
              {skill}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <span>❤️ {likes}</span>
          <button onClick={() => setLikes(likes + 1)}>Like</button>
          <button className="contact">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
