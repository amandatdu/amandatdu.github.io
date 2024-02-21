import { ArrowIcon } from "../assets/ArrowIcon";
import { HeartSVG } from "../assets/HeartSVG";
import { BannerBackground } from "../components/BannerBackground";
import { HighlightCard } from "../components/HighlightCard";
import { ROUTES } from "../components/NavBar";
import { StarBlock } from "../components/StarBlock";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__banner">
                <BannerBackground />
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
                        marginLeft: "-30%",
                    },
                }}
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
                    src: "/home/lcbo-devices.png",
                    alt: "iPhone and Macbook with LCBO case study on the screens",
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
                    style: {
                        marginLeft: "30%",
                    },
                }}
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
            />
        </div>
    );
};
