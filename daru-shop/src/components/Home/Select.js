import React from 'react';



// 기본적 select타입 components ex) 핸드폰 번호 입력
const Select = (props) => {    
    return (
        <div>
            <label htmlFor={props.id} className="md-input-text-label">{props.title}</label>
            <div className="find-input-box">
                <select name="select" id={props.selectId} className="lg-dropdown __find-id" >
                    {props.options.map((v, i) => {
                        return (<option key={i} value={v}>{v}</option>)
                    })}
                </select>
                <input type="text" name="" id={props.id} className="md-input-text __find-id" pattern="[0-9]+" maxLength="4" required onChange={(e) => {
                    e.preventDefault();
                    return props.getMiddleNumber(e.currentTarget.value);
                }}/>
                <input type="text" name="" id={props.id + "_1"} className="md-input-text __find-id" pattern="[0-9]+" maxLength="4" onChange={(e) => {
                    e.preventDefault();
                    return props.getLastNumber(e.currentTarget.value);
                }}/>
            </div>
        </div>
    );
};

Select.defaultProps = {
    selectId: "selectId",
    title: "title을 입력해주세요",
    options: ["010",],
    getMiddleNumber: function(){
        console.log("중간번호를 입력해주세요");
    },
    getLastNumber: function(){
        console.log("마지막번호를 입력해주세요");
    }
}
export default Select;
