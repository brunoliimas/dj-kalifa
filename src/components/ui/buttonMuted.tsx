'use client'
import React from 'react';
import { BiSolidVolumeFull, BiSolidVolumeMute } from 'react-icons/bi';

interface ButtonMutedProps {
    isMuted: boolean; // Defina o tipo booleano para isMuted
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>; // Use o tipo apropriado para setIsMuted
}

export const ButtonMuted = ({ isMuted, setIsMuted }: ButtonMutedProps) => {
    const toggleMute = () => {
        setIsMuted(!isMuted); // Alterne o estado de mudo para não mudo e vice-versa
    };

    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
                className='p-10 rounded-full group text-sm font-semibold flex flex-col items-center justify-center text-white hover:text-pink-600 transition-all duration-500'
                onClick={toggleMute} // Chame a função toggleMute quando o botão for clicado
            >
                {isMuted ? ( // Use um ícone diferente com base no estado de mudo
                    <span className='flex flex-col items-center justify-center'>
                        <BiSolidVolumeMute size={30} className="mb-2 text-pink-600 group-hover:text-white transition-all duration-500" />
                        Muted
                    </span>
                ) : (
                    <span className='flex flex-col items-center justify-center'>
                        <BiSolidVolumeFull size={30} className="mb-2 text-pink-600 group-hover:text-white transition-all duration-500" />
                        Playing
                    </span>
                )}
            </button>
        </div>
    );
};
