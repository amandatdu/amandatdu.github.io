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
