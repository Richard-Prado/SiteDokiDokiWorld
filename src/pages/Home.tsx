import { Heart, MoveDown } from "lucide-react"
import { Link } from "react-router"

function Home (){
    
    return (
        <>
            <main className="pt-15 flex flex-col gap-5.5">
                <div className="relative">
                    <img src="src/assets/heroBG.jpg" alt="imagem de background com sakuras" className="object-cover h-[830px] w-full"/>
                    <div className="absolute inset-0 bg-pink-400/30 flex flex-col"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-7xl font-bold text-white">Traduções de Mods</h1>
                        <h2 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-700 to-purple-400 bg-clip-text text-transparent">Doki Doki Literature Club</h2>
                        <p className="p-3 text-2xl text-white text-center">Encontre mods criados e traduzidos com carinho pela nossa comunidade brasileira<br />
                        levando histórias inesquecíveis para você em português.</p>
                        <div className="flex gap-4">
                            <Link to={'/mods'} className="flex justify-center items-center gap-3 px-8 py-2.5 text-center rounded-lg hover:cursor-pointer bg-gradient-to-r from-pink-500 via-purple-700 to-purple-400 w-59"><Heart color="white"/><span className="text-white font-bold text-lg">Explorar Mods</span></Link>

                            <Link to={'/sobre'} className="flex justify-center items-center gap-3 px-8 py-2.5 text-center rounded-lg hover:cursor-pointer bg-gradient-to-r from-purple-700 via-pink-500 to-purple-400 w-59"><MoveDown className="animate-bounce" color="white"/><span className="text-white font-bold text-lg">Sobre o projeto</span></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>HHHHHHHHHHHHH</h1>
                </div>

            </main>
        </>
    )
    
}

export default Home