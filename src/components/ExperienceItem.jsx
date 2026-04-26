export const ExperienceItem = ({ item }) => {
    const statusClass = {
        'Active': 'badge--production',
        'Foundation': 'badge--dev',
        'Origin': 'badge--maintained'
    }[item.badge]

    return (
        <div className="experience-item">
            <div className="experience-item__header">
                <h3 className="experience-item__title">{item.title}</h3><span className={`badge ${statusClass}`}>{item.badge}</span>
            </div>
            <div className="experience-item__subtext">
                {item.subtitle && <h4 className="experience-item__subtitle">{item.subtitle}</h4>}
                <div className="experience-item__meta">
                    <h4 className="experience-item__org">{item.organization}</h4><span className="experience-item__period">{item.period}</span>
                </div>
            </div>
            <div className="experience-item__context">
                <p className="experience-item__summary">{item.summary}</p>
                <ul className="experience-item__highlights">
                    {item.highlights.map((highlight, index) =>(
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}