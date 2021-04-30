import React, { useEffect } from "react";
import { Meats } from "./Meats";
import { Salts } from "./Salts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import getStringifiedOutput from "./getStringifiedOutput";

const Output = ({
  meatCategory,
  meatType,
  weightValue,
  weightType,
  saltByWeight,
  saltType,
}) => {
  useEffect(() => {
    if (document.querySelector(".savedMessage")) {
      document.querySelector(".savedMessage").innerHTML = ``;
    }
  });
  // Change instructions based on the weight of the protein

  // Meat weight in grams * salt percentage = salt weight in grams
  const weightInGrams =
    weightType === "Lbs"
      ? 453.592 * weightValue * (saltByWeight / 100)
      : 1000 * weightValue * (saltByWeight / 100);

  const getTbsps = () => {
    if (saltType) {
      return weightInGrams / Salts[saltType].gramsPerTbsp;
    }
    return undefined;
  };

  const saveCalculation = () => {
    const calculation = {
      meatType: meatType,
      saltType: saltType,
      weightType: weightType,
      weightValue: weightValue,
      saltByWeight: saltByWeight,
      timestamp: new Date().toDateString(),
    };
    if (meatType && saltByWeight) {
      localStorage.setItem(`${meatType}`, JSON.stringify(calculation));
    }
    document.querySelector(
      ".savedMessage"
    ).innerHTML = `Saved! Next time you select ${meatType.toLowerCase()} you will see these settings above the slider`;
  };

  const renderOutput = () => {
    const renderInstructions = () => {
      const renderResources = (resources) => {
        const arr = [];

        for (const resource in resources) {
          arr.push(
            <li key={`${resource}`}>
              <a href={resources[resource]}>{resource}</a>
            </li>
          );
        }

        const renderResourceTitle = () => {
          if (arr.length > 1) {
            return `Resources for cooking ${meatType.toLowerCase()}:`;
          } else if (arr.length === 1) {
            return `A useful resource for cooking ${meatType.toLowerCase()}:`;
          } else {
            return;
          }
        };

        return (
          <>
            {arr.length > 1 ? <hr className="outputHr" /> : null}
            <span className="card-subtitle">{renderResourceTitle()}</span>
            <ul>{arr}</ul>
          </>
        );
      };

      if (
        meatType &&
        weightValue > 0 &&
        weightType &&
        saltByWeight &&
        saltType &&
        Meats[meatCategory][meatType] !== undefined
      ) {
        return (
          // Output text
          <div>
            <p>
              For {weightValue}{" "}
              {Number(weightValue) === 1 ? weightType.slice(0, -1) : weightType}{" "}
              of {meatType.toLowerCase()}, use{" "}
              {getStringifiedOutput(getTbsps())} of {saltType.toLowerCase()} (
              {weightInGrams
                ? weightInGrams.toFixed(2)
                : "ERROR NO WEIGHT IN GRAMS"}{" "}
              grams).
            </p>
            <p>{Meats[meatCategory][meatType].instruction} </p>
            <Button
              className="saveCalculationButton"
              size="sm"
              onClick={() => {
                saveCalculation();
              }}
            >
              Remind me of these selections the next time I select{" "}
              {meatType.toLowerCase()}
            </Button>
            <div className="savedMessage"></div>
            <div>
              {renderResources(Meats[meatCategory][meatType].resources)}
            </div>
            <Card.Text>
              <span className="card-subtitle">
                SOME OTHER STUFF I RECOMMEND
              </span>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.amazon.com/gp/product/1476753830/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1476753830&linkCode=as2&tag=willliu0a-20&linkId=f3916631f8f40d637dd58105449cb34a"
                  >
                    Salt Fat Acid Heat, a fantastic book for learning cooking
                    fundamentals. Samin's chapter on salt actually inspired this
                    calculator!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.amazon.com/gp/product/B004164SRA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B004164SRA&linkCode=as2&tag=willliu0a-20&linkId=6f6a9acf67ca0e694e15e7eaa3747cd5"
                  >
                    Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food
                    Scale. Weighing your salt out in grams takes the density
                    issue out of the equation!
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.amazon.com/gp/product/B07C7PW3PC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07C7PW3PC&linkCode=as2&tag=willliu0a-20&linkId=33f561e1ec09688fee1fa412a6521b67"
                  >
                    Anova Culinary Sous Vide Precision Cooker Nano, this is the
                    sous vide I use for a lot of my dry brined meats.
                  </a>
                </li>
                <span className="noteDark">
                  FYI, these are affiliate links. By making a purchase through
                  one of those, you are supporting this site. Thank you in
                  advance!
                </span>
              </ul>
            </Card.Text>
          </div>
        );
      } else {
        return (
          <ul>
            {meatType ? null : <li key="1">Please select a type of protein</li>}
            {weightValue ? null : <li key="2">Please enter protein weight</li>}
            {weightType ? null : <li key="3">Please select lbs or kgs</li>}
            {saltType ? null : <li key="4">Please select type of salt</li>}
          </ul>
        );
      }
    };

    return (
      <div>
        <Card className="output">
          <Card.Body>
            <Card.Title>Salting Suggestions</Card.Title>
            <Card.Text as="span" style={{ animation: "fadeIn 1s" }}>
              {renderInstructions()}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div>{renderOutput()}</div>;
};

export default Output;
