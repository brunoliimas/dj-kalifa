'use client'
import { useState } from "react";
import { ButtonMuted } from "../ui/buttonMuted";


export default function Video() {

    const [isMuted, setIsMuted] = useState(true);
    return (
        <section className="w-full h-full fixed top-0 left-0 -z-10">
            <video
                muted={isMuted}
                autoPlay
                loop
                className="object-cover w-full h-full">
                <source src="/video-background.mp4" type="video/mp4" />
            </video>
            <ButtonMuted isMuted={isMuted} setIsMuted={setIsMuted} />
        </section>
    )
}