import React, { useState, useEffect } from 'react';

import Subtitle from '../../../components/Subtitle';
import GreenRadioButton from '../../../components/GreenRadioButton';
import TextInfo from '../../../components/TextInfo';
import CheckBox from '../../../components/CheckBox';
import GreenCheckBoxs from '../../../components/GreenCheckBoxs';

const JoinStart2 = (props) => {
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
        <form className="join-container">
            <Subtitle size={isMd} title="매장 상세 정보 등록" />
            <Subtitle size={isMd} title="현재 매장에 가장 가까운 정보를 등록하세요" type="text" />
            <TextInfo fontSize={"14px"} text="매장을 파악하여, 찻집과 어울리는 성향을 가지고 있는 다루 이용자에게 추천할 수 있습니다." />

            <GreenRadioButton title={["손님이 직접 다구를 사용해서 차를 내려먹는 전통찻집", "손님이 직접 다구를 사용할 일은 없지만, 자사호와 찻잔을 활용해서 차를 내려먹는 찻집 대리인", "손님이 직접 차를 우려먹지는 않지만, 찻잎이나 청을 이용해서 직접 차를 만들어 제공하는 찻집", "서양풍의 인테리어에 하얀 주전자에 차를 담아 판매하는 티카페", "현대의 카페와 거의 유사한 인테리어이지만, 차를 위주로 판매하고 있는 티카페"]} name={"married"} />

            <Subtitle margin="30px 0px 0px 0px" size={isMd} title="현재 매장에 가장 가까운 정보를 등록하세요" type="text" />
            <TextInfo fontSize={"14px"} text="매장의 메뉴를 분석하여, 찻집과 어울리는 성향을 가지고 있는 다루 이용자에게 추천할 수 있습니다." />
            <GreenCheckBoxs />


            <div className="join-submit-container">
                <button className="green-btn __md" type="submit" onClick={() => {
                    props.page("/Join/Final")
                }}>보내기</button>
            </div>
        </form>
    )
};

export default JoinStart2;