import { CaseStudy } from "../components/CaseStudy";
import "./IntuitPage.css";

export const IntuitPage = () => {
    return (
        <div className="intuitPage">
        <CaseStudy
            image= <img className="caseImage" src="/legacyvsredesign.png" alt="<Intuit's legacy product vs my redesign>"/>
            title="Impact"
            description="I am proud to say I reduced the amount of questions by 78%; from 220+ to a mere 50. Through content strategy, product thinking, created new design system components, and drastically improved the visual design,  I was able to increase confidence, delight, and trust in our users. According to user testing results and other forms of preliminary measurements, I was able to satisfy all 5 success metrics: increased user satisfaction, less time spend on experience, lowered drop off rates, and increased accuracy."
        />
        </div>
    );
};
