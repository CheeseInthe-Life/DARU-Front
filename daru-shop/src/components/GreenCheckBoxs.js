import React, { useState } from 'react';

const GreenCheckBoxs = (props) => {
    const [value, setValue] = useState([]);

    // 배열에 있는 값 추적하여 배열에 넣기
    function getValue(e) {
        let labelValue = e.currentTarget.nextElementSibling.innerHTML;
        // console.log(labelValue);
        if (e.currentTarget.checked) {
            if (!checkingValueLength(value)) {
                e.currentTarget.checked = false;
                alert("카테고리는 4개를 초과할 수 없습니다.");
            } else {
                // 4개가 넘지 않았을때만 push
                value.push(labelValue);
            }
        } else if (!e.currentTarget.checked) {
            // 배열 삭제
            value.splice(value.indexOf(labelValue), 1);
        }
        console.log(value);
    }

    // 배열 최대값 체크
    function checkingValueLength(value) {
        if (value.length >= 4) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div className={props.size + "-green-checkbox"}>
            {props.title.map((v, i) => {
                return (
                    <React.Fragment key={i}>
                        <input type="checkbox" name={props.name} id={props.id + " _" + i} onChange={(e) => {
                            // check값의 change event가 발생될때 바뀐다..
                            // 값 가지고와서 배열에 넣기
                            getValue(e);
                            props.onChange(value);
                        }} defaultChecked={props.checked} />
                        <label htmlFor={props.id + " _" + i}>{v}</label>
                    </React.Fragment>
                )
            })}
        </div>
    );
};


GreenCheckBoxs.defaultProps = {
    size: "sm",
    title: ["중국차", "직접우리는", "목가적", "트렌디", "현대적", "전통찻집", "녹차", "조용한", "노래나오는", "홍차", "서양풍", "블렌딩티", "티코스", "차수업", "조명밝은", "조명어두운", "밀크티", "분위기좋은"],
    checked: false,
    id: "checkbox",
    name: "checked",
    onChange() {
        return
    }
}

export default GreenCheckBoxs;