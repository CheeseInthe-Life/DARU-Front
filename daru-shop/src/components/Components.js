import React from "react";

import TextArea from "./Home/TextArea";
import Input from "./Input";
import RadioBox from "./RadioBox";
import KakaoPostButton from "./KakaoPostButton";
import GreenRadioButton from "./GreenRadioButton";
import LongInput from "./LongInput";
import TimeRadio from "./TimeRadio";

// 버튼 예시 파일
function Components() {
  return (
    <div className="app-container">
      기본버튼
      <button className="green-btn">button</button>
      <button className="green-btn __md">button</button>
      <button className="white-btn">button</button>
      <button className="white-btn __lg __gray" disabled>button</button>
      <button className="white-btn __sm __gray">button</button>
      <button className="white-btn __sm">button</button>
      <br />
      checkbox
      <div className="md-box-checkbox">
        <input type="checkbox" name="" id="scales" className="md-checkbox" />
        <label htmlFor="scales" className="md-label">Scale</label>
      </div>
      <br />
      radio
      <div>
        <span className="md-radio-label">Label</span>
        <input type="radio" name="" id="selected" className="md-checkbox" />
        <label htmlFor="selected" className="md-label">Selected</label>
      </div>
      <br />

      <select name="select" id="select" className="dropdown">
        <option value="">Selected</option>
      </select>
      <br />
      label - input
      {/* <label htmlFor="label3" className="md-input-text-label">Label</label>
      <input type="text" name="" id="label3" className="md-input-text" placeholder="placeholder" /> */}
      <Input />
      <div className="md-input-text-box">
        <label htmlFor="labels" className="md-input-text-label">Label</label>
        <input type="text" name="" id="labela" className="md-input-text" placeholder="placeholder" />
      </div>
      <br />
      textarea
      <TextArea TextArea text="네이버회원가입" />
      <RadioBox title="입력" value={["안녕", "굿"]} />
      <KakaoPostButton />
      <GreenRadioButton title={["안녕", "안녕1"]} name="hi" />
      <LongInput />
      <TimeRadio />
    </div>
  );
}

export default Components;
