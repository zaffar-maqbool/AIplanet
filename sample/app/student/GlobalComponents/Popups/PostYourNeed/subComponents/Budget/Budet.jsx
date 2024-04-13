"use client";

import React from "react";
import style from "./style/Budget.module.css";
import TuitionFessGraph from "./TuitionFeesGraph/TuitionFeesGraph";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Link from "next/link";
import { useSelector,useDispatch } from "react-redux";
import { setBudget } from "../../../../../../Redux/studentSlices/PostYouNeed";

function Budet({ nextHandler, closeModal }) {
  const Budget = useSelector((state) => state.postNeed.Budget);
  const dispatch = useDispatch();
  const step = 10000 / 20;
  const [TuitionFees, SetTuitionFees] = React.useState(0);
  const [TuitionFees2, SetTuitionFees2] = React.useState(10000);
  const handleChange = (e) => {
   dispatch(setBudget({key:"min",value:e.target.value}));
  };
  const handleChange2 = (e) => {
    dispatch(setBudget({key:"max",value:e.target.value}));
  };
  return (
    <>
      <div className={style.sidebar}>
        <Link href={"#mode"} className={style.sidebar_heading}>
          Budget
        </Link>
        <div className={style.line}></div>
      </div>
      <div className={style.vertical_line}></div>
      <div className={style.content}>
        <div id="mode" className={style.content_wrapper}>
          <h3 className={style.heading}>
            1: What is your budget for tuition fees?
          </h3>
          <div className={style.Graph_Selection}>
            <TuitionFessGraph
              TuitionFees={Budget.min}
              TuitionFees2={Budget.max}
            />
            <div className={style.Section_9_range_bar_wrapper}>
              <BiSolidLeftArrow className={style.arrow_range_bar} />
              <div className={style.double_thumb}>
                <div className={style.progress}></div>
                <div className={style.range_input}>
                  <input
                    type="range"
                    className="range-min"
                    step={step}
                    steps={step}
                    min="1000"
                    max="10000"
                    defaultValue={"30"}
                    value={Budget.min}
                    onChange={handleChange}
                  />
                  <input
                    type="range"
                    className="range-min"
                    step={step}
                    steps={step}
                    max="10000"
                    min="1000"
                    defaultValue={"50"}
                    value={Budget.max}
                    onChange={handleChange2}
                  />
                </div>
              </div>

              {/* <input type="range" step={step} steps={step} min="0" max="100" value={TuitionFees} onChange={handleChange}/> */}
              <BiSolidRightArrow className={style.arrow_range_bar} />
            </div>
            <div className={style.Start_at}>
              <p>Starts at</p>
              <h4>₹1000</h4>
            </div>
            <div className={style.Maximum}>
              <p>maximum</p>
              <h4>₹10k</h4>
            </div>
            <div className={style.Ask_and_avg}>
              <div className={style.Ask_Price}>
                <h4>Min</h4>
                <h4>{Budget.min}</h4>
                <div>₹</div>
              </div>
              <div className={style.Avg_Price}>
                <h4>Max</h4>
                <h4>{Budget.max}</h4>
                <div>₹</div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.button_wrapper}>
          <button onClick={() => nextHandler("Tutor")} className={style.back}>
            Back
          </button>
          <button onClick={closeModal} className={style.next}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Budet;
