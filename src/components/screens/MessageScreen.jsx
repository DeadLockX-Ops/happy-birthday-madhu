"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, Madhu!
                        Some people don’t just enter your life — they leave a mark on it, and you’ve done that so effortlessly just by being who you are. You have this rare way of making people feel seen, appreciated, and at ease, and it’s something truly special.

                        Before you came into my life, things felt dull and heavy in ways I never spoke about. Somehow, your presence turned all of that into something lighter, warmer — almost like finding heaven after a long, difficult time. It’s something I’ve come to cherish deeply. There’s a softness in your kindness that stays with me long after our conversations end, and knowing you has become something I hold close to my heart.

                        You inspire feelings that are rare and beautiful, and I admire you more than words can explain. I hope today reminds you of how much you matter and how much light you bring into my life.

                        Wishing you a year filled with happiness, love, and moments that make you feel as special as you truly are.
                        – 143 💗
                    </p>
                </motion.div>
            </div>
        </div>
    )
}