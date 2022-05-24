import React from 'react';


// 기본적 select타입 components ex) 핸드폰 번호 입력
const SelectTel = (props) => {
    return (
        <div className={"select-container __" + props.size}>
            <label htmlFor={props.id} className={"input-text-box __label __" + props.size}>{props.title}</label>
            <div className="find-input-box">
                <select id={props.id} className="dropdown __tel" onChange={(e) => {
                    e.preventDefault();
                    return props.getFirstNumber(e.currentTarget.value);
                }}>
                    {props.options.map((v, i) => {
                        return (<option key={i} value={v}>{v}</option>)
                    })}
                </select>
                <input type="tel" id={props.selectId} className={"input-text-box __text __tel __" + props.size} pattern="[0-9]+" maxLength="4"  onChange={(e) => {
                    e.preventDefault();
                    return props.getMiddleNumber(e.currentTarget.value);
                }} maxLength={4} />
                <input type="tel" id={props.selectId + "1"} className={"input-text-box __text __tel __" + props.size} pattern="[0-9]+" maxLength="4"  onChange={(e) => {
                    e.preventDefault();
                    return props.getLastNumber(e.currentTarget.value);
                }} maxLength={4} />
            </div>
        </div>
    );
};

SelectTel.defaultProps = {
    size: "sm",
    id: "selectId",
    title: "title을 입력해주세요",
    options: ["010",],
    selectedId: "selectedId",
    name: "selected",
    getFirstNumber: function () {
        console.log("첫번째 번호는 010입니다.");
    },
    getMiddleNumber: function () {
        console.log("중간번호를 입력해주세요");
    },
    getLastNumber: function () {
        console.log("마지막번호를 입력해주세요");
    }
}
export default SelectTel;
