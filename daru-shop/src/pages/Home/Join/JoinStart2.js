import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Subtitle from '../../../components/Subtitle';
import GreenRadioButton from '../../../components/GreenRadioButton';
import TextInfo from '../../../components/TextInfo';
import CheckBox from '../../../components/CheckBox';
import GreenCheckBoxs from '../../../components/GreenCheckBoxs';

const LongInput = styled.input`
width: auto;
height: 45px;
border: 1px solid #BABABA;
border-radius: 2px;
padding: 0px 0px 0px 10px;
font-size: 14px;
margin:${props => props.margin || ""}
`;

const JoinStart2 = (props) => {
    const [exampleInput, setExampleInput] = useState("");
    const [exampleInput2, setExampleInput2] = useState("");

    // mediaQuery가 821미만이면 모바일
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const [isMd, setIsMd] = useState(
        windowSize.width < 821 ? "sm" : "md"
    );
    // resize이벤트가 발생할때 사용할 콜백함수
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth
        })
    };

    // resize 이벤트 발생 시 이벤트 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        if (windowSize.width < 821) {
            setIsMd("sm")
        } else {
            setIsMd("md")
        }
    }, [windowSize])

    return (
        <div className="join-container">
            <Subtitle size={isMd} title="매장 상세 정보 등록" />
            <Subtitle margin="0px 0px 5px 0px" size={isMd} title="현재 매장에 가장 가까운 정보를 등록하세요.(필수 선택)" type="text" />
            <TextInfo fontSize={"14px"} text="매장을 파악하여, 찻집과 어울리는 성향을 가지고 있는 다루 이용자에게 추천할 수 있습니다." />

            <GreenRadioButton title={["손님이 직접 다구를 사용해서 차를 내려먹는 전통찻집", "손님이 직접 다구를 사용할 일은 없지만, 자사호와 찻잔을 활용해서 차를 내려먹는 찻집 대리인", "손님이 직접 차를 우려먹지는 않지만, 찻잎이나 청을 이용해서 직접 차를 만들어 제공하는 찻집", "서양풍의 인테리어에 하얀 주전자에 차를 담아 판매하는 티카페", "현대의 카페와 거의 유사한 인테리어이지만, 차를 위주로 판매하고 있는 티카페"]} name={"married"} />

            <Subtitle margin="30px 0px 5px 0px" size={isMd} title="앞의 예시가 아쉬우셨다면 직접 입력해 주세요." type="text" />
            <TextInfo fontSize={"14px"} text="다루에서는 모든 찻집의 유형을 파악하려고 노력하고 있습니다. 매장을 더 잘 표현할 수 있는 문구를 적어주시면 추후에 반영될 수 있게 노력하겠습니다 :) " />


            <LongInput type="text" placeholder=":)" onChange={(e) => {
                e.preventDefault();
                setExampleInput(e.currentTarget.value);
            }} maxLength={39} />
            {/* 글자수 */}
            <span style={{ fontSize: "14px", color: "#b5b5b5", marginLeft: "auto", marginTop: "10px" }}>{exampleInput.length}/40</span>
            <span style={{ width: "100%", borderTop: "0.5px solid #DDDDDD", margin: "10px 0px 0px 0px" }} />



            <Subtitle margin="30px 0px 5px 0px" size={isMd} title="현재 매장에 가장 가까운 정보를 등록하세요.(최대 4개)" type="text" />
            <TextInfo fontSize={"14px"} text="매장의 메뉴를 분석하여, 찻집과 어울리는 성향을 가지고 있는 다루 이용자에게 추천할 수 있습니다." />
            {/*  */}
            <GreenCheckBoxs />

            <Subtitle margin="30px 0px 5px 0px" size={isMd} title="앞의 예시가 아쉬우셨다면 직접 입력해 주세요." type="text" />
            <TextInfo fontSize={"14px"} text="다루에서는 모든 찻집의 유형을 파악하려고 노력하고 있습니다. 매장을 더 잘 표현할 수 있는 문구를 적어주시면 추후에 반영될 수 있게 노력하겠습니다 :) " />

            <LongInput style={{ marginBottom: "20px" }} type="text" placeholder=":)" onChange={(e) => {
                e.preventDefault();
                setExampleInput2(e.currentTarget.value);
            }} />





            <div className="join-submit-container">
                <button className="green-btn __md" type="submit" onClick={() => {
                    props.page("/Join/SearchMyShop");
                }}>보내기</button>
            </div>
        </div >
    )
};

export default JoinStart2;