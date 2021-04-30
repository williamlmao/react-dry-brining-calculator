import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ToggleArrow from "./ToggleArrow";

const QandAList = {
  "Where did you get the reccomended salt by weight percentages from?": (function () {
    return (
      <text>
        Through research and other experimentation! I started with Samin
        Nostrat's basic salting guidelines in Salt Fat Acid Heat, cross
        referenced a bunch of recipes/articles, and{" "}
        <a
          href="https://www.notion.so/liuwill/Dry-Brining-Expriments-214b942e659647c7a87f789f103b1aad"
          target="_blank"
        >
          did some my own testing as well.
        </a>{" "}
        I found that somewhere between 0.75-1% salt by weight works for most
        cuts of meat. I also found that the fattier a cut of meat is, the more
        salt you need. That's how I got to 1.2% for pork belly. All that being
        said, these are just suggestions. I put a slider in the calculator so
        you can go with what works for you!
      </text>
    );
  })(),
  "How much salt to use per pound of meat":
    "A lot of the top recipes or websites when you search this question will tell you something like 1tsp per lb of meat. Depending on the type of salt you use, that can end up being wildly different. To figure out how much you should use, try out the calculator!",
  "Do I need to be exact about how much salt I use?":
    "This calculator is trying to give you an accurate estimate based on your variables, as long as you get somewhere close you should be fine. You won't be able to tell the difference in +/- 0.1%, and even around +/- 0.3% it's not that big of a jump",
  "What does salt do to meat?":
    "When you give salt enough time to work its magic, it can do wonders for whatever meat dish you are cooking. Salt doesn't just make your food saltier, it brings out natural flavors, improves texture, and can even make the meat jucier. Salt changes the shape of proteins, allowing the meat to hold more water. This results in a jucier and more tender bite.",
  "When should I salt my meat?":
    "In most cases, you'll want to dry brine your meat about a day in advance. This applies to pretty much any cut of beef, pork, or poultry (turkey can be 2-3 days). For fish, salting too far in advance can break down the proteins and dry out the fish, so you'll want to salt no more than 10 minutes before cooking. While you should still be salting ground meat, you don't have to do it so far in advance because you're able to mix the salt in. 10+ minutes before cooking is just fine!",
  "What is a dry brine? How does it compare to a wet brine?":
    "A traditional brine, or wet brine, is soaking something in salty water. \"Dry brining\" is just another way of saying salting meat in advance. When roasting birds, you're usually after some crispy skin. For steaks, a nice crust is desired. Dry surface = nice browning. A salt rub and some time in the fridge (40 min - 24 hrs) will help dry out the surface, which helps you get that super crispy roasted chicken or perfectly browned steak. On the flip side, if you salt a steak right before cooking, osmosis can actually pull water out towards the surface of the steak, making it harder to brown. Giving the meat more time allows the water to get reabsorbed into the steak, allowing you to nicely brown the surface while retaining extra moisture within. If you're finishing a steak, consider flaky salt or pink himalayan. For baking, sea salt's fineness will help prevent salt pockets.",
  "What kind of salt should I use and why?":
    "The type of salt you should use depends on what context you are salting your food. The premise of this website is to help you with salting your meat in advance. For this purpose, kosher salt is your best bet. It's harder to over season with it because it has a lower salinity (table salt weights 18.6 grams per tbsp, but Diamond kosher weighs 9.75), and the shape and size of its crystals make it easy to pinch and sprinkle. That being said, any salt is better than no salt, so don't fret if table salt is all you have; it'll work just fine as long as you use the right amount. ",
};

const Faq = () => {
  const renderFAQ = () => {
    return Object.entries(QandAList).map((QandA) => {
      return (
        <div key={QandA[0]}>
          <Accordion>
            <Card>
              {/* To toggle open and closed chevrons. It's a bit messy but it works. */}
              <Accordion.Toggle
                as={Card.Header}
                eventKey={QandA[0]}
                onClick={() => {
                  const chevron = document.getElementById(`${QandA[0]}`);
                  if (chevron.classList.contains("open")) {
                    chevron.classList.remove("open");
                    chevron.classList.add("closed");
                  } else {
                    chevron.classList.remove("closed");
                    chevron.classList.add("open");
                  }
                }}
              >
                <div className="arrowContainer">
                  <ToggleArrow question={QandA[0]} />
                </div>

                <h3>{QandA[0]}</h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={QandA[0]}>
                <Card.Body>
                  <p>{QandA[1]}</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      );
    });
  };

  return <div className="faq">{renderFAQ()}</div>;
};

export default Faq;
