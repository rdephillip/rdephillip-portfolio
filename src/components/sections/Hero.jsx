import { useEffect, useState } from "react"
import profile from '../../assets/profile.png'
import { RiLinkedinFill } from 'react-icons/ri'

export const Hero = ({ heroExpanded, setHeroExpanded }) => {
    const [contentVisible, setContentVisible] = useState(true)

    useEffect(() => {
        const handleContract = () => {
            setContentVisible(false)
            setTimeout(() => {
                setHeroExpanded(false)
                setContentVisible(true)
            }, 600)
            window.removeEventListener('wheel', handleContract)
            window.removeEventListener('click', handleContract)
        }

        window.addEventListener('wheel', handleContract)
        window.addEventListener('click', handleContract)

        return () => {
            window.removeEventListener('wheel', handleContract)
            window.removeEventListener('click', handleContract)
        }
    }, [])
    
    return (
        <section className={`hero ${heroExpanded ? 'hero--expanded': 'hero--contracted'}`}>
            <div className={`hero__inner ${contentVisible ? 'content--visible' : 'content--hidden'}`}>
                <div className="hero__image">
                    <img src={profile} alt="Roy DePhillip" />
                </div>
                <div className="hero__content">
                    <h1 className="hero__name">Roy DePhillip</h1>
                    <p className="hero__tagline">Engineers do something the hard way only once</p>
                    <a
                        href="https://www.linkedin.com/in/rdephillip"
                        target="_blank"
                        rel="noreferrer"
                        className="hero__contact"
                        aria-label="Connect on LinkedIn"
                    >
                        <RiLinkedinFill size={28} color="#FF8C00" />
                    </a>
                </div>
            </div>
        </section>
    )
}