import { useEffect, useState } from "react"
import { useStartDate } from "../hooks/useStartDate"

export const ScrollToTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false)
    const startDate = useStartDate()

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {showScrollToTop && (
                <div className="block md:hidden w-full fixed top-0 p-2">
                    <div
                        className="bg-slate-50/70 w-full backdrop-blur-sm h-10 flex items-center justify-center rounded-xl"
                        onClick={handleScrollToTop}>{ startDate.toLocaleString() }</div>
                </div>
            )}
        </>
    )
}
