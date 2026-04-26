import { experience } from "../../data"
import { ExperienceItem } from "../ExperienceItem"

export const Experience = () => {
    return (
        <div className="experience">
            <h2 className="experience__title">Experience</h2>
            <div className="experience__container">
                {experience.map(item => (
                    <ExperienceItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}