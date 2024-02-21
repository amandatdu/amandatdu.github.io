import ProgressBar from "react-scroll-progress-bar";
import {
    CaseStudy,
    CaseHeader,
    CaseIntro,
    LinkButton,
} from "../components/CaseStudy";
import "./LCBOPage.css";
import { LCBOLogo } from "../assets/LCBOLogo";

export const LCBOPage = () => {
    const pageName = "lcbo";
    const themeColor = "var(--lcbo-primary)";
    const buttonThemeColor = "var(--lcbo-button)";

    return (
        <>
            <ProgressBar bgcolor="#FF6EA2" />
            <div className="lcboPage" style={{ "--case-theme": themeColor }}>
                <CaseHeader
                    caseName="lcbo"
                    title="LCBOdesk –
          streamlining user feedback"
                    children="UX/UI Co-op ☆ May 2021 – Aug 2021"
                    theme={pageName}
                />
                <CaseIntro
                    title="As the innovation team, its our job to help LCBO evolve."
                    collaborators={
                        <>
                            1 Product Manager
                            <br />
                            1 Product Designer
                            <br />
                            2 Developers
                            <br />
                        </>
                    }
                    team="LCBOnext Innovation"
                    theme={pageName}
                >
                    <h3>
                        This was my first UX/UI internship ever! All I wanted to
                        do was find problems I could help solve.
                    </h3>
                    At the beginning of our term, the team noticed an issue: we
                    rarely seem to receive our customer’s complaints or issues.
                    <br /> <br />
                    We were so eager to grow and learn, so we wanted to take
                    matters into our own hands and sought out different ways to
                    help LCBO. We noticed that a lot of our customers who have
                    issues never actually reach us. Everything keeps getting
                    lost in translation.
                    <br /> <br />
                    Due to NDA purposes, my case study can be found on the
                    LCBOnext website.
                </CaseIntro>

                <CaseStudy theme={pageName} buttonBar={true}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "-20%",
                        }}
                    >
                        <LinkButton
                            targetUrl="https://www.lcbonext.com/copy-of-inline-spotlight"
                            buttonText="Read my case study"
                            buttonColour={buttonThemeColor}
                        />

                        <LCBOLogo style={{ marginBlock: "56px" }} />
                    </div>
                    <div
                        style={{
                            height: "1px",
                            width: "811px",
                            backgroundColor: buttonThemeColor,
                            gap: "90px",
                        }}
                    />
                </CaseStudy>
            </div>
        </>
    );
};
