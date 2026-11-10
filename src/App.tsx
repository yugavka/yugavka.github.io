import { ArrowUpRight, Github, Mail, Send, Trophy } from 'lucide-react'
import { BronzeMedal } from './components/BronzeMedal'
import { CyclingGreeting } from './components/CyclingGreeting'
import { ProjectCard } from './components/ProjectCard'
import { achievements, contacts, courses, cvPath, education, humanLanguages, kaggleProjects, person, projects, research, skillGroups } from './data/portfolio'
import kaggleRankSnapshot from './data/kaggleRanks.json'

type KaggleRanking = { rank: number | null; teamCount: number }
const kaggleRankings: Record<string, KaggleRanking> = kaggleRankSnapshot.ranks
const rankingDate = new Date(kaggleRankSnapshot.updatedAt).toLocaleString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC', timeZoneName: 'short',
})

const contactItems = [
  { key: 'github', label: 'github', icon: Github },
  { key: 'kaggle', label: 'kaggle', icon: Trophy },
  { key: 'telegram', label: 'telegram', icon: Send },
  { key: 'email', label: 'email', icon: Mail },
] as const

function Skills({ items }: { items: readonly string[] }) {
  return <>{items.map((item, index) => <span key={item} className="skill-with-separator"><span className="skill">{item}</span>{index < items.length - 1 && <span className="skill-sep">·</span>}</span>)}</>
}

function App() {
  const availableContacts = contactItems.filter(({ key }) => Boolean(contacts[key]))

  return (
    <div id="app">
      <a className="skip-link" href="#main">skip to content</a>
      <main id="main">
        <section id="welcome" aria-labelledby="welcome-title">
          <h1 id="welcome-title">welcome!</h1>
          <p><b><CyclingGreeting />!</b></p>
          <p>my name's <b>{person.name}</b>, a <b>{person.role}</b> based in {person.location}.</p>
          <p>{person.headline.lead} <b>{person.headline.emphasis}</b> {person.headline.ending}</p>
        </section>

        <section id="education" aria-labelledby="education-title">
          <h2 id="education-title">education</h2>
          <div className="education-list">{education.map((entry) => <div className="education-entry" key={entry.institution}><div className="education-head"><b>{entry.institution}</b><span className="text-half-visible">{entry.dates}</span></div><p>{entry.program}{entry.location && <span className="text-half-visible"> · {entry.location}</span>}</p>{entry.detail && <p className="text-half-visible">{entry.detail}</p>}</div>)}</div>
        </section>

        <section id="kaggle" aria-labelledby="kaggle-title">
          <h2 id="kaggle-title">kaggle competitions</h2>
          <p className="ranking-note">public leaderboard places checked {rankingDate} · <a href={contacts.kaggle} target="_blank" rel="noopener noreferrer">view profile ↗</a></p>
          <div className="projects-grid">{kaggleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} ranking={kaggleRankings[project.competitionSlug ?? '']} />)}</div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">other projects</h2>
          <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
          <span className="text-half-visible text-small">i like working on challenging technical problems.</span>
        </section>

        <section id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">skills <span className="text-half-visible">(and not only)</span></h2>
          <p className="skills-prose">i write code in <Skills items={skillGroups[0].skills} />; work with <Skills items={skillGroups[1].skills} /> for machine learning and data; and use <Skills items={skillGroups[2].skills} /> to build and collaborate.</p>
          <p className="info-line"><span className="info-label">math foundations:</span> <Skills items={skillGroups[3].skills} /></p>
        </section>

        <section id="achievements" aria-labelledby="achievements-title">
          <h2 id="achievements-title">achievements</h2>
          <ul className="achievement-list">{achievements.map((item) => <li key={`${item.title}-${item.detail}`}><b>{item.title}</b> {item.medal && <BronzeMedal />} <span className="text-half-visible">— {item.detail}</span></li>)}</ul>
        </section>

        <section id="research" aria-labelledby="research-title">
          <h2 id="research-title">research experience</h2>
          <p><b>{research.title}</b> <span className="text-half-visible">· {research.year}</span></p>
          <p>{research.role} — {research.detail}</p>
        </section>

        <section id="courses" aria-labelledby="courses-title">
          <h2 id="courses-title">courses & certifications</h2>
          <ul className="achievement-list">{courses.map((course) => <li key={course}>{course}</li>)}</ul>
        </section>

        <section id="languages" aria-labelledby="languages-title">
          <h2 id="languages-title">languages</h2>
          <p className="skills-prose"><Skills items={humanLanguages} /></p>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">contact</h2>
          <p>interested in AI, machine learning, research, or thoughtful software engineering? i'd be glad to connect.</p>
          <div className="contact-links">
            {availableContacts.map(({ key, label, icon: Icon }) => <a key={key} href={key === 'email' ? `mailto:${contacts.email}` : contacts[key]} target={key === 'email' ? undefined : '_blank'} rel={key === 'email' ? undefined : 'noopener noreferrer'}><Icon size={15} />{label}<ArrowUpRight size={13}/></a>)}
            {cvPath && <a className="cv-link" href={`${import.meta.env.BASE_URL}${cvPath.replace(/^\//, '')}`} download>download cv ↓</a>}
          </div>
        </section>
      </main>
      <footer>
        <p>made by <b>{person.name}</b> with care.</p>
        <p>layout adapted from <a href="https://starkow.dev/" target="_blank" rel="noopener noreferrer">starkow.dev ↗</a></p>
        <a href="#welcome">↑ back to top</a>
      </footer>
    </div>
  )
}

export default App
