import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// custom-hooks
import { useResize } from '../../../asset/js/useResize';

// components
import Subtitle from '../../../components/Subtitle';
import TextArea from '../../../components/Home/TextArea';
import CheckBox from '../../../components/CheckBox';
// 모든약관에 동의합니다.
const JoinDiv = styled.div`
width: auto;
height: 70px;
background-color: rgb(242,242,242);
margin-top:40px;
margin-bottom:50px;
padding:10px;
line-height:125px;
`;

const CheckJoin = (props) => {
    const navigate = useNavigate();
    const isMd = useResize();

    // allCheck는 false로 설정
    const [allCheck, setAllCheck] = useState(false);
    const [termsConditions, setTermsConditions] = useState(false);
    const [personalConditions, setPersonalConditions] = useState(false);

    // 체크박스들의 상태값 감지
    useEffect(() => {
        if (termsConditions && personalConditions) {
            setAllCheck(true);
        } else {
            setAllCheck(false);
        }
    }, [termsConditions, personalConditions])

    // check 확인
    function allChecking() {
        // 둘 중 하나라도 false라면 true
        if ((termsConditions && personalConditions) === false) {
            setTermsConditions(true);
            setPersonalConditions(true);
            // 둘 중 하나라도 true라면 false
        } else if ((termsConditions || personalConditions) === true) {
            setTermsConditions(false);
            setPersonalConditions(false);
        }
    }


    return (
        <div className="join-container">
            <Subtitle size={isMd} title="이용약관 동의(필수)" />
            <TextArea value="약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정" />
            <hr />
            <div>
                <CheckBox float="right" id={"termConditions"} title="위의 이용약관에 동의합니다." setChangeValue={setTermsConditions} checked={termsConditions}></CheckBox>
            </div>

            <Subtitle size={isMd} title="개인정보수집 및 이용에 대한 안내(필수)" />
            <TextArea value="약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정 약관 전문 표기 영역으로 사용됩니다. 영역 내 표기될 ‘이용약관’에 대한 수정" />
            <hr />
            <div>
                <CheckBox float="right" title="위의 개인정보수집 및 이용에 대한 안내에 동의합니다." setChangeValue={setPersonalConditions} checked={personalConditions} id="personalConditions"></CheckBox>
            </div>
            <JoinDiv>
                <CheckBox float="" title="모든 약관에 동의합니다."
                    setChangeValue={setAllCheck} checked={allCheck} onChange={allChecking}></CheckBox>
            </JoinDiv>

            {allCheck && <button className="green-btn __md" style={{ margin: "0 auto" }} onClick={(e) => {
                // props.page("/Join/Check2")
                navigate("/Home/Join/Y")
            }}>다음</button>}
        </div>
    );
};

export default CheckJoin;