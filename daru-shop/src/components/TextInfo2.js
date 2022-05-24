import React from 'react';

const TextInfo2 = (props) => {

    return (
        <div className={"text-info2 __" + props.size}>
            <div className={"text-info2 __img"}>
            </div>
            <div className={"text-info2 __" + props.size + " __subtitle"}>
                {props.title.map((v, i) => {
                    return (
                        <React.Fragment key={i}>
                            <strong >{v}</strong>
                            {props.description[i].split('\n').map((line, j) => {
                                return (
                                    <p key={j} className={`text-info2 __` + props.size + ` __text __p`}>{line}<br /></p>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </div>
        </div >
    );
};

TextInfo2.defaultProps = {
    size: "",
    title: ["타이틀을 입력하세요"],
    description: ["어쩌구저쩌구"],
};

export default TextInfo2;