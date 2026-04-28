import { useState } from 'react'
import { projects } from '../../data'
import { ProjectCard } from '../ProjectCard'

export const Projects = () => {
    const [focusId, setFocusId] = useState(null)

    return (
        <div className='projects'>
            <h2 className='projects__title'>Projects</h2>
            <div className='projects__grid'>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        focusId={focusId}
                        setFocusId={setFocusId}
                    />
                ))}
            </div>
        </div>
    )
}