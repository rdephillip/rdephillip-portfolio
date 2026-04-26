export const SkillCategory = ({ skill }) => {
    const statusClass = {
        'Language': 'badge--language',
        'Framework': 'badge--framework',
        'Data': 'badge--data',
        'Infra': 'badge--infra',
        'Protocol': 'badge--protocol'
    }[skill.type]

    return (
        <div className="skill-category">
            <div className="skill-category__header">
                <h3 className="skill-category__name">{skill.category}</h3>
            </div>
            <div className="skill-category__items">
                {skill.items.map(item => {
                    return (
                        <span key={item} className={`badge ${statusClass}`}>{item}</span>
                    )
                })}
            </div>
        </div>
    )
}