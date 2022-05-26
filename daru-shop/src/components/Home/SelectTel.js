import React from 'react';


// 기본적 select타입 components ex) 핸드폰 번호 입력
const SelectTel = React.forwardRef((props, ref) => {


    return (
        // 큰 틀
        <div className={"select-container __" + props.size}>
            {/* 아이디 찾기 같은 안내명 */}
            <label htmlFor={props.id} className={"input-text-box __label __" + props.size}>{props.title}</label>
            {/* selet박스 */}
            <div className="find-input-box">
                {/* dropdown */}
                <select id={props.id} className="dropdown __tel" onChange={(e) => {
                    e.preventDefault();
                    return props.getFirstNumber(e.currentTarget.value);
                }}>
                    {/* option을 배열형식으로 받는다. */}
                    {props.options.map((v, i) => {
                        return (<option key={i} value={v}>{v}</option>)
                    })}
                </select>
                {/* 인풋 */}
                <input type="tel" id={props.selectId} className={"input-text-box __text __tel __" + props.size} pattern="[0-9]+" maxLength="4" onChange={(e) => {
                    e.preventDefault();
                    // change시 부모 컴포넌트에 핸드폰 중간 번호를 보낸다.
                    return props.getMiddleNumber(e.currentTarget.value);
                }} maxLength={4} />
                {/* 인풋 */}
                <input type="tel" id={props.selectId + "1"} className={"input-text-box __text __tel __" + props.size} pattern="[0-9]+" maxLength="4" onChange={(e) => {
                    e.preventDefault();
                    // change시 부모 컴포넌트에 핸드폰 마지막 번호를 보낸다.
                    return props.getLastNumber(e.currentTarget.value);
                }} maxLength={4} />
            </div>
        </div>
    );
});

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
