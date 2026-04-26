export const EducationItem = ({ item }) => {
    return (
        <div className="education-item">
            <div className="education-item__header">
                <h3>{item.degree}</h3>
            </div>
            <div className="education-item__subtext">
                <h4 className="education-item__institution">{item.institution}</h4>
                <span className="education-item__year">{item.year}</span>
            </div>
            <p className="education-item__distinction">{item.distinction}</p>
        </div>
    )
}