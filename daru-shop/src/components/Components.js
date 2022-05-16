import React from 'react';

import TextArea from './Home/TextArea';
import InputMd from './Home/InputMd';

// 버튼 예시 파일
const Components = () => {
  return (
    <div className="app-container">
      기본버튼
      <button className="sm-green-btn">button</button>
      <button className="lg-green-btn">button</button>
      <button className="lg-btn">button</button>
      <button className="lg-btn __gray" disabled>button</button>
      <button className="sm-btn">button</button>
      <button className="sm-btn __sm">button</button>
      <br></br>
      checkbox
      <div className="lg-box-checkbox">
        <input type="checkbox" name="" id="scales" className="lg-checkbox" />
        <label htmlFor="scales" className="lg-label">Scale</label>
      </div>
      <br></br>
      radio
      <div className="lg-radio-checkbox">
        <input type="radio" name="" id="selected" className="lg-checkbox" />
        <label htmlFor="selected" className="lg-label">Selected</label>
      </div>
      <br></br>
      select
      <select name="select" id="select" className="lg-dropdown">
        <option value="">Selected</option>
      </select>
      <br></br>
      label-input
      {/* <label htmlFor="label3" className="md-input-text-label">Label</label>
      <input type="text" name="" id="label3" className="md-input-text" placeholder="placeholder" /> */}
      <InputMd></InputMd>
      <div className="lg-input-text-box">
        <label htmlFor="labels" className="lg-input-text-label">Label</label>
        <input type="text" name="" id="labela" className="lg-input-text" placeholder="placeholder" />
      </div>
      <br />
      textarea
      <TextArea text="네이버회원가입"></TextArea>

    </div>
  );
};

export default Components;