import { education } from '../../data'
import { EducationItem } from '../EducationItem'

export const Education = () => {
    return (
        <div className='education'>
            <h2 className='education__title'>Education</h2>
            {education.map(item => (
                <EducationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}