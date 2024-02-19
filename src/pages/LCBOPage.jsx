import ProgressBar from "react-scroll-progress-bar";
import { CaseStudy } from "../components/CaseStudy";
import { CaseIntro } from "../components/CaseStudy";
import { SkipButton } from "../components/CaseStudy";
import "./LCBOPage.css";

export const LCBOPage = () => {
  return (
    <>
    <ProgressBar bgcolor="#FF6EA2"/>
    <div className="intuitPage">
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
      >
        <h3>
          This was my first UX/UI internship ever! All I wanted to do was find problems I could help solve.
        </h3>
        At the beginning of our term, the team noticed an issue: we rarely seem to receive our customer’s complaints or issues.
        <br /> <br />
        We were so eager to grow and learn, so we wanted to take matters into our own hands and sought out different ways to help LCBO. We noticed that a lot of our customers who have issues never actually reach us. Everything keeps getting lost in translation.
        <br /> <br />
        Due to NDA purposes, my case study can be found on the LCBOnext website.
      </CaseIntro>










    </div>
    </>
  );
};
