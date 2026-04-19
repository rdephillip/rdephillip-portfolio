import { useEffect } from "react"

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
    return <section>hero</section>
}