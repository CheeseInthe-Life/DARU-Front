import React from 'react';

const TimeRadio = (props) => {
    // 버튼 토글
    const [isBusness, setIsBusness] = React.useState(false);

    // change 이벤트
    function changeIsBusness(boolean) {
        setIsBusness(boolean);
    }

    return (
        <React.Fragment>
            <div className={"radio-box __" + props.size}>
                <span className={"radio-box __" + props.size + " __title __" + props.page}>{props.title}</span>
                <div className={"radio-box __" + props.size + " __inner __" + props.page}>
                    {/* 월요일 */}

                    <span className={"radio-box __" + props.size + " __subtitle"}>{props.subtitle}</span>
                    {/* input type radio */}
                    <input type="radio" name={props.name} id={props.id} className={"radio-box __" + props.size + " __input"} onChange={(e) => {
                        changeIsBusness(true);
                        return props.onChange();
                    }} />
                    <label htmlFor={props.id} className={"radio-box __" + props.size + " __label"}>영업</label>
                    <input type="radio" name={props.name} id={props.id + "1"} className={"radio-box __" + props.size + " __input"} onChange={(e) => {
                        changeIsBusness(false);
                        return props.onChange();
                    }} />
                    <label htmlFor={props.id + "None"} className={"radio-box __" + props.size + " __label"}>휴업</label>



                    {/* 버튼이 참이라면 */}
                    {isBusness && (
                        <div className={"radio-box __" + props.size + " __dropdown"} >
                            <select name="select" id={props.id} className={"dropdown __time __" + props.size} >
                                <option value={""}>{"시간선택"}</option>
                                {props.options.map((v, i) => {
                                    return (<option key={i} value={v}>{v}</option>)
                                })}
                            </select>
                            <span style={{ margin: "0px 10px" }}>~</span>
                            <select name="select" id={props.id} className={"dropdown __time __" + props.size} >
                                <option value={""}>{"시간선택"}</option>
                                {props.options.map((v, i) => {
                                    return (<option key={i} value={v}>{v}</option>)
                                })}
                            </select>
                        </div>
                    )}
                </div>
            </div >
        </React.Fragment>
    );
};

TimeRadio.defaultProps = {
    title: "매장 운영시간",
    subtitle: "월요일",
    size: "lg",
    id: "selectid",
    name: "selecteds",
    page: "",
    options: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    onChange: function () {
        return console.log("onChange");
    }
}

export default TimeRadio;