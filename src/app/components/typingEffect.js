import { useState, useEffect } from "react";
import '../styles/typing.css';

export default function TypingEffect({
    words,
    typingSpeed = 120,
    deleteSpeed = 80,
    delay = 1500,
}) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words;

        let timer;

        if (!isDeleting) {
            // typing
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));

                if (text === currentWord) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }, typingSpeed);
        } else {
            // deleting
            timer = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length); // go to next
                }
            }, deleteSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, words, wordIndex, typingSpeed, deleteSpeed, delay]);

    return (
        <span className="typing-advanced">
            {text}
            <span className="cursor">|</span>
        </span>
    );
}
