import Image from "next/image"
import { FaTwitter, FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'

export default function Header() {
    return (
        <header className="z-30 py-10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Image
                        className="mt-8 md:mt-0 order-2 md:order-1"
                        src="/grafitti-kalifa.svg"
                        alt="Dj Kalifa"
                        width={270}
                        height={40}
                    />
                    <div className="flex gap-4  order-1 md:order-2">
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="http://" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="http://" target="_blank" rel="noopener noreferrer">
                            <FaSpotify />
                        </a>
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="http://" target="_blank" rel="noopener noreferrer">
                            <FaSoundcloud />
                        </a>
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="https://www.instagram.com/eukalifadj/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}