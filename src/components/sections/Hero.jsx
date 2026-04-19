import { useEffect } from "react"
import profile from '../../assets/profile.png'
import { RiLinkedinFill } from 'react-icons/ri'

export const Hero = ({ heroExpanded, setHeroExpanded }) => {
    useEffect(() => {
        const handleScroll = () => {
            setHeroExpanded(false)
            window.removeEventListener('wheel', handleScroll)
        }

        window.addEventListener('wheel', handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])
    return (
        <section className={`hero ${heroExpanded ? 'hero--expanded': 'hero--contracted'}`}>
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
                >
                    <RiLinkedinFill size={28} color="#FF8C00" />
                </a>
            </div>
        </section>
    )
}