import React from 'react';

// 서브 타이틀을 출력하는 component
const Subtitle = (props) => {
    // props로 페이지 명을 받는다.
    return (
        <div className={"subtitle-box __" + props.size + " __" + props.type} style={{ margin: props.margin }}>
            <h3>{props.title}</h3>
        </div >
    );
};

Subtitle.defaultProps = {
    size: "md",
    title: "타이틀을 입력하세요",
    type: "",
    margin: "",
}

export default Subtitle;