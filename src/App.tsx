import React, { useState } from 'react';
import styles from './App.module.css';
import profilePic from './wafaa.jpeg';
import { GithubIcon, LinkedInIcon, OrcidIcon, LocationIcon, EmailIcon } from './icons';
import data from './data.json';

// Helper for alternating section backgrounds
function getSectionClass(index: number) {
  return index % 2 === 1 ? `${styles.section} ${styles.alt}` : styles.section;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Optionally detect screen width for automatic close on resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.bg}>
      


      <nav className={styles.topnav}>
        {/* Brand (your name) always visible */}
        <div className={styles.brand}>{data.profile.name}</div>
        {/* Hamburger only on mobile */}
        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(m => !m)}
        >
          <span className={styles.hamburger} />
        </button>
        {/* Menu items: show only if open or desktop */}
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <a className={styles.menuItem} href="#about">About</a>
          <a className={styles.menuItem} href="#experience">Experience</a>
          <a className={styles.menuItem} href="#education">Education</a>
          <a className={styles.menuItem} href="#skills">Skills</a>
          <a className={styles.menuItem} href="#volunteering">Volunteering</a>
          <a className={styles.menuItem} href="#projects">Projects</a>
        </div>
      </nav>

      <main>
        {/* About Section */}
        <section id="about" className={getSectionClass(0)}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutLeft}>
              <img src={profilePic} alt={data.profile.name} className={styles.profilePic} />
            </div>
            <div className={styles.aboutRight}>
              <div>
                <strong className={styles.headline}>{data.profile.headline}</strong>
                <div className={styles.location}>
                  <LocationIcon /> {data.profile.location}
                </div>
              </div>
              <div className={styles.contactLinks}>

                  <span><EmailIcon /> <a href={`mailto:${data.profile.email}`}>Email</a></span>
                  <a href={data.profile.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
                  <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
                  <a href={data.profile.orcid} target="_blank" rel="noopener noreferrer"><OrcidIcon /> ORCID</a>

              </div>
              <div className={styles.aboutBio}>
                <p>{data.profile.bio}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={getSectionClass(1)}>
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.skillsGrid}>
            {data.skills.map(skill => (
              <div key={skill.category}>
                <strong>{skill.category}:</strong> {skill.items.join(", ")}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={getSectionClass(2)}>
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.cards}>
            {data.experience.map((exp, i) => (
              <div className={styles.card} key={i}>
                <h3>{exp.role} — {exp.org} ({exp.dates})</h3>
                <p className={styles.place}><LocationIcon /> {exp.location}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={getSectionClass(3)}>
          <h2 className={styles.title}>Education</h2>
          <div className={styles.cards}>
            {data.education.map((edu, i) => (
              <div className={styles.card} key={i}>
                <h3>{edu.degree}</h3>
                <p>{edu.school} ({edu.dates})</p>
                <p><em>{edu.details}</em></p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className={getSectionClass(4)}>
          <h2 className={styles.title}>Languages</h2>
          <div className={styles.skills}>
            {data.languages.map(lang => (
              <span className={styles.skillBadge} key={lang}>{lang}</span>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className={getSectionClass(5)}>
          <h2 className={styles.title}>Hobbies & Interests</h2>
          <div className={styles.skills}>
            {data.hobbies.map(hobby => (
              <span className={styles.skillBadge} key={hobby}>{hobby}</span>
            ))}
          </div>
        </section>

        {/* Volunteering Section */}
        <section id="volunteering" className={getSectionClass(6)}>
          <h2 className={styles.title}>Volunteering</h2>
          <ul className={styles.volunteeringList}>
            {data.volunteering.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className={getSectionClass(7)}>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.contactLinks}>
            <span><EmailIcon /> <a href={`mailto:${data.profile.email}`}>Email</a></span>
            <a href={data.profile.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
            <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a href={data.profile.orcid} target="_blank" rel="noopener noreferrer"><OrcidIcon /> ORCID</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} {data.profile.name}
      </footer>
    </div>
  );
}
