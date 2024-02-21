import { useContext } from "react";
import ProgressBar from "react-scroll-progress-bar";
import {
    CaseIntro,
    CaseHeader,
    CaseStudy,
    SkipButton,
    CaseHMW,
} from "../components/CaseStudy";
import { ThemeContext } from "../utils/ThemeContext";
import "./IntuitPage.css";

export const IntuitPage = () => {
    const pageName = "intuit";
    const themeColor = "var(--intuit-primary)";
    const { isLightMode } = useContext(ThemeContext);

    return (
        <>
            <ProgressBar bgcolor="#FF6EA2" />
            <div className="intuitPage" style={{ "--case-theme": themeColor }}>
                <CaseHeader
                    caseName="intuit"
                    logo={<img src="intuit/logo.png" alt="<Intuit logo>" />}
                    title="Redesigning the tax profile"
                    children="Product Design intern ☆ Jan 2022 – Aug 2022"
                    theme={pageName}
                />

                <CaseIntro
                    title="Filing taxes can be scary."
                    collaborators={
                        <>
                            Developers
                            <br />
                            Content Designer
                            <br />
                            Tax Experts
                            <br />
                        </>
                    }
                    team="Intuit Canada TurboTax"
                    theme={pageName}
                >
                    <h3>
                        Especially when you’re welcomed by a 220+ questions long
                        quiz about your financial situation!
                    </h3>
                    My first project at Intuit was{" "}
                    <b>
                        the end to end redesign of the tax profile experience.
                    </b>
                    <br /> <br />
                    The tax profile captures the overview of a customer’s tax
                    situation. This information is used to create personalized
                    tax interviews and gives users’ confidence their specific
                    tax situation is recognized. I wanted to make sure this
                    process was as delightfully and trusting as possible.
                </CaseIntro>

                <CaseStudy
                    image={
                        <img
                            src="intuit/legacyvsredesign.png"
                            alt="<Intuit's legacy product vs my redesign>"
                        />
                    }
                    title="Impact"
                    theme={pageName}
                >
                    I am proud to say I{" "}
                    <b>reduced the amount of questions by 78%</b>; from 220+ to
                    a mere 50. Through{" "}
                    <b>
                        {" "}
                        content strategy, product thinking, created new design
                        system components, and drastically improved the visual
                        design,{" "}
                    </b>{" "}
                    I was able to{" "}
                    <b>
                        {" "}
                        increase confidence, delight, and trust in our users.{" "}
                    </b>
                    <br /> <br /> According to user testing results and other
                    forms of preliminary measurements, I was able to{" "}
                    <b>
                        {" "}
                        satisfy all 5 success metrics: increased user
                        satisfaction, less time spend on experience, lowered
                        drop off rates, and increased accuracy.{" "}
                    </b>
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/sneakpeak.png"
                            alt="<Intuit sneak peak>"
                        />
                    }
                    buttonBar={true}
                    theme={pageName}
                    hideBorder
                >
                    <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <p
                            style={{
                                marginRight: "15%",
                                marginLeft: "15%",
                                textAlign: "center",
                            }}
                            className={`color--${pageName}`}
                        >
                            {
                                "This case is a lengthy read, so in case you don’t want to scroll, here are some shortcuts :)"
                            }
                        </p>
                        <br />
                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                flexWrap: "noWrap",
                            }}
                        >
                            <SkipButton
                                targetId="productThinking"
                                buttonText="See my product thinking"
                                buttonColour={themeColor}
                            />
                            <SkipButton
                                targetId="visualDesign"
                                buttonText="View my visual design"
                                buttonColour={themeColor}
                            />
                            <SkipButton
                                targetId="finalProduct"
                                buttonText="Skip to final product"
                                buttonColour={themeColor}
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                        <div
                            style={{
                                height: "1px",
                                width: "100%",
                                backgroundColor: themeColor,
                            }}
                        />
                    </div>
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/problemspaceintuit.png"
                            alt="<Legacy designs>"
                        />
                    }
                    title="Problem Space"
                    theme={pageName}
                >
                    One of Intuit’s core principles is customer obsession.{" "}
                    <b>
                        {" "}
                        The tax profile is one of the first points of contact
                        with the user, we needed this to leave a lasting
                        impression on our customers.{" "}
                    </b>
                    <br /> <br />
                    Currently{" "}
                    <b> the tax profile did not tap into user emotion.</b> We
                    need to leverage emotive design principles to ensure
                    customer trust and satisfaction.
                    <br /> <br />
                    UI wise,{" "}
                    <b>the tax profile was visually extremely out of date </b> –
                    many screens did not adhere to Intuit’s most recent
                    development platform. The screens are{" "}
                    <b> extremely content heavy, </b> which lead to{" "}
                    <b>poor user comprehension and decreased user accuracy. </b>
                    <br /> <br />
                    <b>
                        With all of this said, tax profile actually had the one
                        of highest user drop off rate in the whole product.
                    </b>
                    That needed to change.
                </CaseStudy>

                <CaseHMW
                    title="DESIGN CHALLENGE"
                    HMWstatement="How might we create a delightful and frictionless tax profile experience so drop off rates and customer satisfaction are improved?"
                />

                <CaseStudy
                    image={
                        <img
                            src="intuit/successmetrics.png"
                            alt="<Project goals>"
                        />
                    }
                    title="Success Metrics"
                    theme={pageName}
                >
                    To better align my goals, I came up with quantifiable
                    challenges. These are the success metrics what I came up
                    with:
                    <br /> <br />
                    <b>User emotions</b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            {" "}
                            Will users feel more trusting, confidence, and
                            delighted when using the new design?
                        </li>
                    </ul>
                    <br />
                    <b>Drop off rates</b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            Will less people drop off of our product during the
                            tax profile experience with the new design?
                        </li>
                    </ul>
                    <br />
                    <b>Accuracy</b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            Will users enter more accuracy information about
                            their tax situation with our new design?
                        </li>
                    </ul>
                    <br />
                    <b>Time spent on page</b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            Will users spend less time in the tax profile with
                            our new design?
                        </li>
                    </ul>
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/intuitprocess.png"
                            alt="<Design process>"
                        />
                    }
                    title="Project process"
                    isFullImage={true}
                    theme={pageName}
                >
                    This was the process I followed. Design wise, this was a lot
                    to handle. To make it more digestible, I decided to break
                    down the design process into 3 perspectives –{" "}
                    <b>
                        {" "}
                        content design, product strategy, and visual design.{" "}
                    </b>
                    <br /> <br />I knew that the user journey as well as visual
                    design depended heavily on the content, so I started with
                    that perspective first.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/Contentdesign.png"
                            alt="<WIPS of my content design work>"
                        />
                    }
                    title="Content strategy"
                    theme={pageName}
                >
                    One of the biggest issues in this experience is the number
                    of questions users are forced to answer.{" "}
                    <b>There was 220+ questions being asked. </b>
                    <br /> <br />
                    Every tax situation is unique, depending on the users’, some
                    questions don’t need to answered or even asked.{" "}
                    <b>
                        My goal was to show users the minimum number of
                        questions per situation.
                    </b>
                    <br /> <br />
                    Thus, I sat down with my lovely content strategist, and got
                    to work. Our first step was to find all the questions, and
                    break them down into{" "}
                    <b>
                        {" "}
                        categories recognized by users, rather than how tax
                        experts would sort them.{" "}
                    </b>
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/Whattoasktheuser.png"
                            alt="<Information hiearchy of my questions>"
                        />
                    }
                    title="What to ask the user"
                    theme={pageName}
                >
                    While working closely with my tax expert and my content
                    strategist, we noticed a pattern in some of the questions,
                    and determined that there are 2 types of questions:
                    <ol
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            L1 questions: questions that must be asked{" "}
                        </li>
                        <li className="p">
                            L2 questions: questions that depend on a L1 question
                            <ul
                                style={{
                                    paddingLeft: "24px",
                                }}
                            >
                                <li className="p">
                                    L3 questions are the same L2, but they’d
                                    depend on an L2
                                </li>
                            </ul>
                        </li>
                    </ol>
                    This concept came in super handy when discussing different
                    user paths.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/Taxpayersjourney.png"
                            alt="<WIP of all product flows I created>"
                        />
                    }
                    title="Tax payer's journey"
                    theme={pageName}
                >
                    Once I sorted through the content, I approached this from a
                    product design perspective.{" "}
                    <b>
                        Although there was a ton of questions, a lot of these
                        questions still needed answering.{" "}
                    </b>{" "}
                    But presenting so many questions during onboarding is too
                    overwhelming for new users.
                    <br /> <br />
                    Then I asked myself:
                    <b>
                        {" "}
                        What if we asked more questions through out the product
                        rather than pile everything at the beginning?{" "}
                    </b>{" "}
                    If users are already expecting to answer so many, what’s a
                    couple more every section going to do?
                    <br /> <br />
                    <b>
                        That’s when I got creative with rearranging the product
                        flows.
                    </b>
                    <br /> <br />I had so much fun here and came up with out of
                    the box ideations to consider all the options. Too bad I had
                    to filter some of them based on scope :(
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            className="caseImage"
                            src="intuit/Mainandminiprofiles.png"
                            alt="<Final user path>"
                        />
                    }
                    title="Main and mini profiles"
                    theme={pageName}
                >
                    After my exploration, I settled on this idea of having a
                    Main tax profile and mini tax profiles.
                    <br /> <br />
                    This concept is where all L1 questions are put in the main
                    profile (onboarding), and all L2+ questions will appear in
                    smaller intro section proceeding an tax form experience.
                    <br /> <br />
                    <b>
                        To validate my decision, I presented this idea to my
                        design team and other stakeholders (the head of
                        product). Fortunately it was approved and deemed as the
                        ideal state.
                    </b>
                    <br /> <br />
                    Now it was time for visual design.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            className="caseImage"
                            src="intuit/Outsideinresearch.png"
                            alt="<Screenshots of products I took inspiration from>"
                        />
                    }
                    title="Outside in research"
                    theme={pageName}
                >
                    I really got creative with the type of products I looked at
                    for visual inspiration. I wanted to focus on products that
                    had an intensive onboarding process and tapped into emotive
                    design –{" "}
                    <b> what better products to look at than dating apps!!</b>
                    <br /> <br />
                    <b>
                        They need a bunch of information from users to get
                        started, and somehow keeps the excitement going
                        throughout the process!{" "}
                    </b>
                    <br /> <br />
                    Now I know taxes isn’t nearly as fun as dating, but we still
                    wanted to borrow some of their emotive techniques!
                    <br /> <br />
                    Source: screenshots from Bumble, Noom, Airbnb, And Hinge.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/visualiterationsintuit.png"
                            alt="<All the visual rejections I went through>"
                        />
                    }
                    isFullImage={true}
                    title="Pivoting from our plan"
                    theme={pageName}
                >
                    In the midst of my excitement for new visual designs, I was
                    hit with more requirements from our stakeholders.
                    <br /> <br />
                    We were requested that TurboTax Canada mirror the American
                    one.{" "}
                    <b>
                        {" "}
                        The US product was doing extremely well, and so it was
                        smart for the Canadians to adopt some of their design
                        patterns.{" "}
                    </b>
                    <br /> <br />
                    Additionally, I wanted to{" "}
                    <b>pitch the idea of the multi select button</b> to my
                    Design systems team – but unfortunately I learned that my
                    manager had tried to pitch{" "}
                    <b>a similar idea months prior and got denied.</b> I needed
                    a new approach.
                    <br /> <br />
                    (p.s. look at all my visual design rejects above :( )
                </CaseStudy>

                <CaseStudy
                    image={
                        <video autoPlay muted loop>
                            <source
                                src="intuit/usproductaudit.mov"
                                type="video/mp4"
                            />
                            Your browser does not support HTML video.
                        </video>
                    }
                    title="Pivoting from our plan"
                    theme={pageName}
                >
                    I wanted to understand the US product more. Here’s a video
                    of me analyzing the it, I saw that there was a big flaw in
                    its design.
                    <br /> <br />
                    <b>
                        The icons that were hidden under the ‘see more’ tab were
                        visually less important, but in reality held similar
                        value as the ones that were visible.
                    </b>
                    <br /> <br />
                    This was a design I really wanted to avoid, so I got working
                    on a design compromise.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/segmenteddesign.png"
                            alt="<Visualization of my segmented experience>"
                        />
                    }
                    title="Segmented design"
                    theme={pageName}
                >
                    I knew the “see more” button was poor design, so I came up
                    with a new design to accommodate. My idea is to present
                    multi select options in user friendly non-tax categories
                    across several pages –{" "}
                    <b>
                        I call this the Segmented experience.
                        <br /> <br />
                        This design allows for all options to have the same
                        visual importance.
                    </b>{" "}
                    We have also grouped all the tiles in familiar life related
                    categories so users of any tax experience can understand
                    what they’re inputting.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/finalflow.png"
                            alt="<The final user flow of my experience, as well as the final mobile designs>"
                        />
                    }
                    isFullImage={true}
                    title="UI decision making"
                    theme={pageName}
                >
                    Despite not loving the ‘see more’ design, the multi select
                    buttons used in the US product were really similar to the
                    outside in results; I decided to borrow that idea.
                    <br /> <br />
                    <b>
                        It was also at this time I learned that nearly 40% of
                        Canada’s population are illiterate, so I knew I had to
                        include icons of some sort to aid them.{" "}
                    </b>
                    <br /> <br />I also included some summary screens and
                    information for users to learn more about their situation.
                </CaseStudy>

                <CaseStudy
                    image={
                      <video autoPlay muted loop>
                          <source
                              src="intuit/Intuitprototypevid.mov"
                              type="video/mp4"
                          />
                          Your browser does not support HTML video.
                      </video>
                    }
                    title="Data driven pitch"
                    theme={pageName}
                    hideBorder={isLightMode}
                >
                    <b>
                        I knew simply pitching my idea to stakeholders wasn’t
                        enough; it needed to be backed up by data.
                    </b>{" "}
                    I prototyped a mirror version of the US product (This will
                    be referred to as US tiles) but with Canadian content, as
                    well as my own improved design – <b>the Segmented tiles.</b>
                    <br /> <br />I wanted to proven that hiding tiles under ‘see
                    more’ would result in decreased accuracy (user missing
                    tiles) and confidence (users feeling down because they can’t
                    find their specific situation).
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/resultsabtesting.png"
                            alt="<Results of my AB testing>"
                        />
                    }
                    title="AB testing results"
                    theme={pageName}
                >
                    <b>I conducted AB tests with 20 Canadian participants. </b>
                    Each participant was given a made up tax situation, and they
                    had to file according to the profile. I made sure to have an
                    even number of male and female participants. I switched the
                    order of the prototypes for half of the tests to ensure that
                    there was no order bias in the results. The KPIs I was
                    measure were the following:
                    <br /> <br />
                    <b>Accuracy </b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            Did the users input the correct tiles?
                        </li>
                    </ul>
                    <br />
                    <b>User emotions</b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            Did they feel confident using our product?
                        </li>
                    </ul>
                    <br />
                    <b>Preference</b>
                    <ul
                        style={{
                            paddingLeft: "24px",
                        }}
                    >
                        <li className="p">
                            Which of the two design did they prefer?
                        </li>
                    </ul>
                    <br />
                    <b>Safe to say the segmented tiles are a winner!</b>
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/desktopfinal.png"
                            alt="<Final mockups of my desktop design>"
                        />
                    }
                    isFullImage={true}
                    title="Final product"
                    idName="finalProduct"
                    theme={pageName}
                >
                    I reimagined a tedious questionnaire to a visually
                    delightful and frictionless process for users to provide
                    information about their tax situation.
                    <br /> <br />
                    <b>
                        I reduced a 220+ question form into 50 question form – a
                        78% decrease.
                    </b>{" "}
                    Readability, comprehension, and drop off rates are predicted
                    to be severely improved as well. I am so proud to say I have
                    created such an impact.
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/mobilefirstfinal.png"
                            alt="<Final mockups of mobile design>"
                        />
                    }
                    isFullImage={true}
                    title="Mobile first designs"
                    theme={pageName}
                >
                    Turbotax is usually used on a desktop device – however we
                    still wanted to design mobile first for best practices, so
                    most of our designs are iterated on mobile screen. I’m happy
                    to say my experience is ergonomically friendly for mobile
                    users!
                </CaseStudy>

                <CaseStudy
                    image={
                        <img
                            src="intuit/learningsandtakeaways.png"
                            alt="<the friends i met along the way>"
                        />
                    }
                    title="Learnings & Takeaways"
                >
                    <h3>
                        <b>The use of success metrics</b>
                    </h3>
                    <br />
                    I got a taste of how to use success metrics when designing,
                    and now I feel way more intentional when I design. I've
                    always interpreted “good UI” as a qualitative measure – as
                    long as my users are happier using my interface then I have
                    succeed. I’ve learned that being able to constantly measure
                    your work adds so much more value and purpose to your
                    actions.
                    <br /> <br />
                    <h3>
                        <b>Being creative with product strategy</b>
                    </h3>
                    <br />
                    Coming from a graphic design background, I've always thought
                    the only place a product designer can be creative is with
                    the visuals. From this experience, I’ve learned the power of
                    being creative during the product thinking phase. When I was
                    tasked with the onboarding redesign project, I took the
                    opportunity to explore different ways of approaching it:
                    rather than redesigning it, I thought I could reorganize or
                    even reimagine the flows.
                    <br /> <br />
                    <h3>
                        <b>Constant usability testing</b>
                    </h3>
                    <br />
                    At my previous experiences, user testing was a luxury. I was
                    never given the opportunity to test my work as I go; it was
                    usually something we used to ‘double check’ our solution.
                    When making decisions in the past, I would rely on secondary
                    research. At Intuit, I was lucky enough to take advantage of
                    a ton of user testing; having your designs validated by real
                    time users is so fulfilling.
                </CaseStudy>
            </div>
        </>
    );
};
