import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Selection from "./Selection";
import Form from "react-bootstrap/Form";
import Output from "./Output";
import About from "./About";
import { Meats } from "./Meats";
import {
  getMeatCategoryRadios,
  getMeatTypeRadios,
  getSaltTypeRadios,
} from "./Radios";

// Whenever an input is changed, useEffect will run a timer
// If the form is completely filled out and the timer runs out, save that to local storage
//

const SaltForm = () => {
  const [meatCategory, setMeatCategory] = useState();
  const [meatType, setMeatType] = useState();
  const [weightValue, setWeightValue] = useState(0);
  const [weightType, setWeightType] = useState();
  const [saltType, setSaltType] = useState();
  const [saltByWeight, setSaltByWeight] = useState();

  useEffect(() => {
    // Handles dependent radio buttons. If the meat type is selected and then meat category is changed, deselect meatType
    if (meatCategory && meatType) {
      if (Meats[meatCategory][meatType] === undefined) {
        setMeatType(undefined);
      }
    }
  }, [meatCategory, meatType]);

  // Selection Components accept a callback to update state managed within app
  // Selection accepts an array of objects, currently returned from the functions in /Radios
  return (
    <div>
      <div className="form">
        <Selection
          title="What kind of protein are you dry brining?"
          callback={setMeatCategory}
          radioOptions={getMeatCategoryRadios()}
        />
        <Selection
          title={`More specifically, what kind of ${
            meatCategory ? meatCategory.toLowerCase() : "protein"
          } are you dry brining?`}
          callback={setMeatType}
          radioOptions={getMeatTypeRadios(meatCategory)}
        />
        <h3 className="formTitle">{`How much does the ${
          meatType ? meatType.toLowerCase() : "protein"
        } weigh?`}</h3>
        <div className="weightInputGroup">
          <Form.Control
            className="weightInput"
            type="text"
            inputmode="decimal"
            min="0"
            onChange={(e) => {
              setWeightValue(e.target.value);
            }}
            value={weightValue}
          />
          <Selection
            title={null}
            callback={setWeightType}
            radioOptions={[
              { name: `Lbs`, value: `Lbs` },
              { name: `Kgs`, value: `Kgs` },
            ]}
          />
        </div>
        <Selection
          title={`What type of salt are you using?`}
          callback={setSaltType}
          radioOptions={getSaltTypeRadios()}
        />
        <Slider
          title={`What is your target salt by weight %?`}
          meatTypeObj={meatType ? Meats[meatCategory][meatType] : undefined}
          meatType={meatType}
          callback={setSaltByWeight}
        />
      </div>
      <div className="output">
        <Output
          meatCategory={meatCategory}
          meatType={meatType}
          weightValue={weightValue}
          weightType={weightType}
          saltByWeight={saltByWeight}
          saltType={saltType}
        />
      </div>
      <About />
    </div>
  );
};

export default SaltForm;
