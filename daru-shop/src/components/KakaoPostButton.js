import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const KakaoPostButton = (props) => {

    const [address, setAddress] = useState(''); // 주소
    const [addressDetail, setAddressDetail] = useState(''); // 상세주소

    const [isOpenPost, setIsOpenPost] = useState(false);



    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };

    const onCompletePost = (data) => {
        const fullAddr = data.address;
        const extraAddr = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }

        setAddress(data.zonecode);
        setAddressDetail(fullAddr);
        setIsOpenPost(false);
    };



    const postCodeStyle = {
        // display: 'block',
        // position: "absolute",
        // top: "50%",
        // left: "40%",
        width: '378px',
        height: '380px',
        border: '1px solid black',
        marginBottom: '15px',
    };



    return (
        <div>
            <button className={props.size + "-join-btn"} onClick={onChangeOpenPost}>우편번호 검색</button>
            {isOpenPost ? (
                <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
            ) : null}
        </div>
    );
};

KakaoPostButton.defaultProps = {
    size: "lg",

}

export default KakaoPostButton;