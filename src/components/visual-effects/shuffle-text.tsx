import { useCallback, useState, useRef } from 'react';

const DURATION = 200;
const SHUFFLE_PATTERN = /\p{Extended_Pictographic}|\r|\n|./gu;

function shuffleElementText(originalText: string) {
    const words = originalText.replace(/\n/, ' \n ').split(' ');
    for (let i = 0; i < words.length; i++) {
        const chars = [...words[i].matchAll(SHUFFLE_PATTERN)].map((item) => item[0]);
        words[i] = chars.sort(() => Math.random() - 0.5).join('');
    }
    return words.join(' ');
}

export const ShuffleText = ({
    text,
    charShuffleDelay = 50,
}: {
    text: string;
    charShuffleDelay?: number;
}) => {
    const [displayText, setDisplayText] = useState(text);
    const isShuffling = useRef(false);

    const startShuffling = useCallback(() => {
        const originalText = text;
        if (isShuffling.current) return;

        isShuffling.current = true;
        const totalFrames = Math.floor(DURATION / charShuffleDelay);
        let currentFrame = 0;

        const interval = setInterval(() => {
            if (currentFrame < totalFrames) {
                setDisplayText(shuffleElementText(originalText));
                currentFrame++;
            } else {
                clearInterval(interval);
                setDisplayText(originalText);
                isShuffling.current = false;
            }
        }, charShuffleDelay);
    }, [text, charShuffleDelay]);

    return (
        <span
            onMouseEnter={startShuffling}
            onMouseLeave={() => !isShuffling.current && setDisplayText(text)}
        >
            {displayText}
        </span>
    );
};
