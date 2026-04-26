import { learning } from "../../data"
import { RiBookOpenFill, RiCodeBoxFill, RiCompassDiscoverFill } from "react-icons/ri"

export const Learning = () => {
    const sections = [
        { label: 'reading', icon: RiBookOpenFill, items: learning.reading },
        { label: 'building', icon: RiCodeBoxFill, items: learning.building },
        { label: 'exploring', icon: RiCompassDiscoverFill, items: learning.exploring }
    ]

    return (
        <div className="learning-bar">
            {sections.map(section => {
                const Icon = section.icon
                
                return (
                    <div key={section.label} className="learning-bar__section">
                        <Icon className="learning-bar__icon"/>
                        {section.items.map(item => (
                            <span key={item} className="learning-bar__item">{item}</span>
                        ))}
                    </div>
                )})}
        </div>
    )
}