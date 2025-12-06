import { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======

export default function TypingEffect({ words, typingSpeed = 120 }) {
    const [text, setText] = useState("");
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517

    useEffect(() => {
        const currentWord = words;

        let timer;

<<<<<<< HEAD
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
=======
        timer = setTimeout(() => {
            setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, words, typingSpeed]);
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517

    return (
        <span className="typing-advanced">
            {text}
            <span className="cursor">|</span>
        </span>
    );
}
