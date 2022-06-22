import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';

const KakaoPostButton = (props) => {
    const [isOpenPost, setIsOpenPost] = useState(false);

    // console.log(props.value);

    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };

    const onCompletePost = (data) => {
        // 주소 풀네이밍
        let fullAddr = data.address;
        // let extraAddr = '';
        // 우편번호
        let zoneCode = data.zonecode;

        // 상세주소
        // if (data.addressType === 'R') {
        //     if (data.bname !== '') {
        //         extraAddr += data.bname;
        //     }
        //     if (data.buildingName !== '') {
        //         extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
        //     }
        //     fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        // }
        setIsOpenPost(false);
        props.value(zoneCode, fullAddr);
    };



    const postCodeStyle = {
        // display: 'block',
        // position: "absolute",
        // top: "50%",
        // left: "40%",
        width: '318px',
        height: '380px',
        border: '1px solid black',
        marginBottom: '15px',
    };



    return (

        <div>
            <button className={props.size + "-join-btn"} onClick={onChangeOpenPost}>우편번호 검색</button>
            {isOpenPost && (
                <div><DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} /></div>
            )}
        </div>


    );
};

KakaoPostButton.defaultProps = {
    size: "lg",

}

export default KakaoPostButton;