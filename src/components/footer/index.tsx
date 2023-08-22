export default function Footer() {
    return (
        <footer className="w-full py-4 absolute bottom-0 left-0 bg-black text-white">
            <div className="container">
                <div className="text-center">
                    <p className="text-sm">
                        Música do vídeo de <a className="hover:text-pink-600 transition-all duration-500" href="https://www.youtube.com/watch?v=ezVAUQcAA54" target="_blank" rel="noopener noreferrer">Urias - Blossom</a>
                    </p>
                    <p className="text-[10px]">
                        <span className="text-pink-600">DJ Kalifa ©</span> Todos os direitos reservados
                    </p>
                    <p className="text-[10px]">Desenvolvido por
                        <a className="hover:text-pink-600 transition-all duration-500" href="https://brunolima.dev.br" target="_blank" rel="noopener noreferrer"> Bruno Lima</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}