import { StarBlock } from "../components/StarBlock";
import { StarBanner } from "../components/StarBanner";
import "./DiaryPage.css";

export const DiaryPage = () => {
    const formatCategory = (name) => (
        <div className="h1">
            <i>{name}</i>
        </div>
    );
    const formatEntry = (name, start, end, title) => (
        <div className="diarypage__resume__entry">
            <h3 className="color--blueberry-swirl">
                <b>{name}</b>
            </h3>
            <h3 className="color--acai-bowl">{title}</h3>
            <h3 className="color--acai-bowl">
                {start.toUpperCase()} - {end.toUpperCase()}
            </h3>
        </div>
    );

    return (
        <div className="diarypage">
            <div className="diarypage__banner">
                <StarBanner />
                <img src="/portrait.png" alt="Amanda Du" />
                <div className="diarypage__banner__content">
                    <h1>
                        <i>hi! nice to meet you! ♡ ⋆｡˚</i>
                    </h1>
                    <h3>
                        I'm Amanda Du, but my friends call me amanda or just du!
                    </h3>
                    <h3>
                        As an <b>ENFP</b>, I really value the
                        <b> empathy and compassion </b>
                        that comes with design thinking. I love collaborating
                        with teams to
                        <b> create beautiful and thoughtful experiences</b> that
                        make people happy.
                    </h3>
                    <h3>
                        When I'm not designing, I am hobby-ing. Meaning, I am
                        either reading, drawing, shopping, on Pinterest, or at
                        the gym... the list goes on.
                        <b>
                            {" "}
                            I simply love learning and picking up new
                            information and skills.
                        </b>
                    </h3>
                    <h3>
                        But if there's one thing you should know about me is
                        that I am always always trying my best :)
                    </h3>
                    <h3>
                        If you think we'd get along, <b>let's chat</b>!
                    </h3>
                </div>
            </div>
            <div className="diarypage__divider">
                <h3>
                    If you're interested in my community work, or my experience
                    – please keep scrolling &lt;3
                </h3>
                <StarBlock />
            </div>
            <div className="diarypage__resume">
                {formatCategory("education")}
                {formatEntry("University of Waterloo", "sept 2018", "jun 2023")}
                <div className="diarypage__resume__description">
                    <h3>
                        Bachelors of Global Business and Digital Arts (B.GBDA.)
                    </h3>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="h3">Dean's Honour's List</li>
                    </ul>
                </div>

                {formatCategory("experience")}
                {formatEntry(
                    "Freelance",
                    "apr 2020",
                    "present",
                    "Product designer"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        <b>
                            Helping clients find a voice, creating UI & brand
                            identity for several start ups.
                        </b>
                    </h3>
                    <h3>
                        Startups include: Supergood, DM AI, TheFan'sPlace,
                        lleTTonna
                    </h3>
                </div>

                <div />
                {formatEntry(
                    "Intui",
                    "jan 2022",
                    "aug 2022",
                    "Product Design Intern"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        Led the redesign of <b>TurboTax Canada's</b> onboarding
                        experience; <b>reducing user decisions by 78%</b>. To
                        ensure success metrics were met, <b>A/B tests</b> were
                        conducted and resulted in
                        <b> 65% preference for my redesign</b>.
                    </h3>
                </div>

                <div />
                {formatEntry(
                    "Purolator",
                    "sept 2022",
                    "dec 2022",
                    "Product Design Co-op"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        Led the redesign of <b>TurboTax Canada's</b> onboarding
                        experience; <b>reducing user decisions by 78%</b>. To
                        ensure success metrics were met, <b>A/B tests</b> were
                        conducted and resulted in
                        <b> 65% preference for my redesign</b>.
                    </h3>
                </div>

                <div />
                {formatEntry("LCBO", "may 2021", "aug 2021", "UI/UX Co-op")}
                <div className="diarypage__resume__description">
                    <h3>
                        Spearheaded creative direction for a web app widget that
                        revolutionized LCBO's user feedback process. Conducted
                        <b> AODA compliance audit</b> to ensure applications are
                        user friendly and accessible.
                    </h3>
                </div>

                <div />
                {formatEntry(
                    "Waterloo University Student Association",
                    "jan 2020",
                    "mar 2020",
                    "Graphic Designer"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        Created weekly social media graphics for UWaterloo’s
                        Student Association. Strategic graphic design
                        initiatives resulted in a{" "}
                        <b>15% increase in engagement</b> and following.
                    </h3>
                </div>

                {formatCategory("community")}
                {formatEntry(
                    "UW Blueprint",
                    "jan 2022",
                    "dec 2022",
                    "VP Design, Design Ops"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        Led a team of 15 designers across 5 project teams to
                        partner with NPOs and create technology for social good.
                    </h3>
                </div>

                <div />
                {formatEntry(
                    "UW Blueprint",
                    "may 2021",
                    "dec 2022",
                    "Product Designer"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        Shipped a streamlined communication platform for The
                        Pregnancy Centre.
                    </h3>
                    <h3>
                        Led the digitalization of Sistering’s HR management
                        system.
                    </h3>
                </div>

                <div />
                {formatEntry(
                    "Starterhacks",
                    "dec 2019",
                    "feb 2020",
                    "Graphic Designer"
                )}
                <div className="diarypage__resume__description">
                    <h3>
                        Brought mascots to life for Hackathon campaign which was
                        then printed on 3000+ T-shirts & name tags
                    </h3>
                </div>
            </div>
        </div>
    );
};
