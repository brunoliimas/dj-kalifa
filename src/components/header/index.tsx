import Image from "next/image"
import Link from "next/link"
import { FaTwitter, FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'
import { HiPhotograph } from 'react-icons/hi'

export default function Header() {
    return (
        <header className="z-30 py-10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Image
                        className="my-8 md:my-0 order-2 md:order-1"
                        src="/grafitti-kalifa.svg"
                        alt="Dj Kalifa"
                        width={270}
                        height={40}
                    />
                    <Link href="/pictures" className="font-semibold flex items-center hover:text-pink-600 transition-all duration-500 order-3 md:order-2">
                        <HiPhotograph size={24} className="mr-2"/>
                        Galeria
                    </Link>
                    <div className="flex gap-4 order-1 md:order-3">
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="https://twitter.com/matheuskalifadj" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="https://open.spotify.com/user/gca4v5dt21kfwc56smwz8xrbb?si=25181da4b4b34ebf" target="_blank" rel="noopener noreferrer">
                            <FaSpotify />
                        </a>
                        <a className="p-2 bg-white text-black rounded-full hover:bg-pink-600 hover:text-white transition-all duration-500" href="https://soundcloud.com/majukalifa" target="_blank" rel="noopener noreferrer">
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