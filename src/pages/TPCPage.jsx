import { CaseStudy } from "../components/CaseStudy";
import { CaseIntro } from "../components/CaseStudy";
import { SkipButton } from "../components/CaseStudy";
import "./TPCPage.css";

export const TPCPage = () => {
    return (
        <div className="tpcPage">
        <CaseIntro
            title="I love designing for social good."
            collaborators={<>
              1 Product Manager
              <br />
              10 Developers
              <br />
              3 Product designers
              </>}
            team="UW Blueprint student team"
        >
          <h3>The Pregnancy Centre is a non-profit organization that supports people experiencing unplanned pregnancies.</h3>
          The Pregnancy Centre came to us with a problem: <b>families weren’t getting the items they need due to the messy nature of manually facilitating donations.</b>
          <br/> <br/>

          Thus UW Blueprint (a student run NPO that strives to make technology accessible for social good) took The Pregnancy Center on as a client with the promise of solving their complicated donation process.
        </CaseIntro>

          <CaseStudy
              image= <img src="tpc/impact.png" alt="<My impact of our product>"/>
              title="Impact"
          >
          <b>The Care Hub was released in August 2021</b> and is currently used by The Pregnancy Centre staff.
          <br/>
          The Care hub is projected to assist The Pregnancy Centre's <b>700+ regular donors and help even more families in need.</b>
          <br/>
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/sneakpeek.png" alt="<This is a quick peek of my final product>"/>

              title="null"
          >
          null
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/problemspace.png" alt="<Diagram of The Pregnancy center's problems>"/>
              title="Problem space"
          >
          <b>The Pregnancy Center staff manually facilitates the donation process.</b> This would involve a ton of channels – from social media, all the way to their own database. As one can imagine, <b>things got really messy, really fast </b>– messages kept getting lost in translation.
          <br /><br />
          Our team created a web application called the Care hub. This allows for The Pregnancy Centre staff and their donors to seamlessly communicate.
          <br /><br />
          This platform is designed to have an admin facing side where The Pregnancy Centre staff could notify donors on the items they need. There is also a donor facing site that allows donors to see these items.
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/talkingthroughthecarehub.png" alt="<Image of MVP with a button that says 'email us'>"/>
              title="Communicating via Care Hub"
          >
          When I joined, <b>the Care hub did not have any means for donors to communicate with the staff.</b> To let them know they have an item, donors would have to email the The Pregnancy Centre staff - which means they would have to communicate via another channel, which we want to avoid.
          <br/> <br/>

          So here’s where I come in!

          </CaseStudy>


          <CaseStudy
              image= <img src="tpc/Process.png" alt="<How my project went>"/>
              title="Project process"
              isFullImage={true}
          >
          A lesson I learned from this project was the importance of highlighting my process.
          <br/> <br/>
          One of my favourite parts of this project was how collaborative it was. Iterating on feedback from not just my client and designers, but also my developer friends was such a blessing. I learned so much about how developers think and how to design for edge cases. Cross functional collaboration was definitely the best part of this project!
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/understandingthedonors.png" alt="<User profiles>"/>
              title="Understanding the donors"
          >
          User empathy is so important when it comes to user experience design.  I collaborated with the product manager and to understand who I'm designing for. I quickly learned that there are three distinct user groups who I need to empathize with.
          <br/> <br/>
          <b>We then started writing user stories and putting together a product specification document.</b> I constantly referred back to this document to make sure I considered all the users pain points and needs while designing.
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/modulevsfullscreen.png" alt="<WIP of all product flows I created>"/>
              title="Module vs full screen"
          >
          I moved onto visual design once I understood who I was designing for.
          <br/> <br/>
          The information received from the donor <b>must be extremely specific</b>, so I knew right away that <b>we had to get this information with a form.</b> That took me to my next decision:<b> How do we present this form? </b>
          <br/> <br/>
          The mental model of a modal is very temporary – people don’t typically spend time on pop ups. The donation form is an integral part of the streamlining of the donation process, so donors must spend time on this in order for The Pregnancy Center to obtain the information they need.
          <br/> <br/>
          So we decided to go with the full page form!
          </CaseStudy>

          <CaseStudy
              image= <img className="caseImage" src="tpc/developerlimitations.png" alt="<WIP of the dvelopers and I whiteboarding possible development issues>"/>
              title="Development limitations"
          >
          One of the challenges I faced was learning to work with developers. In the midst of my design efforts, we were interrupted by a frantic call from our developers. They wanted to warn us about the problem with inventory.
          <br/> <br/>

          As a designer, I assumed every item that passes through The Pregnancy Centre would have a unique identifiable code of sorts. But the developers knew it was nearly impossible (iykyk). They instructed us to ensure that there is no sign of ‘identification’ on any of the item as it is too difficult to track them to such a degree. This was something I had to keep in mind when designing.
          </CaseStudy>

          <CaseStudy
              image= <img className="caseImage" src="tpc/whichwaywillwego.png" alt="<Video>"/>
              title="Which way will we go?"
          >
          When I hopped back to designing, the next question I asked was: <b>Which way do I want the user to navigate? </b>
          <br/> <br/>

          Do I want them to vertically scroll for the form? Or do I want them to go through pages?
          <br/> <br/>

          Presenting a ton of questions upfront is always daunting. <b>So I decided to separate the questions on 3 different pages, rather than have donors scroll vertically. </b>This also helps the backend software save the inputed data at multiple points.
          <br/> <br/>

          Additionally, a big portion of <b>donor are older folks</b> – they are definitely less tech savvy and feel better when everything is visible on the screen!
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/thebattleofthesteppers.png" alt="<Horizontal stepper criticism>"/>
              title="The battle of the steppers"
          >
          We debated between a horizontal vs vertical stepper. I conducted a ton of outside in research to really validate my decision. A horizontal stepper visually works very well if we want users to scroll while filling out the form. It’s also very common for forms to have a horizontal stepper when there are a lot of questions.
          <br/> <br/>
          Our form is not that extravagant and really only had two major sections, so the horizontal stepper didn’t make sense.<b> The main purpose of this stepper was to show how fast and easy our donation process was.</b>
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/verticalstepperwins.png" alt="<Vertical stepper UI and feedback>"/>
              title="Vertical stepper wins"
          >
          <b>The vertical stepper was the winner!</b>
          <br/> <br/>
          This design was much more visually appealing, and it follows how people naturally read – from left to right. I applied the <b>Z pattern, so users are comfortably viewing all the key information,</b> such as the titles, stepper, and lastly the form. Additionally, each page has the minimum number of questions that a donor must see – this design will ensure accuracy and speed.
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/formuidesign.png" alt="<UI example of how I designed my forms>"/>
              title="Form UI design"
          >
          When it came to designing this form, it was key to understand what information The Pregnancy centre needed from its donors. <b>Through bi-weekly syncs with our client, we were able to get a good understand of the key information they need from the donors: </b>
          <ul
              style={{
                  paddingLeft: "24px",
              }}
          >
              <li className="p"><b>Donor info</b></li>
              <li className="p"><b>Type of item</b></li>
              <li className="p"><b>Quantity</b></li>
              <li className="p"><b>Condition of item</b></li>
              <li className="p"><b>How old the item is</b></li>
          </ul>
          <br /><br />
          Each piece of information had its own constraints, so I spent a lot of time thinking about how each information should be collected; what kind of form fields should we use for each question?
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/searchfuncitionality.png" alt="<video>"/>
              title="Search Funcitionality"
          >
          <b>An example of a form field that required a lot of consideration was the item field.</b>
          <br /><br />
          We can’t have people donating random items that mothers don’t need. Like mugs or video games - you can give them to me instead ☺!
          <br /><br />
          <b>We decided to limit users by giving them items to choose from a pre-regenerated list created directly from The Pregnancy centre’s database.</b>
          <br /><br />
          The drop down menu will appear before the user starts typing. The order of which items show up will be alphabetical. When a donor types in what they want to donate, the drop down list will change to match the donor’s input.
          <br /><br />
          In the edge case where a donor’s item is not found in the database, they will be able to create their own entry. However this item will be tagged as an unusual item on The Pregnancy Centre’s side.
          </CaseStudy>

          <CaseStudy
              image= <img src="intuit/resultsabtesting.png" alt="<video>"/>
              title="Prototyping"
          >
          <b>At this point I wanted to gather feedback from donors. I prototyped the MVP and got it ready for user testing. </b>
          <br /><br />
          This was by far one of the most creative usability tests I've run. We wanted to simulate a realistic donation process; we created this environment by sending our testers images of baby images, and then asked them to donate it through the prototype.
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/testingresults.png" alt="<Findings from my user testing sessions>"/>
              title="Testing results"
          >
          Overall, the donors were able to get through the experience without any visible frustration. However, users had a lot of trouble understanding that they must ‘Add  item’ in order to move forward.
          <br /><br />
          This process is meant to super straightforward – this is an issue we needed to solve..
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/finaliteration.png" alt="<Mock up of the final iteration I made based on the testing resultsn>"/>
              title="Final iteration"
          >
          I took the feedback from testing and creating the final iteration.
          <br /><br />
          A lot of the confusion was content related; the language used in the design was not clear. For instance, instead of naming the button 'Add item', I changed it to 'Save item'. Now users know that hitting the button was mandatory in the experience.
          <br /><br />
          The biggest change was adding a counter in the bottom left corner. This small detail provided instant feedback for the user, thus providing more reassurance throughout the experience.          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/finaliteration.png" alt="<Final product part 1>"/>
              title="Final product"
          >
          I am so proud to have simplified such a messy experience into this. My final design consisted of a 3 step form that allowed users to first input their contact information, the item(s) they wished to donate, and lastly a review section.
          <br /><br />
          After having several design dev meetings, I also designed a ton of edge cases to ensure all possibilities have been covered.
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/finaliteration.png" alt="<Final product part 2>"/>
              title="A familiar experience"
          >
          The main area I focussed on was making this experience as familiar as possible for my users. Since donating items isn't an experience that people go through on a day to day – I created an experience that mirrored what online shopping would look like.
            <br /><br />
          When a user requests to donate an item, they enter the details and save the item. Once they do, the stepper goes up and gives immediate feedback – similar to a shopping cart. A bold green 'donate another item' CTA is right below the added item if donors want to give more.

          </CaseStudy>


          <CaseStudy
              image= <img src="tpc/finaliteration.png" alt="<Final product part 3>"/>
              title="Forgiving product design"
          >
          Lastly, to add forgiveness in our product, I created a review section where users are able to double check their entries. Due to development limitations, if users wanted to edit anything they inputted, they would need to press the back button.
          <br /><br />

          Once the form is submitted, next steps are provided so the user knows what to expect. An email confirmation will also be sent.

          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/aftermath.png" alt="<Having fun with team making really difficult puzzle virtually>"/>
              title="Aftermath"
          >
          Although all of the design work was done, I knew my job as a designer wasn’t over – it was time for dev design collaboration! I created design specification documents for our developers to refer to and prepared for my design review meeting.
          <br /><br />

          This helped me learn how to speak the same language as the developers and learn to look out for developer specific edge cases.
          <br /><br />

          OH I even left comments on the PR to ensure accurate designs!
          <br /><br />

          (this is a photo of our team making a puzzle. yes it was very difficult, we were very proud.)
          </CaseStudy>

          <CaseStudy
              image= <img src="tpc/learningsandtakeaways.png" alt="<the friends i met along the way>"/>
              title="Learnings & Takeaways"
          >
          Learning to work cross functionally was a dream. I was able to learn the limitations of development, and how I should design to avoid that. Through this I was constantly able to adapt my designs and really challenge my skills in order to make my developer’s lives easier.
          <br /><br />
          If time wasn’t a barrier, I would have loved to iterate more on this project, and come up with more creative solutions. I went with a very safe route where I followed common design trends so users are familiar with my interface. Next time I wish to explore more interesting ways to prompt the user and fulfill my clients needs!

          </CaseStudy>

        </div>

    );
};
