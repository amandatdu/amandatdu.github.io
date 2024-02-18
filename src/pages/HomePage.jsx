import { useCallback, useRef } from "react";
import { ArrowIcon } from "../assets/ArrowIcon";
import { HeartSVG } from "../assets/HeartSVG";
import { HighlightCard } from "../components/HighlightCard";
import { ROUTES } from "../components/NavBar";
import { StarBanner } from "../components/StarBanner";
import { StarBlock } from "../components/StarBlock";
import { clamp, useAnimationFrame } from "../utils/helper";
import "./HomePage.css";

export const HomePage = () => {
    const refLength = 4;
    const wrapperRefs = useRef(Array(refLength));
    const imageRefs = useRef(Array(refLength));
    const prevRefs = useRef(Array(refLength).fill(0));

    const setRefHelper = useCallback(
        (ref, index) => (el) => {
            if (el) {
                ref.current[index] = el;
            }
        },
        []
    );

    // returns a value in [-1, 1] normalized to the image being in the center of the screen
    const computeScrollPercent = (ref) => {
        const scale =
            clamp(
                window.innerHeight -
                    ref.getBoundingClientRect()?.top -
                    ref.scrollHeight / 2,
                0,
                window.innerHeight
            ) / window.innerHeight; // animation should move for the full length of the page's visible height;
        return 100 * scale - 50;
    };

    const applyParallaxEffect = useCallback(
        (imageRef, percentage, setPrevPercentRef) => {
            setPrevPercentRef(percentage);
            imageRef.style.setProperty(
                "transform",
                `translate3d(0, ${(percentage / 100) * 300}px, 0)`
            );
        },
        []
    );

    const handleParallax = useCallback(
        (ref, imageRef, prevPercentRef, setPrevPercentRef) => {
            if (!ref || !imageRef) {
                return;
            }
            const percentage = computeScrollPercent(ref);
            // No need to update the translation if the screen hasn't scrolled
            if (prevPercentRef !== percentage) {
                applyParallaxEffect(imageRef, percentage, setPrevPercentRef);
            }
        },
        [applyParallaxEffect]
    );

    const scrollHandler = useCallback(() => {
        for (let i = 0; i < 4; i++) {
            handleParallax(
                wrapperRefs.current[i],
                imageRefs.current[i],
                prevRefs.current[i],
                (percent) => {
                    prevRefs.current[i] = percent;
                }
            );
        }
    }, [handleParallax]);
    useAnimationFrame(scrollHandler);

    // useEffect(() => {
    //     window.addEventListener("scroll", scrollHandler);

    //     return () => window.removeEventListener("scroll", scrollHandler);
    // }, [scrollHandler]);

    return (
        <div className="homepage">
            <div className="homepage__banner">
                <StarBanner />
                <HeartSVG id="banner" />
                <h3 className="color--vanilla-chocolate">
                    hi hello! thank you for visiting!
                </h3>
                <h1 className="h1--display color--acai-bowl">
                    <i className="color--blueberry-swirl">Amanda Du</i> is a
                    <i className="color--blueberry-swirl"> product designer </i>
                    <br /> all about designing experiences <br /> that make
                    people happy
                </h1>
            </div>
            <div className="homepage__banner__footer">
                <h3 className="h3--medium color--strawberry">
                    <b>Previously:</b> @ Intuit, Purolator, & LCBO
                </h3>
                <StarBlock />
                <h3
                    className="h3--medium color--strawberry"
                    style={{ justifySelf: "start" }}
                >
                    <b className="bold">Currently:</b> freelance designing!
                </h3>
            </div>
            <div className="homepage__divider">
                <h2>Lately I have...</h2>
                <ArrowIcon direction="down" />
            </div>
            <HighlightCard
                subtitle="Product design internship – 2022"
                title={
                    <>
                        Made filling taxes more <i>delightful</i>
                    </>
                }
                body={
                    <>
                        I redesigned <b>TurboTax Canada's</b> onboarding
                        experience. Want to read about how I reduced 78% of user
                        decisions and still gave them a confident experience?
                    </>
                }
                link={ROUTES.intuit}
                imageData={{
                    src: "/home/iphone.png",
                    alt: "iPhone",
                    background: (
                        <HeartSVG
                            id="turbotax"
                            className="blueToPink"
                            style={{ left: "50px" }}
                        />
                    ),
                }}
                wrapperRef={setRefHelper(wrapperRefs, 0)}
                contentRef={setRefHelper(imageRefs, 0)}
            />
            <HighlightCard
                subtitle="Product designer for NPO – 2021"
                title={
                    <>
                        <i>Streamlined</i> a messy donation process
                    </>
                }
                body={
                    <>
                        In May 2021, The Pregnancy Center came to us with a
                        problem: families in need are not receiving the donated
                        items requested.
                    </>
                }
                textPlacement="right"
                imageData={{
                    src: "/home/macbook-pro.png",
                    alt: "Macbook Pro",
                    background: (
                        <HeartSVG
                            id="tpc"
                            className="greenToBlue"
                            style={{ left: "50px" }}
                        />
                    ),
                    style: {
                        marginRight: "50%",
                    },
                }}
                wrapperRef={setRefHelper(wrapperRefs, 1)}
                contentRef={setRefHelper(imageRefs, 1)}
            />
            <HighlightCard
                subtitle="UX/UI Designer Co-op – 2021"
                title={
                    <>
                        <i>Discovered</i> a new way to receive user feedback
                    </>
                }
                body={
                    <>
                        With so many requests and not enough hands, the LCBO
                        innovation team took matters into our own hands and came
                        up with a better way to collect user issues and
                        feedback.
                    </>
                }
                imageData={{
                    src: "/home/iphone.png",
                    alt: "iPhone",
                    background: (
                        <>
                            <HeartSVG
                                id="lcbo"
                                className="greenToBlue"
                                style={{
                                    right: "-50%",
                                    bottom: "-25%",
                                    width: "248px",
                                }}
                            />
                            <HeartSVG
                                id="lcbo"
                                className="greenToBlue"
                                style={{
                                    left: "-50%",
                                    top: "-50%",
                                    width: "248px",
                                }}
                            />
                        </>
                    ),
                }}
                wrapperRef={setRefHelper(wrapperRefs, 2)}
                contentRef={setRefHelper(imageRefs, 2)}
            />
            <HighlightCard
                subtitle="Product designer for NPO – 2021"
                title={
                    <>
                        Helping mothers understand their <i>mental health</i>
                    </>
                }
                body={
                    <>
                        1 in 7 people suffer from postpartum depression, however
                        nearly half of these people don't get the help they
                        need.
                        <br />
                        <br />
                        Check out how we tackled this problem with
                        MomsOverMatter.
                    </>
                }
                textPlacement="right"
                imageData={{
                    src: "/home/macbook-pro.png",
                    alt: "Macbook Pro",
                    background: (
                        <HeartSVG
                            id="mom"
                            className="magentaToFade"
                            style={{ left: "-35%" }}
                        />
                    ),
                    style: {
                        marginRight: "50%",
                    },
                }}
                wrapperRef={setRefHelper(wrapperRefs, 3)}
                contentRef={setRefHelper(imageRefs, 3)}
            />
        </div>
    );
};
