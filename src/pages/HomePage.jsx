import { HighlightCard } from "../components/HighlightCard";
import "./HomePage.css";
import { HeartSVG } from "../assets/HeartSVG";
import { StarBlock } from "../components/StarBlock";
import { ArrowIcon } from "../assets/ArrowIcon";

export const HomePage = () => {
    const fallbackImage = (
        <div
            style={{
                background: "red",
                width: "200px",
                height: "360px",
            }}
        />
    );
    return (
        <div className="homepage">
            <div className="homepage__banner">
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
                image={
                    <>
                        {fallbackImage}
                        <HeartSVG
                            id="turbotax"
                            className="blueToPink"
                            style={{ left: "50px" }}
                        />
                    </>
                }
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
                image={
                    <>
                        {fallbackImage}
                        <HeartSVG
                            id="tpc"
                            className="greenToBlue"
                            style={{ left: "50px" }}
                        />
                    </>
                }
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
                image={
                    <>
                        {fallbackImage}
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
                }
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
                image={
                    <>
                        {fallbackImage}
                        <HeartSVG
                            id="mom"
                            className="magentaToFade"
                            style={{ left: "-35%" }}
                        />
                    </>
                }
            />
        </div>
    );
};
