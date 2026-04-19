export const ProjectCard = ({ project, focusId, setFocusId }) => {
    const isFocused = focusId === project.id
    const isDimmed = focusId !== null && focusId !== project.id

    return (
        <div className={`project-card ${isFocused ? 'project-card--focused' : ''} ${isDimmed ? 'project-card--dimmed' : ''}`}
            onMouseEnter={() => setFocusId(project.id)}
            onMouseLeave={() => setFocusId(null)}
        >
            <div className="project-card__header">
                <h2 className="project-card__name">{project.name}</h2>
                <span className="project-card__status">{project.status}</span>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__stack">
                    {project.stack.map(item => (
                        <span key={item.name} className="stack-badge">{item.name}</span>
                    ))}
            </div>
            {project.link && <a href={project.link}>View Project</a>}
        </div>
    )
}