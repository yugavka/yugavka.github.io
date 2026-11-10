import { ArrowUpRight, Github, Trophy } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Project } from '../data/portfolio'
import { BronzeMedal } from './BronzeMedal'

const accent: Record<string, [string, string]> = {
  enveda: ['#97c0a1', '#46645d'],
  'name-that-llm': ['#b59ac9', '#514c6d'],
  'squares-in-squares': ['#d2ae75', '#655c4d'],
  biohub: ['#8eb9c8', '#4b6570'],
  'gpu-market': ['#b58d74', '#60534b'],
  'turkey-demand': ['#b6af5c', '#436a5a'],
  'java-coursework': ['#6faed6', '#49586f'],
}

export function ProjectCard({ project, index, ranking }: { project: Project; index: number; ranking?: { rank: number | null; teamCount: number } }) {
  const [from, to] = accent[project.id] ?? ['#7c9eff', '#50526b']
  const link = project.repositoryUrl ?? project.competitionUrl
  const isGithub = Boolean(project.repositoryUrl)
  const LinkIcon = isGithub ? Github : Trophy

  return (
    <article className="project-card" data-no-link={link ? undefined : 'true'} style={{ '--accent-from': from, '--accent-to': to, '--i': index } as CSSProperties}>
      <div className="project-header">
        <div className="project-title-row"><h3>{project.title}</h3>{project.result === 'Bronze medal' && <BronzeMedal />}</div>
        {ranking && <span className="project-tag" data-tag="rank" aria-label={ranking.rank ? `Rank ${ranking.rank} out of ${ranking.teamCount} teams` : 'No leaderboard rank yet'}>{ranking.rank ? `#${ranking.rank.toLocaleString('en-US')} / ${ranking.teamCount.toLocaleString('en-US')} teams` : 'not yet ranked'}</span>}
      </div>
      <p className="project-body">{project.description}</p>
      <div className="project-footer">
        <span className="project-tag">{project.type.toLowerCase()}</span>
        {project.status === 'Deprecated' && <span className="project-tag" data-tag="deprecated">deprecated</span>}
        {project.result && project.result !== 'Bronze medal' && <span className="project-tag" data-tag="medal">{project.result.toLowerCase()}</span>}
        {link && <a className="project-direct-link" href={link} target="_blank" rel="noopener noreferrer"><LinkIcon size={14} aria-hidden="true" />{isGithub ? 'github' : 'kaggle'}<ArrowUpRight size={13} aria-hidden="true" /></a>}
      </div>
    </article>
  )
}
