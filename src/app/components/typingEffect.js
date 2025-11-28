import { useState, useEffect } from "react";

export default function TypingEffect({ words, typingSpeed = 120 }) {
    const [text, setText] = useState("");

    useEffect(() => {
        const currentWord = words;

        let timer;

        timer = setTimeout(() => {
            setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, words, typingSpeed]);

    return (
        <span className="typing-advanced">
            {text}
            <span className="cursor">|</span>
        </span>
    );
}
