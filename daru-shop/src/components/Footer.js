import React from 'react';

import "../asset/scss/footer.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-inner-container">
                <div className="footer-address">
                    <span>(주)다루</span>
                    <address>주소:서울특별시 양천구 신정로7길 75</address>
                    <span>통신판매번호:2020-서울송파-3147</span>
                </div>
                <div className="footer-tel">
                    <span>사업자 등록번호:174-88-01588</span>
                    <span>대표번호:02-6959-9635</span>
                </div>
                <div className="footer-copyright">
                    <span>Copyright &copy; 2021 humtouchlab. All rights reserved</span>
                </div>
            </div>

        </div>
    );
};

export default Footer;