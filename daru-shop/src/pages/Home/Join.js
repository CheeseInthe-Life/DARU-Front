import React, { useState, useEffect } from 'react';

// CSS
import "../../asset/scss/pages/join.scss";

// pages
import CheckJoin from "./Join/CheckJoin";
import CheckJoin2 from "./Join/CheckJoin2";
import JoinStart from "./Join/JoinStart";
import JoinStart1 from "./Join/JoinStart1";
import JoinStart2 from "./Join/JoinStart2";
import JoinFinal from "./Join/JoinFinal";



// Join page
const Join = ({ title }) => {
    const [page, setPage] = useState("/");

    // page별 렌더링 함수
    function JoinRendering(page) {
        console.log(page);
        if (page === "/") {
            return (
                <CheckJoin page={setPage} />
            )

        } else if (page === "/Join/Check2") {
            return (
                <CheckJoin2 page={setPage} />
            );
        } else if (page === "/Join/Start") {
            return (
                <JoinStart page={setPage} title={title} />
            )
        } else if (page === "/Join/Start1") {
            return (
                <JoinStart1 page={setPage} />
            )
        } else if (page === "/Join/Start2") {
            return (
                <JoinStart2 page={setPage} />
            )
        } else if (page === "/Join/Final") {
            return (
                <JoinFinal />
            )
        }
    }
    return (
        <>
            {JoinRendering(page)}
        </>
    );
};

// // 회원가입 


export default Join;