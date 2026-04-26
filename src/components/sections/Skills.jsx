import { skills } from '../../data'
import { SkillCategory } from '../SkillCategory'

export const Skills = () => {
    return (
        <div className='skills__list'>
            <h2 className='skills__title'>Technical Skills</h2>
            {skills.map(skill => (
                <SkillCategory
                    key={skill.category}
                    skill={skill}
                />
            ))}
        </div>
    )
}