import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ToggleArrow from "./ToggleArrow";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Slider = ({ meatTypeObj, meatType, title, callback }) => {
  const [value, setValue] = useState(1);

  // Sets default based on meat type input
  useEffect(() => {
    if (meatTypeObj) {
      setValue(meatTypeObj.defaultSaltByWeight);
      callback(meatTypeObj.defaultSaltByWeight);
    }
  }, [meatTypeObj]);

  const defaultValue = meatTypeObj ? meatTypeObj.defaultSaltByWeight : null;

  const lastCalculation = () => {
    // Meat type here is an object
    if (meatType) {
      const calculation = localStorage.getItem(meatType);
      if (calculation) {
        const parsedCalculation = JSON.parse(calculation);
        return `Last time (${parsedCalculation.timestamp}) you cooked ${
          parsedCalculation.weightValue
        } ${parsedCalculation.weightType.toLowerCase()} of ${parsedCalculation.meatType.toLowerCase()} with ${parsedCalculation.saltType.toLowerCase()} at a ${
          parsedCalculation.saltByWeight
        }% salt by weight.`;
      } else {
        return null;
      }
    }
  };

  return (
    <>
      <h3 className="formTitle">{title}</h3>
      <p className="note">
        Note: The recommended salt by weight percentages below are for{" "}
        <strong>total salinity</strong>. If you're adding other salty
        ingredients to the dish, adjust salt by weight down. For more info,
        check out the <Link to="FAQ">FAQ</Link>.
      </p>
      <p className="lastCalculation">
        <i>{lastCalculation()}</i>
      </p>
      <RangeSlider
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          callback(e.currentTarget.value);
        }}
        tooltipLabel={(currentValue) =>
          currentValue === defaultValue
            ? `${currentValue}% salinity is recommended for ${meatTypeObj.type.toLowerCase()}`
            : `${currentValue}%`
        }
        tooltip="on"
        step={0.05}
        min={0}
        max={3}
        variant="light"
      />
      <div className="sliderLabels">
        <span className="accent"> ← Less Salty</span>
        <span className="accent">More Salty →</span>
      </div>
    </>
  );
};

export default Slider;
