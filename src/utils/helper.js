import { useEffect, useRef } from "react";

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

export const restartAnimations = (element) => {
    for (const animation of document.getAnimations()) {
        if (
            animation.effect instanceof KeyframeEffect &&
            element.contains(animation.effect.target)
        ) {
            animation.cancel();
            animation.play();
        }
    }
};

export const useAnimationFrame = (callback) => {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef();
    const previousTimeRef = useRef();

    useEffect(() => {
        const animate = (time) => {
            if (previousTimeRef.current !== undefined) {
                const deltaTime = time - previousTimeRef.current;
                callback(deltaTime);
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [callback]); // Make sure the effect runs only once
};
