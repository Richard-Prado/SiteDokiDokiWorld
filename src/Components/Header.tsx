import { BookOpen } from "lucide-react"
import NavBar from "./NavBar"


function Header() {

    return (
        <>
            <header className="flex fixed w-screen p-3 justify-between bg-white/50 backdrop-blur-md z-50 items-center">
                <div className="flex gap-1.5 font-bold text-2xl pl-4"><BookOpen size={38} className="animate-float text-pink-500 drop-shadow-[0_0_4px_rgba(236,72,153,0.8)"/><span className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-400 bg-clip-text text-transparent">The World Of Doki Doki</span></div>
                <NavBar />
            </header>
        </>
    )
}

export default Header